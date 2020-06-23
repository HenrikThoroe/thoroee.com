import GameObject from ".";
import drawBalloon from "../../shapes/drawBalloon";

export default class Balloon extends GameObject<{ width: number }> {

    draw(): void {
        drawBalloon(this.context, this.area.origin, this.state.width)
    }

}