import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data = new SlashCommandBuilder()
		.setName('imagify')
		.setDescription('Convert LCCH code into PNG')
		.addStringOption((option) =>
			option.setName('code').setDescription('The LCCH code').setRequired(true)
		);

	async run(interaction: ChatInputCommandInteraction) {
		// takes code and makes image
		// LCCH.createImage
		const code = interaction.options.getString('code')!;
		return interaction.reply(`Hello ${code}!`);
	}
})();
