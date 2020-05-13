export default class Size {

    public width: number

    public height: number 

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    scaled(factor: number): Size {
        return new Size(this.width * factor, this.height * factor)
    }
}