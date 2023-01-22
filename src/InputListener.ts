import { ValueOf } from "./utils.js";

export type KeyMapValue = ValueOf<typeof InputListener.KeyMap>;
export type TypeInputs = Array<KeyMapValue>;
export class InputListener {
	static KeyMap = {
		PressRight: "ArrowRight",
		PressLeft: "ArrowLeft",
		PressUp: "ArrowUp",
		PressDown: "ArrowDown",
		PressSpace: " ",
		Enter: "Enter",
		Escape: "Escape"
	} as const; // const 可以保证ValueOf能起作用
	inputs: TypeInputs = [];
	constructor() {
		this.listening();
	}
	listening() {
		window.addEventListener("keydown", event => {
			let key = event.key as KeyMapValue;
			if (Object.values(InputListener.KeyMap).includes(key) && !this.inputs.includes(key)) {
				this.inputs.unshift(key); // 放到开头，表示先按下的键优先级高
			}
		});
		window.addEventListener("keyup", event => {
			let key = event.key as KeyMapValue;
			if (this.inputs.includes(key)) {
				this.inputs.splice(this.inputs.indexOf(key), 1);
			}
		});
	}
}
