import Vector from "../utils/Vector";
import Rect from "../utils/Rect";

export default abstract class GameObject<State> {

    public direction: Vector

    public state: State

    protected context: CanvasRenderingContext2D

    protected area: Rect

    protected lastArea: Rect

    constructor(context: CanvasRenderingContext2D, area: Rect, direction: Vector, state: State) {
        this.direction = direction
        this.state = state
        this.context = context
        this.area = area
        this.lastArea = area

        this.setPhysicalConstants()
    }

    abstract draw(): void

    protected setPhysicalConstants() {

    }

    cleanUp() {
        const dirtyRect = this.lastArea.scale(1.1)
        this.context.clearRect(dirtyRect.minX, dirtyRect.minY, dirtyRect.size.width, dirtyRect.size.height)
    }

    updateArea(progress: number) {
        const directionVector = this.direction.scale(progress / 10)
        const newPosition = this.area.origin.add(directionVector)
        this.lastArea = this.area
        this.area = this.area.move(newPosition)
    }

}