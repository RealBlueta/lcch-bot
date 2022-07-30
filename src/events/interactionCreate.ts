import { Interaction } from 'discord.js';

export default async function (interaction: Interaction) {
	if (!interaction.isCommand()) return;
	console.log(interaction);
}
