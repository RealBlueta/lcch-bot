import { ChatInputCommandInteraction } from 'discord.js';

export interface Command {
	data: any;
	run: (interaction: ChatInputCommandInteraction) => any;
}

export interface RGBA {
	r: number;
	g: number;
	b: number;
	a: number;
}
