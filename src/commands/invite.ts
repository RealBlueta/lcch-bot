import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Get a invite for the bot and discord server');

	async run(interaction: ChatInputCommandInteraction) {
		interaction.reply('todo!');
	}
})();
