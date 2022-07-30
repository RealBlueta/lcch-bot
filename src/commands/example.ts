import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('example')
		.setDescription('Show a example of how the bot works');

	async run(interaction: ChatInputCommandInteraction) {
		interaction.reply('todo!');
	}
})();
