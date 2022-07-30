import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface Command {
	data: SlashCommandBuilder
	run: (interaction: CommandInteraction) => Promise<void> | void;
}

export interface RGBA {
	r: number;
	g: number;
	b: number;
	a: number;
}
