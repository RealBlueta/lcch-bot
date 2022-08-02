import axios from 'axios';
import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { EMBED_COLOR } from '../constants';
import { Command } from '../types';
import { LCCH, createErrorEmbed } from '../util';

export default new (class implements Command {
	data = new SlashCommandBuilder()
		.setName('codify')
		.setDescription('Convert PNG image into LCCH code')
		.addAttachmentOption((option) =>
			option
				.setName('input')
				.setDescription('The PNG image of the crosshair (MAX 37x37)')
				.setRequired(true)
		);

	async run(interaction: ChatInputCommandInteraction) {
		const input = interaction.options.getAttachment('input', true);

		/* Error if image is not of type PNG */
		if (!input.contentType!.includes('image/png'))
			return interaction.reply({
				embeds: [createErrorEmbed('You must provide a proper PNG file!')],
			});

		/* Error if image is bigger than 37x37 */
		if (!(input.width! <= 37) && !(input.height! <= 37))
			return interaction.reply({
				embeds: [
					createErrorEmbed(
						'The image you provide must be under or atleast 37x37 (width/height)!'
					),
				],
			});

		const response = await axios.get(input.url, {
			responseEncoding: 'base64',
		});

		/* Error if failed to get image from Discord */
		if (response.status != 200)
			return interaction.reply({
				embeds: [
					createErrorEmbed(
						'Hmm, I seem to have failed to get the image you provided from the Discord API! Please try again...'
					),
				],
			});

		const code = await LCCH.toCode(response.data);

		/* Error if LCCH.toCode failed (aka returned null) */
		if (code == null)
			return interaction.reply({
				embeds: [createErrorEmbed('Whoops! I failed to create a code from that image!')],
			});

		/* Error if Code is too big (shouldn't happen after I implement the comments from the top) */
		if (code.length >= 2000)
			return interaction.reply({
				embeds: [
					createErrorEmbed(
						'Sorry but the code is larger than I can send! (todo: create text file and send it)'
					),
				],
			});

		// TODO: add the stuff below later
		// DISCLAIMER: If your crosshair doesn't seem right, please make sure that you are using a properly formatted crosshair png.
		// Format:
		// - Must have transparent background.
		// - Must only use one color, with no slightly transparent pixels.
		// - Must be under or atleast a 37 by 37 image.
		// (Recommended to keep width and height the same)

		return interaction.reply({
			embeds: [
				new EmbedBuilder()
					.setColor(EMBED_COLOR)
					.setDescription(`Just copy and import it into the game!\n\`\`\`${code}\`\`\``)
					.setFooter({
						text: new Date().toUTCString(),
					}),
			],
		});
	}
})();
