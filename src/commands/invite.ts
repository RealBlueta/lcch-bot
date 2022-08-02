import Client from '../components/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Get a invite for the bot and discord server');

	async run(interaction: ChatInputCommandInteraction) {
		const client = interaction.client as Client;
		// https://discord.com/api/oauth2/authorize?client_id=932740051606065262&permissions=277025450048&scope=applications.commands%20bot
		interaction.reply('todo!');
	}
})();
