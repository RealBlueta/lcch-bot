import Client from '../components/client';
import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { EMBED_COLOR } from '../constants';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('help')
		.setDescription('List all possible LCCH commands');

	async run(interaction: ChatInputCommandInteraction) {
		const client = interaction.client as Client;
		const commands = [...client.commands].map((command) => '/' + command.data.name);
		return interaction.reply({
			embeds: [
				new EmbedBuilder()
					.setColor(EMBED_COLOR)
					.setAuthor({
						iconURL:
							'https://images-ext-2.discordapp.net/external/sgPVB2yZDBSt09iaBKvh5L-DXQfYWb4v91Urg7C0450/https/i.imgur.com/bMPc2TT.png', // wrench icon from discord
						name: 'Commands',
					})
					.setDescription(
						`List of Usable Bot Slash Commands:\n\`\`\`${commands.join('\n')}\`\`\``
					)
					.setFooter({
						text: new Date().toUTCString(),
					}),
			],
		});
	}
})();
