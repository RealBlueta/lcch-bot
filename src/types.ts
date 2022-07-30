import { ChatInputCommandInteraction } from 'discord.js';

export interface Command {
	data: any;
	run: (interaction: ChatInputCommandInteraction) => Promise<void> | void;
}

export interface RGBA {
	r: number;
	g: number;
	b: number;
	a: number;
}
