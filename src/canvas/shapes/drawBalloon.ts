import Rect from "../utils/Rect";
import Vector, { Point } from "../utils/Vector";
import Size from "../utils/Size";

function drawCurve(context: CanvasRenderingContext2D, start: Point, end: Point) {
    const r = Math.abs(start.x - end.x)
    const cpDist = (radius: number) => radius * ((4 * (Math.sqrt(2) - 1)) / 3)

    if (start.x < end.x && start.y < end.y) {
        context.bezierCurveTo(
            start.x + cpDist(r),
            start.y,
            end.x,
            end.y - cpDist(r),
            end.x,
            end.y
        )
    } else if (start.x > end.x && start.y < end.y) {
        context.bezierCurveTo(
            start.x,
            start.y + cpDist(r),
            end.x + cpDist(r),
            end.y,
            end.x,
            end.y
        )
    } else if (start.x > end.x && start.y > end.y) {
        context.bezierCurveTo(
            start.x - cpDist(r),
            start.y,
            end.x,
            end.y + cpDist(r),
            end.x,
            end.y
        )
    } else {
        context.bezierCurveTo(
            start.x,
            start.y - cpDist(r),
            end.x - cpDist(r),
            end.y,
            end.x,
            end.y
        )
    }
}

export default function drawBalloon(context: CanvasRenderingContext2D, origin: Point, width: number) {
    const rect = new Rect(new Size(width, width * 1.3), origin)
    const p1 = new Vector(rect.midX, rect.minY)
    const p2 = new Vector(rect.maxX, rect.minY + rect.size.height / 3)
    const p3 = new Vector(rect.midX, rect.maxY)
    const p4 = new Vector(rect.minX, rect.minY + rect.size.height / 3)

    // const gradientOffset = rect.minRadius / 3
    // const color = context.createRadialGradient(
    //     rect.midX + gradientOffset, 
    //     rect.midY - gradientOffset,
    //     3,
    //     rect.midX,
    //     rect.midY,
    //     rect.minRadius + rect.minRadius * 0.4
    // )

    // color.addColorStop(0, "#fff")
    // color.addColorStop(0.7, "#4c566b")

    
    context.beginPath()
    context.fillStyle = "#4c566b"
    context.moveTo(rect.midX, rect.minY)

    drawCurve(context, p1, p2)
    drawCurve(context, p2, p3)
    drawCurve(context, p3, p4)
    drawCurve(context, p4, p1)

    context.closePath()
    context.fill()
}