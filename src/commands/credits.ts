import Client from '../components/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('credits')
		.setDescription('List credits for the bot');

	async run(interaction: ChatInputCommandInteraction) {
		const client = interaction.client as Client;
		return interaction.reply('todo!');

		// 📖 Credits
		// - Bot Developer: SmellyJay#9440
		// - Original "Crosshair Expander" Developer: https://twitter.com/Moulberry
		// - Twitter User Runner: 
		// - Support Server: https://inv.wtf/lcch
	}
})();
