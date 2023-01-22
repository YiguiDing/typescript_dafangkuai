import { InputListener, TypeInputs } from "./InputListener.js";

export class Player {
	speedX: number = 0;
	speedY: number = 0;
	width: number = 80;
	height: number = 10;
	moveSpeedX = 1.5;
	moveSpeedY = 1.5;
	fillStyle = "skyblue";
	strokeStyle = "white";
	constructor(public posX: number, public posY: number, public GAME_WIDTH: number, public GAME_HEIGHT: number) {
		this.posX = posX;
		this.posY = posY;
		this.GAME_WIDTH = GAME_WIDTH;
		this.GAME_HEIGHT = GAME_HEIGHT;
	}
	move(timeInterval: number) {
		this.posX += this.speedX * timeInterval;
		this.posY += this.speedY * timeInterval;
	}
	update(timeInterval: number) {
		this.move(timeInterval);
	}
	draw(context: CanvasRenderingContext2D) {
		context.save();
		context.fillStyle = this.fillStyle;
		context.fillRect(this.posX, this.posY, this.width, this.height);
		context.strokeStyle = this.strokeStyle;
		context.strokeRect(this.posX, this.posY, this.width, this.height);
		context.restore();
	}
	inputHandler(inputs: TypeInputs) {
		if (inputs.includes(InputListener.KeyMap.PressRight)) {
			this.speedX = this.moveSpeedX;
		} else if (inputs.includes(InputListener.KeyMap.PressLeft)) {
			this.speedX = -this.moveSpeedX;
		} else {
			this.speedX = 0;
			this.speedY = 0;
		}
	}
}