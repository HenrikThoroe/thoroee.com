import Rect from "../utils/Rect";
import Vector from "../utils/Vector";

export default function drawCannon(context: CanvasRenderingContext2D, rect: Rect, angle: number, shooting: boolean = false) {
    rect = Rect.from(rect.size.width * 0.6, rect.size.height, rect.minX + rect.size.width * 0.2, rect.minY)

    const w = rect.size.width / 2

    context.translate(rect.minX + w, rect.maxY - rect.size.width / 4)
    context.rotate(angle)
    context.translate(-rect.minX - w, -rect.maxY + rect.size.width / 4)

    context.beginPath()
    context.fillStyle = "#3b4253"
    context.moveTo(rect.minX + w / 2, rect.maxY - rect.size.height / 4)
    context.lineTo(rect.maxX - w / 2, rect.maxY - rect.size.height / 4)
    context.lineTo(rect.maxX - w / 2, rect.maxY - rect.size.width)
    context.bezierCurveTo(
        rect.maxX - w / 2 - w / 8,
        rect.maxY - rect.size.width + rect.size.height / 12,
        rect.minX + w / 2 + w / 8,
        rect.maxY - rect.size.width + rect.size.height / 12,
        rect.minX + w / 2,
        rect.maxY - rect.size.width
    )
    context.closePath()
    context.fill()

    context.beginPath()
    context.lineWidth = 2
    context.lineCap = "round"
    context.fillStyle = "#434c5f"
    context.strokeStyle = "#000"
    context.moveTo(rect.maxX - w / 2, rect.maxY - rect.size.width)
    context.bezierCurveTo(
        rect.maxX - w / 2 - w / 8,
        rect.maxY - rect.size.width + rect.size.height / 12,
        rect.minX + w / 2 + w / 8,
        rect.maxY - rect.size.width + rect.size.height / 12,
        rect.minX + w / 2,
        rect.maxY - rect.size.width
    )
    context.bezierCurveTo(
        rect.minX + w / 2 + w / 8,
        rect.maxY - rect.size.width - rect.size.height / 12,
        rect.maxX - w / 2 - w / 8,
        rect.maxY - rect.size.width - rect.size.height / 12,
        rect.maxX - w / 2,
        rect.maxY - rect.size.width
    )
    context.stroke()
    context.fill()

    if (shooting) {
        const drawSmoke = (startX: number, startY: number) => {
            let radius = 0
            let angle = 0
            context.beginPath()
            context.lineWidth = 6
            context.strokeStyle = "#ccc"
            context.moveTo(startX, startY)

            for (var n = 0; n < 150; n++) {
                radius += 0.2;
                // make a complete circle every 50 iterations
                angle += (Math.PI * 2) / 50;
                let x = startX + radius * Math.cos(angle);
                let y = startY + radius * Math.sin(angle);
                context.lineTo(x, y);
            }
            
            context.stroke()
        }

        const rng = (a: number, b: number, y: number) => a + (b - a) / (y + 1)

        for (let i = 0; i <= 4; ++i) {
            let x = rect.minX + (i * rect.size.width / 4)
            let y = rect.minY + 75 * 0.2//rect.minY + 75 * 0.2, rect.maxY - rect.size.width, i)

            drawSmoke(x, y)
        }
    }

    context.translate(rect.minX + w, rect.maxY - rect.size.width / 4)
    context.rotate(-angle)
    context.translate(-rect.minX - w, -rect.maxY + rect.size.width / 4)

    context.beginPath()
    context.fillStyle = "#2e3440"
    context.moveTo(rect.midX, rect.maxY)
    context.arc(rect.midX, rect.maxY, rect.size.width / 2, 0, Math.PI, true)
    context.fill()
}