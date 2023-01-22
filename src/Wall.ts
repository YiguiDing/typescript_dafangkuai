export class Block {
	constructor(
		public posX: number,
		public posY: number,
		public width: number,
		public height: number,
		public fillStyle: string,
		public strokeStyle: string
	) {
		this.posX = posX;
		this.posY = posY;
		this.width = width;
		this.height = height;
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;
	}
	update(timeInterval: number) {}
	draw(context: CanvasRenderingContext2D) {
		context.save();
		context.fillStyle = this.fillStyle;
		context.fillRect(this.posX, this.posY, this.width, this.height);
		context.strokeStyle = this.strokeStyle;
		context.strokeRect(this.posX, this.posY, this.width, this.height);
		context.restore();
	}
}
export class Wall {
	blocks: Array<Block> = [];
	constructor(
		public width: number,
		public height: number,
		public WALL_MAX_WIDTH: number,
		public WALL_MAX_HEIGHT: number,
		public GAME_WIDTH: number,
		public GAME_HEIGHT: number
	) {
		this.width = width;
		this.height = height;
		this.WALL_MAX_WIDTH = WALL_MAX_WIDTH;
		this.WALL_MAX_HEIGHT = WALL_MAX_HEIGHT;
		this.GAME_WIDTH = GAME_WIDTH;
		this.GAME_HEIGHT = GAME_HEIGHT;

		let BLOCK_WIDTH = this.WALL_MAX_WIDTH / this.width;
		let BLOCK_HEIGHT = this.WALL_MAX_HEIGHT / this.height;
		for (var i = 0; i < this.width; i++) {
			for (var j = 0; j < this.height; j++) {
				this.blocks.push(new Block(i * BLOCK_WIDTH, j * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT, "gray", "black"));
			}
		}
	}
	update(){
		
	}
	draw(context: CanvasRenderingContext2D) {
		this.blocks.forEach(item => item.draw(context));
	}
}
