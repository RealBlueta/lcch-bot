import Client from '../components/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('credits')
		.setDescription('List credits for the bot');

	async run(interaction: ChatInputCommandInteraction) {
		const client = interaction.client as Client;
		interaction.reply('todo!');
	}
})();
