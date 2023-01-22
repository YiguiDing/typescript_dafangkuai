import { Ball } from "./Ball.js";
import { Wall } from "./Wall.js";
import { Processor } from "./Processor.js";
import { InputListener } from "./InputListener.js";
import { Player } from "./Player.js";

export class Game {
	GAME_WIDTH = 1080;
	GAME_HEIGHT = 760;
	ball: Ball;
	wall: Wall;
	player: Player;
	inputListener = new InputListener();
	processor = new Processor();
	constructor(private canvas: HTMLCanvasElement, private context: CanvasRenderingContext2D) {
		this.canvas = canvas;
		this.context = context;
		this.canvas.width = this.GAME_WIDTH;
		this.canvas.height = this.GAME_HEIGHT;
		this.wall = new Wall(10, 10, this.GAME_WIDTH, 300, this.GAME_WIDTH, this.GAME_HEIGHT);
		this.ball = new Ball(this.GAME_WIDTH / 2, this.GAME_HEIGHT * 0.90, this.GAME_WIDTH, this.GAME_HEIGHT);
		this.player = new Player(this.GAME_WIDTH / 2, this.GAME_HEIGHT * 0.90, this.GAME_WIDTH, this.GAME_HEIGHT);
	}
	update(timeInterval: number) {
		this.ball.update(timeInterval);
		this.player.update(timeInterval);
		this.processor.process(this);
		this.processor.inputHandler(this, this.inputListener.inputs);
	}
	draw(context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);
		this.ball.draw(context);
		this.wall.draw(context);
		this.player.draw(context);
	}
	refresh(timeInterval: number, context: CanvasRenderingContext2D) {
		this.update(timeInterval);
		this.draw(context);
	}
	start() {
		let self = this;
		let last = 0;
		function animate(current: number) {
			self.refresh(current - last, self.context);
			last = current;
			requestAnimationFrame(animate);
		}
		animate(0);
	}
}
