import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

export default new (class implements Command {
	data = new SlashCommandBuilder()
		.setName('codify')
		.setDescription('Convert PNG image into LCCH code')
		.addAttachmentOption((option) =>
			option
				.setName('input')
				.setDescription('The PNG image of the crosshair (MAX 37x37)')
				.setRequired(true)
		);

	async run(interaction: ChatInputCommandInteraction) {
		// takes image and makes code
		// LCCH.toCode
		interaction.reply('Hello!');
	}
})();
