import Rect from "../utils/Rect";

function drawWheel(context: CanvasRenderingContext2D, rect: Rect) {
    context.beginPath()
    context.fillStyle = "black"
    context.arc(rect.midX, rect.midY, rect.minRadius, 0, 2 * Math.PI)
    context.closePath()
    context.fill()

    context.beginPath()
    context.fillStyle = "white"
    context.arc(rect.midX, rect.midY, rect.minRadius * 0.8, 0, 2 * Math.PI)
    context.closePath()
    context.fill()
}

function drawChassis(context: CanvasRenderingContext2D, rect: Rect) {
    context.beginPath()
    context.fillStyle = "black"
    context.moveTo(rect.minX, rect.minY)
    context.lineTo(rect.minX, rect.maxY)
    context.lineTo(rect.minX + 3 * rect.size.width / 32, rect.maxY)

    context.bezierCurveTo(
        rect.minX + 3 * rect.size.width / 32, 
        rect.maxY - rect.size.width / 6 - rect.size.width / 32, 
        rect.minX + (3 * rect.size.width) / 8 + rect.size.width / 32, 
        rect.maxY - rect.size.width / 6 - rect.size.width / 32, 
        rect.minX + (3 * rect.size.width) / 8 + rect.size.width / 32, 
        rect.maxY)

    context.lineTo(rect.maxX - 13 * rect.size.width / 32, rect.maxY)

    context.bezierCurveTo(
        rect.maxX - 13 * rect.size.width / 32,
        rect.maxY - rect.size.width / 6 - rect.size.width / 32,
        rect.maxX - 3 * rect.size.width / 32,
        rect.maxY - rect.size.width / 6 - rect.size.width / 32,
        rect.maxX - 3 * rect.size.width / 32,
        rect.maxY
    )

    context.lineTo(rect.maxX, rect.maxY)
    context.lineTo(rect.maxX, rect.minY)
    context.closePath()
    context.fill()
}

export default function drawCar(context: CanvasRenderingContext2D, rect: Rect) {
    const frontWheel = Rect.from(rect.size.width / 4, rect.size.width / 4, rect.maxX - rect.size.width / 4 - rect.size.width / 8, rect.maxY - rect.size.width / 4)
    const rearWheel = Rect.from(rect.size.width / 4, rect.size.width / 4, rect.minX + rect.size.width / 8, rect.maxY - rect.size.width / 4)
    const chassis = Rect.from(rect.size.width, rect.size.height - rect.size.width / 8, rect.minX, rect.minY)

    drawWheel(context, rearWheel)
    drawChassis(context, chassis)
    drawWheel(context, frontWheel)
}