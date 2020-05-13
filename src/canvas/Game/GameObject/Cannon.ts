import GameObject from ".";
import drawCannon from "../../shapes/drawCannon";

export default class Cannon extends GameObject<{ angle: number, shooting: boolean }> {

    draw() {
        drawCannon(this.context, this.area, this.state.angle, this.state.shooting)
    }

}