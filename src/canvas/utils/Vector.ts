export type Point = Vector

export default class Vector {

    public readonly x: number

    public readonly y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    static get zero(): Vector {
        return new Vector(0, 0)
    }

    equals(other: Vector): boolean {
        return other.x === this.x && other.y === this.y
    }

    add(other: Vector): Vector {
        return new Vector(this.x + other.x, this.y + other.y)
    }

    scale(scalar: number): Vector {
        return new Vector(this.x * scalar, this.y * scalar)
    }

}