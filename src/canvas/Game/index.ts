import Balloon from "./GameObject/Balloon"
import Rect from "../utils/Rect"
import Vector from "../utils/Vector"
import Cannon from "./GameObject/Cannon"
import GameObject from "./GameObject"
import Canvas from ".."

export default class Game extends Canvas {

    private lastRender: number = 0

    private balloons: Balloon[] = []

    private cannon!: Cannon

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.loop = this.loop.bind(this)

        this.cannon = new Cannon(
            this.context, 
            Rect.from(500, 400, this.canvas.width / 2 - 250, this.canvas.height - 400), 
            new Vector(0, 0), 
            { angle: 0, shooting: true }
        )
            
        this.start()
    }

    private get objects(): GameObject<any>[] {
        return [this.cannon, ...this.balloons]
    }

    private update(progress: number) {
        for (const ballon of this.balloons) {
            ballon.updateArea(progress)
        }
    }

    private draw() {
        for (const obj of this.objects) {
            obj.cleanUp()
        }

        for (const obj of this.objects) {
            obj.draw()
        }
    }

    private loop(timestamp: number) {
        const progress = timestamp - this.lastRender

        this.update(progress)
        this.draw()
        this.lastRender = timestamp

        window.requestAnimationFrame(this.loop)
    }

    private start() {
        this.balloons = [
            new Balloon(this.context, Rect.from(200, 200 * 1.3, 100, 100), new Vector(1, 0), { width: 200 }),
            new Balloon(this.context, Rect.from(200, 200 * 1.3, 100, 100), new Vector(2, 0), { width: 200 }),
            new Balloon(this.context, Rect.from(200, 200 * 1.3, 100, 100), new Vector(3, 0), { width: 200 })
        ]

        window.requestAnimationFrame(this.loop)
    }

}