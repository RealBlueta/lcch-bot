import { CommandInteraction } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

export default new (class CodeCommand implements Command {
	name: string;
	description: string;

	constructor() {
		this.name = 'code';
		this.description = 'Code Command test';
	}

	async run(interaction: CommandInteraction) {
		// takes code and makes image
		// LCCH.createImage
		interaction.reply('Hello!');
	}
})();
