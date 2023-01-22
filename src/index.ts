import { Game } from "./Game.js";

document.addEventListener("DOMContentLoaded", () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var context = canvas.getContext("2d") as CanvasRenderingContext2D;
	new Game(canvas, context).start();
});
