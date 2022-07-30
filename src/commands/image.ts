import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

export default new (class ImageCommand implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('image')
		.setDescription('Convert PNG image into LCCH code');

	async run(interaction: ChatInputCommandInteraction) {
		// takes image and makes code
		// LCCH.toCode
		interaction.reply('Hello!');
	}
})();
