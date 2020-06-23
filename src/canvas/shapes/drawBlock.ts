import Rect from "../utils/Rect";

export type BlockStyle = "Ground"

function applyGroundStyle(context: CanvasRenderingContext2D, rect: Rect) {
    const points = 5
    const lambda = rect.size.width / points

    context.fillStyle = "#fff"
    context.strokeStyle = "transparent"

    context.fill()
    context.stroke()

    context.fillStyle = "#000"
    context.strokeStyle = "#000"
    context.moveTo(rect.origin.x, rect.origin.y + rect.size.height)

    for (let i = 0; i < points; ++i) {
        
        // context.fillRect(rect.origin.x + lambda * i, rect.origin.y + rect.size.height - 20, 2, 2)
        context.lineTo(rect.origin.x + lambda * i, rect.origin.y + rect.size.height - 20)
        context.lineTo(rect.origin.x + lambda * i + lambda / 2, rect.origin.y + rect.size.height - 10)
    }

    context.lineTo(rect.origin.x + rect.size.width, rect.origin.y + rect.size.height)
    context.closePath()
    context.stroke()
}

export default function drawBlock(context: CanvasRenderingContext2D, rect: Rect, style: BlockStyle) {
    context.rect(rect.origin.x, rect.origin.y, rect.size.width, rect.size.height)

    switch (style) {
        case "Ground":
            applyGroundStyle(context, rect)
            break
    }
}