import Balloon from "./GameObject/Balloon"
import Rect from "./utils/Rect"
import Vector from "./utils/Vector"
import Cannon from "./GameObject/Cannon"
import GameObject from "./GameObject"

export default class Game {

    private readonly canvas: HTMLCanvasElement

    private readonly context: CanvasRenderingContext2D

    private lastRender: number = 0

    private balloons: Balloon[] = []

    private cannon: Cannon

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!
        this.loop = this.loop.bind(this)


        this.fixDpI()

        this.cannon = new Cannon(
            this.context, 
            Rect.from(500, 400, this.canvas.width / 2 - 250, this.canvas.height - 400), 
            new Vector(0, 0), 
            { angle: 0, shooting: true }
        )
            
        this.start()

        // window.addEventListener("resize", () => this.fixDpI())
    }

    private fixDpI() {
        const dpi = window.devicePixelRatio
        let styleHeight = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2)
        let styleWidth = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2)
        
        this.canvas.setAttribute('height', `${styleHeight * dpi}`)
        this.canvas.setAttribute('width', `${styleWidth * dpi}`)
        this.canvas.style.height = `${styleHeight}px`
        this.canvas.style.width = `${styleWidth}px`
        // this.context.transform(1, 0, 0, -1, 0, this.canvas.height)
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