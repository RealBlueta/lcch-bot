import { CommandInteraction } from 'discord.js';

export interface Command {
	data: any;
	run: (interaction: CommandInteraction) => Promise<void> | void;
}

export interface RGBA {
	r: number;
	g: number;
	b: number;
	a: number;
}
