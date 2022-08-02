import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { EMBED_COLOR } from '../constants';

export default new (class implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('credits')
		.setDescription('List credits for the bot');

	async run(interaction: ChatInputCommandInteraction) {
		return interaction.reply({
			embeds: [
				new EmbedBuilder()
					.setColor(EMBED_COLOR)
					.setAuthor({
						iconURL: 'https://i.imgur.com/Yr8gSlz.png', // 📖 from Discord (converted to PNG and uploaded to imgur)
						name: 'Credits',
					})
					.setDescription(
						' - Bot Developer: SmellyJay#9440\n - Original "Crosshair Expander" Developer: https://twitter.com/Moulberry\n - Twitter User Runner: unknown\n - Support Server: https://inv.wtf/lcch'
					)
					.setFooter({
						text: new Date().toUTCString(),
					}),
			],
		});
	}
})();
