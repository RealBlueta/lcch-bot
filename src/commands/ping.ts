import Client from '../components/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check the bots ping');

	async run(interaction: ChatInputCommandInteraction) {
		const client = interaction.client as Client;
		interaction.reply('todo!');
		// 🏓 66ms
	}
})();
