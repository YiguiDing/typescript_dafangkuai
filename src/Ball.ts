import { RandomRange, Rect } from "./utils.js";
export class Ball {
	radius: number = 10;
	fillStyle: string = "white";
	strokeStyle: string = "whitesmoke";
	speedX: number = Math.sign(RandomRange(-1, 1)) * RandomRange(0.4, 0.5);
	speedY: number = Math.sign(RandomRange(-1, 1)) * RandomRange(0.4, 0.5);
	constructor(public posX: number, public posY: number, public GAME_WIDTH: number, public GAME_HEIGHT: number) {
		this.posX = posX;
		this.posY = posY;
		this.GAME_HEIGHT = GAME_HEIGHT;
		this.GAME_WIDTH = GAME_WIDTH;
	}
	reverseSpeedX() {
		this.speedX = -this.speedX;
	}
	reverseSpeedY() {
		this.speedY = -this.speedY;
	}
	move(timeInterval: number) {
		this.posX += this.speedX * timeInterval;
		this.posY += this.speedY * timeInterval;
	}
	_update(timeInterval: number) {
		this.move(timeInterval);
	}
	update(timeInterval: number) {
		let step = 1; // 按1ms模拟
		do {
			this._update(step);
			timeInterval -= step;
		} while (timeInterval > 0);
	}
	draw(context: CanvasRenderingContext2D) {
		context.save();
		context.beginPath();
		context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
		context.closePath();
		context.strokeStyle = this.strokeStyle;
		context.stroke();
		context.fillStyle = this.fillStyle;
		context.fill();
		context.restore();
	}
}
