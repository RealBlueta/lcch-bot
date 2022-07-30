import client from '../index';
import { CommandInteraction, Interaction } from 'discord.js';

export default async function (interaction: Interaction) {
	if (!interaction.isCommand()) return;
	for (let command of client.commands) {
		if (command.name !== interaction.commandName) continue;
		command.run((interaction as CommandInteraction));
	}
}
