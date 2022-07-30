import { CommandInteraction, Interaction } from 'discord.js';
import Client from '../components/client';

export default async function (interaction: Interaction) {
	const client = (interaction.client as Client);
	if (!interaction.isCommand()) return;
	for (let command of client.commands) {
		if (command.name !== interaction.commandName) continue;
		command.run((interaction as CommandInteraction));
	}
}
