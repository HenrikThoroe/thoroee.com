import Rect from "../utils/Rect";
import Size from "../utils/Size";
import Vector from "../utils/Vector";

function drawEngine(context: CanvasRenderingContext2D, rect: Rect) {
    const height = rect.size.width / 5
    const width = rect.size.width - rect.size.width / 6

    context.beginPath()
    context.fillStyle = "#ebebeb"
    context.arc(rect.origin.x + rect.size.width - rect.size.width / 6, rect.origin.y + height / 2, height / 2, 0, 2 * Math.PI, true)
    context.closePath()
    context.fill()

    context.beginPath()
    context.fillStyle = "darkred"
    context.rect(rect.origin.x, rect.origin.y, width, height)
    context.closePath()
    context.fill()

    context.beginPath() 
    context.fillStyle = "darkred"
    context.moveTo(rect.origin.x, rect.origin.y)
    context.lineTo(rect.origin.x - 20, rect.origin.y + 10)
    context.lineTo(rect.origin.x - 20, rect.origin.y + height - 10)
    context.lineTo(rect.origin.x, rect.origin.y + height)
    context.closePath()
    context.fill()

    context.beginPath()
    context.fillStyle = "#ebebeb"
    context.rect(rect.origin.x, rect.origin.y + height / 3 - 20 / 2, width + 1, 20)
    context.fill()

    context.beginPath()
    context.fillStyle = "#ebebeb"
    context.moveTo(rect.origin.x, rect.origin.y + height / 3 - 20 / 2)
    context.lineTo(rect.origin.x - 20, rect.origin.y + height / 3 - 20 / 2 + 10)
    context.lineTo(rect.origin.x - 20, rect.origin.y + height / 3 - 20 / 2 + 30)
    context.lineTo(rect.origin.x, rect.origin.y + height / 3 - 20 / 2 + 20)
    context.closePath()
    context.fill()

    context.beginPath()
    context.fillStyle = "#ebebeb"
    context.rect(rect.origin.x, rect.origin.y + height / 1.5 - 20 / 2, width + 1, 20)
    context.fill()

    context.beginPath()
    context.fillStyle = "#ebebeb"
    context.moveTo(rect.origin.x, rect.origin.y + height / 1.5 - 20 / 2)
    context.lineTo(rect.origin.x - 20, rect.origin.y + height / 1.5 - 20 / 2 - 10)
    context.lineTo(rect.origin.x - 20, rect.origin.y + height / 1.5 - 20 / 2 + 10)
    context.lineTo(rect.origin.x, rect.origin.y + height / 1.5 - 20 / 2 + 20)
    context.closePath()
    context.fill()
}

function drawHull(context: CanvasRenderingContext2D, rect: Rect) {
    const height = rect.size.height / 2
    const mainRect = new Rect(new Size(rect.size.width * 0.8, rect.size.height), new Vector(rect.origin.x + rect.size.width * 0.2, rect.origin.y))
    const attachmentHeight = rect.size.height / 5

    context.beginPath()
    context.fillStyle = "darkred"
    context.moveTo(mainRect.maxX, mainRect.midY - height / 2)
    context.lineTo(mainRect.maxX, mainRect.midY + height / 2)
    context.lineTo(mainRect.midX, mainRect.midY + height)
    context.lineTo(mainRect.minX, mainRect.midY + height)
    context.lineTo(mainRect.minX, mainRect.midY - height)
    context.lineTo(mainRect.midX, mainRect.midY - height)
    context.lineTo(mainRect.maxX, mainRect.midY - height / 2)
    context.closePath()
    context.fill()

    context.beginPath()
    context.fillStyle = "darkred"
    context.moveTo(mainRect.minX, mainRect.minY)
    context.lineTo(rect.minX, rect.minY)
    context.lineTo(rect.minX, rect.minY + attachmentHeight / 2)
    context.lineTo(mainRect.minX, mainRect.minY + attachmentHeight)
    context.closePath()
    context.fill()

    context.beginPath()
    context.fillStyle = "darkred"
    context.moveTo(mainRect.minX, mainRect.maxY)
    context.lineTo(rect.minX, rect.maxY)
    context.lineTo(rect.minX, rect.maxY - attachmentHeight / 2)
    context.lineTo(mainRect.minX, mainRect.maxY - attachmentHeight)
    context.closePath()
    context.fill()
}

export default function drawSpaceShip(context: CanvasRenderingContext2D, rect: Rect) {
    const engineSize = new Size(rect.size.width - rect.size.width / 6, rect.size.width / 5)
    const engineOnePos = new Vector(rect.origin.x, rect.origin.y)
    const engineTwoPos = new Vector(rect.origin.x, rect.origin.y + rect.size.height - engineSize.height)
    const engineOneRect = new Rect(new Size(rect.size.width / 1.5, rect.size.height), engineOnePos)
    const engineTwoRect = new Rect(new Size(rect.size.width / 1.5, rect.size.height), engineTwoPos)

    context.strokeStyle="blue"
    context.lineWidth = 3
    context.strokeRect(rect.origin.x, rect.origin.y, rect.size.width, rect.size.height)

    drawEngine(context, engineOneRect)
    drawEngine(context, engineTwoRect)

    drawHull(context, Rect.from(3 * rect.size.width / 4, rect.size.height / 3, rect.origin.x + rect.size.width / 4, rect.origin.y + engineSize.height))
}