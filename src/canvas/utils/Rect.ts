import Size from "./Size";
import Vector, { Point } from "./Vector";

export default class Rect {

    public size: Size

    public origin: Point

    constructor(size: Size, origin: Point) {
        this.size = size
        this.origin = origin
    }

    static from(width: number, height: number, x: number, y: number): Rect {
        return new Rect(new Size(width, height), new Vector(x, y))
    }

    get minX(): number {
        return this.origin.x
    }

    get maxX(): number {
        return this.origin.x + this.size.width
    }

    get midX(): number {
        return this.origin.x + this.size.width / 2
    }

    get minY(): number {
        return this.origin.y
    }

    get maxY(): number {
        return this.origin.y + this.size.height
    }

    get midY(): number {
        return this.origin.y + this.size.height / 2
    }

    get minRadius(): number {
        return Math.min(this.size.width, this.size.height) / 2
    }

    get maxRadius(): number {
        return Math.max(this.size.width, this.size.height) / 2
    }

    move(position: Point): Rect {
        return new Rect(this.size, position)
    }

    scale(factor: number) {
        const size = this.size.scaled(factor)
        const x = this.origin.x - (size.width - this.size.width ) / 2
        const y = this.origin.y - (size.height - this.size.height) / 2

        return new Rect(size, new Vector(x, y))
    }

    intersects(other: Rect) {
        // TODO: Implement
    }

    contains(other: Point) {
        return this.minX <= other.x && this.maxX >= other.x && this.minY <= other.y && this.maxY >= other.y
    }

}