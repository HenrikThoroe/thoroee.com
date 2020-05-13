export default abstract class Canvas {

    protected readonly canvas: HTMLCanvasElement

    protected readonly context: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!

        this.fixDpI()
        this.setup()
    }

    private fixDpI() {
        const dpi = window.devicePixelRatio
        let styleHeight = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2)
        let styleWidth = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2)
        
        this.canvas.setAttribute('height', `${styleHeight * dpi}`)
        this.canvas.setAttribute('width', `${styleWidth * dpi}`)
        this.canvas.style.height = `${styleHeight}px`
        this.canvas.style.width = `${styleWidth}px`
    }

    protected abstract setup(): void

}