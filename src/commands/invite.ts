import Client from '../components/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Get a invite for the bot and discord server');

	async run(interaction: ChatInputCommandInteraction) {
		const client = interaction.client as Client;
		return interaction.reply(
			'https://discord.com/api/oauth2/authorize?client_id=929913369786482759&permissions=412317173760&scope=applications.commands%20bot'
		);
	}
})();
