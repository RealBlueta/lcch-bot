import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

export default new (class CodeCommand implements Command {
	data = new SlashCommandBuilder()
		.setName('code')
		.setDescription('Convert LCCH code into PNG')
		.addStringOption((option) =>
			option
				.setName('code')
				.setDescription('The LCCH code')
				.setRequired(true)
		);

	async run(interaction: ChatInputCommandInteraction) {
		// takes code and makes image
		// LCCH.createImage
		const code = interaction.options.getString('code')!;
		interaction.reply(`Hello ${code}!`);
	}
})();
