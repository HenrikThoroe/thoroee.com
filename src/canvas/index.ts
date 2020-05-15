import Size from "./utils/Size"

export default abstract class Canvas {

    protected readonly canvas: HTMLCanvasElement

    protected readonly context: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!

        this.fixDpI()
    }

    protected set size(size: Size) {
        const dpi = window.devicePixelRatio

        this.canvas.setAttribute('height', `${size.height}`)
        this.canvas.setAttribute('width', `${size.width}`)
        this.canvas.style.height = `${size.height / dpi}px`
        this.canvas.style.width = `${size.width / dpi}px`
    }

    protected get dpi(): number {
        return window.devicePixelRatio
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

}