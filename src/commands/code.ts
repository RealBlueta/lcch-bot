import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

export default new (class CodeCommand implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('code')
		.setDescription('Convert LCCH code into PNG');

	async run(interaction: CommandInteraction) {
		// takes code and makes image
		// LCCH.createImage
		interaction.reply('Hello!');
	}
})();
