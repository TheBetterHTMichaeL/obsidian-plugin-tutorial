import { Plugin } from 'obsidian'

export default class ExamplePlugin extends Plugin {
	statusBarTextElement: HTMLSpanElement;

	onload(): void {
		this.statusBarTextElement =  this.addStatusBarItem().createEl('span')
		this.statusBarTextElement.textContent = "Hello World!";
	}
}