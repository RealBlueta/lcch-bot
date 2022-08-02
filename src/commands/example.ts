import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('example')
		.setDescription('Show a example of how the bot works');

	async run(interaction: ChatInputCommandInteraction) {
		// Copy this image and put it into a photo editing program, and edit it.
		// Reminders:
		// - Only use one color, and keep the background transparent. (Use PNG)
		// - Image must be 37x37 or under.
		// (recommended to keep width and height the same)
		// https://cdn.discordapp.com/attachments/926314815708889118/942102897938812948/example.png
		return interaction.reply('todo!');
	}
})();
