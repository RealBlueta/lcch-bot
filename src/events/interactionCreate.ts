import { ChatInputCommandInteraction, Interaction } from 'discord.js';
import Client from '../components/client';

export default async function (interaction: Interaction) {
	const client = interaction.client as Client;
	if (interaction.isChatInputCommand()) {
		for (const command of client.commands) {
			if (command.data.name !== interaction.commandName) continue;
			command.run(interaction as ChatInputCommandInteraction);
		}
	}
}
