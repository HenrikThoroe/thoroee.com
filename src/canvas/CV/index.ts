import Canvas from "..";
import Rect from "../utils/Rect";
import Size from "../utils/Size";
import Vector from "../utils/Vector";
import cpDist from "../utils/controlPointDistanceForCircle";
import CVEvent from "../../redux/state/CVEvent";
import moment from "moment"

type DrawStyle = string | CanvasGradient | CanvasPattern

enum EventPosition {
    NoIntersection,
    EnterEnd,
    StartLeave,
    StartEnd,
    EnterLeave
}

interface Marker {
    type: "start" | "end" | "inline"
    position: number
    event: CVEvent
}

type GradientMarker = [Marker, Marker]

export default class CV extends Canvas {

    private rows!: number

    private drawArea!: Rect

    private curveRadius!: number

    private rightLineEnd!: number

    private leftLineEnd!: number

    private startDate: Date = new Date(2003, 1, 17)

    private endDate: Date = new Date()

    private clickAreas: [Rect, CVEvent][]

    private events: CVEvent[]

    public onEventClicked: (event: CVEvent) => void

    constructor(canvas: HTMLCanvasElement, events: CVEvent[], onEventClicked: (event: CVEvent) => void) {
        super(canvas)
        this.events = events
        this.clickAreas = []
        this.onEventClicked = onEventClicked
        this.setup()
    }

    private setup() {
        this.startDate = new Date(2003, 1, 17)
        this.endDate = new Date()
    
        const yearsPerRow = 5
        const years = this.endDate.getFullYear() - this.startDate.getFullYear()
        const boundingRect = new Rect(new Size(this.canvas.width, this.canvas.height), Vector.zero)

        this.drawArea = boundingRect.scale(0.9)
        this.rightLineEnd = this.drawArea.size.width * 0.9 + this.drawArea.minX
        this.leftLineEnd = this.drawArea.minX + this.drawArea.size.width * 0.1
        this.curveRadius = (this.drawArea.size.width - this.drawArea.minX) * 0.1
        this.rows = Math.ceil(years / yearsPerRow)
        this.size = new Size(boundingRect.size.width, this.height() + this.drawArea.minY * 2)
        this.draw()

        this.canvas.addEventListener("click", e => {
            const bounding = this.canvas.getBoundingClientRect()
            const eventCoord = new Vector(e.clientX - bounding.left, e.clientY - bounding.top).scale(this.dpi)

            for (const [area, event] of this.clickAreas) {
                if (area.contains(eventCoord)) {
                    this.onEventClicked(event)
                }
            }
        })
    }

    private height() {
        return this.curveRadius * 2 * this.rows
    }

    private get cpOffset(): number {
        return cpDist(this.curveRadius)
    }

    private isLastRow(row: number): boolean {
        return row === this.rows - 1
    }

    private eventPosition(event: CVEvent, range: [number, number]) {
        const fullRange = this.endDate.getTime() - this.startDate.getTime()
        const percent = (date: Date) => (date.getTime() - this.startDate.getTime()) / fullRange
        const eventRange = [percent(event.date[0]), percent(event.date[1])]
        let positionType: EventPosition

        // No touch with event
        if (eventRange[1] < range[0] || eventRange[0] > range[1]) {
            positionType = EventPosition.NoIntersection
        } else {
            // Enter - End
            if (eventRange[0] < range[0] && eventRange[1] < range[1]) {
                positionType = EventPosition.EnterEnd
            } 

            // Start - Leave
            if (eventRange[0] > range[0] && eventRange[1] > range[1]) {
                positionType = EventPosition.StartLeave
            }

            // Start - End
            if (eventRange[0] >= range[0] && eventRange[1] <= range[1]) {
                positionType = EventPosition.StartEnd
            }

            // Enter - Leave
            if (eventRange[0] < range[0] && eventRange[1] > range[1]) {
                positionType = EventPosition.EnterLeave
            }
        }
        
        return {
            type: positionType!,
            percentage: eventRange
        }
    }

    private range(row: number): [number, number] {
        const x = 1 / this.rows
        return [x * row, x * (row + 1)]
    }

    private translatePercent(x: number, lb: number, ub: number): number {
        if (!(x >= lb && x <= ub) || lb > ub) {
            throw new Error(`${x} is not in range [${lb}, ${ub}]`)
        }

        return (x - lb) / (ub - lb)
    }

    private drawRow(row: number, area: Rect, direction: "right" | "left", style: DrawStyle) {
        this.context.beginPath()
        this.context.lineWidth = 30
        this.context.lineCap = "round"
        this.context.strokeStyle = style

        if (direction === "right") {
            if (row === 0) {
                this.context.moveTo(area.minX, area.midY)
            } else {
                this.context.moveTo(area.minX, area.minY)
                this.context.bezierCurveTo(
                    area.minX,
                    area.minY + this.cpOffset,
                    this.leftLineEnd - this.cpOffset,
                    area.midY,
                    this.leftLineEnd,
                    area.midY
                )
            }

            if (this.isLastRow(row)) {
                this.context.lineTo(area.maxX, area.midY)
            } else {
                this.context.lineTo(this.rightLineEnd, area.midY)
                this.context.bezierCurveTo(
                    this.rightLineEnd + this.cpOffset,
                    area.midY,
                    area.maxX,
                    area.maxY - this.cpOffset,
                    area.maxX,
                    area.maxY 
                )
            }

        } else {
            this.context.moveTo(area.maxX, area.minY)
            this.context.bezierCurveTo(
                area.maxX,
                area.minY + this.cpOffset,
                this.rightLineEnd + this.cpOffset,
                area.midY,
                this.rightLineEnd,
                area.midY
            )

            if (this.isLastRow(row)) {
                this.context.lineTo(area.minX, area.midY)
            } else {
                this.context.lineTo(this.leftLineEnd, area.midY)
                this.context.bezierCurveTo(
                    this.leftLineEnd - this.cpOffset,
                    area.midY,
                    area.minX,
                    area.maxY - this.cpOffset,
                    area.minX,
                    area.maxY
                )
            }
        }

        this.context.stroke()
    }

    private calculateMarker(row: number, event: CVEvent): GradientMarker | null {
        const range = this.range(row)
        const { type, percentage } = this.eventPosition(event, range)

        if (type === EventPosition.NoIntersection) {
            return null
        }

        const translate = (value: number) => this.translatePercent(value, range[0], range[1])

        switch (type) {
            case EventPosition.StartEnd:
                return [
                    { type: "start", position: translate(percentage[0]), event: event },
                    { type: "end", position: translate(percentage[1]), event: event }
                ]
            case EventPosition.StartLeave:
                return [
                    { type: "start", position: translate(percentage[0]), event: event },
                    { type: "inline", position: 1, event: event }
                ]
            case EventPosition.EnterEnd:
                return [
                    { type: "inline", position: 0, event: event },
                    { type: "end", position: translate(percentage[1]), event: event }
                ]
            case EventPosition.EnterLeave:
                return [
                    { type: "inline", position: 0, event: event },
                    { type: "inline", position: 1, event: event }
                ]
        }
    }

    private getMarkers(row: number): GradientMarker[] {
        const markers: GradientMarker[] = []

        for (const event of this.events) {
            const marker = this.calculateMarker(row, event)
            if (marker) {
                markers.push(marker)
            }
        }

        return markers
    }

    private isPointEvent(event: CVEvent) {
        const startMoment = moment(event.date[0])
        const endMoment = moment(event.date[1])

        return endMoment.diff(startMoment, "months") < 3
    }

    private calculateStyle(direction: "left" | "right", area: Rect, markers: GradientMarker[]): DrawStyle {
        const plainColor = "#6a7491"
        const highlightColor = "#2e3440"//"#d2876d"
        const midRight = new Vector(area.maxX + 15, area.midY)
        const midLeft = new Vector(area.minX - 15, area.midY)
        const bgStart = direction === "right" ? midLeft : midRight
        const bgEnd = direction === "right" ? midRight : midLeft
        const gradient = this.context.createLinearGradient(bgStart.x, bgStart.y, bgEnd.x, bgEnd.y)
        let min = Infinity
        let max = -Infinity

        if (markers.length === 0) {
            return plainColor
        }

        for (const marker of markers) {
            const start = marker[0]
            const end = marker[1]
            const startMoment = moment(start.event.date[0])
            const endMoment = moment(end.event.date[1])
            
            if (endMoment.diff(startMoment, "months") < 3) {
                continue
            }

            if (marker[0].position < min) {
                min = marker[0].position
            }

            if (marker[1].position > max) {
                max = marker[1].position
            }
        }

        if (min === Infinity || max === -Infinity) {
            return plainColor
        }

        gradient.addColorStop(min, plainColor)
        gradient.addColorStop(min, highlightColor)
        gradient.addColorStop(max, highlightColor)
        gradient.addColorStop(max, plainColor)

        return gradient
    }

    private createDrawingArea(row: number) {
        return Rect.from(
            this.drawArea.size.width, 
            this.curveRadius * 2, 
            this.drawArea.minX, 
            this.curveRadius * 2 * row + this.drawArea.minY
        )
    }

    private drawEventEndings(marker: Marker, area: Rect, direction: "left" | "right") {
        const strokeColor = "#3b4253"
        const fillColor = "#d8dee9"
        const textColor = "#4c566b"
        const position = new Vector(
            direction === "right" ? 
                area.minX + area.size.width * marker.position : 
                area.maxX - area.size.width * marker.position, 
            area.midY)

        if (marker.type === "start") {
            this.context.beginPath()
            this.context.lineWidth = 5
            this.context.strokeStyle = strokeColor
            this.context.moveTo(position.x, position.y)
            this.context.lineTo(position.x - 100, position.y + area.size.height / 4)
            this.context.stroke()

            this.context.beginPath()
            this.context.lineWidth = 5
            this.context.strokeStyle = strokeColor
            this.context.moveTo(position.x, position.y)
            this.context.lineTo(position.x + 100, position.y + area.size.height / 4)
            this.context.stroke()

            this.context.beginPath()
            this.context.lineWidth = 5
            this.context.fillStyle = fillColor
            this.context.strokeStyle = strokeColor
            this.context.arc(position.x, position.y, 25, 0, 2 * Math.PI)
            this.context.fill()
            this.context.stroke()

            this.context.beginPath()
            this.context.lineWidth = 5
            this.context.fillStyle = fillColor
            this.context.strokeStyle = strokeColor
            this.context.rect(position.x - 100, position.y + area.size.height / 4, 200, 100)
            this.context.fill()
            this.context.stroke()

            this.context.beginPath()
            this.context.lineWidth = 5
            this.context.fillStyle = textColor
            this.context.textAlign = "center"
            this.context.font = "32px Arial bold"
            this.context.fillText(marker.event.name, position.x, position.y + area.size.height / 4 + 50 + 16, 180)
            this.context.fill()
            this.context.stroke()

            this.context.beginPath()
            this.context.fillStyle = textColor
            this.context.textAlign = "center"
            this.context.font = "32px Arial bold"
            this.context.fillText(marker.event.id.toString(), position.x, position.y + 12)
            this.context.fill()

            this.clickAreas.push([Rect.from(200, 100, position.x - 100, position.y + area.size.height / 4), marker.event])
        }

        if (marker.type === "end" && !this.isPointEvent(marker.event)) {
            this.context.beginPath()
            this.context.lineWidth = 5
            this.context.fillStyle = fillColor
            this.context.strokeStyle = strokeColor
            this.context.rect(position.x - 20, position.y - 40, 40, 80)
            this.context.fill()
            this.context.stroke()

            this.context.beginPath()
            this.context.fillStyle = textColor
            this.context.textAlign = "center"
            this.context.font = "32px Arial bold"
            this.context.fillText(marker.event.id.toString(), position.x, position.y + 12)
            this.context.fill()
        }
    }

    private createRow(row: number) {
        const direction = row % 2 === 0 ? "right" : "left"
        const markers = this.getMarkers(row)
        const area = this.createDrawingArea(row)
        const rowStyle = this.calculateStyle(direction, area, markers) 

        this.drawRow(row, area, direction, rowStyle)

        for (const marker of markers) {
            this.drawEventEndings(marker[0], area, direction)
            this.drawEventEndings(marker[1], area, direction)
        }
    }

    private draw() {
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for (let i = 0; i < this.rows; ++i) {
            this.createRow(i)
        }

    }
    
}