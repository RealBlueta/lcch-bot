import axios from 'axios';
import base64 from 'base-64';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

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

		if (!input.contentType!.includes('image/png')) {
			return interaction.reply('the file must be a PNG :P');
		}

		if (!(input.width! <= 37) && !(input.height! <= 37)) {
			return interaction.reply(
				'soz but image must be under or atleast 37x37 (width and height)'
			);
		}

		const resp = await axios.get(input.url, {
			responseEncoding: 'base64',
		});

		/* Error if failed to get image from Discord */
		if (resp.status != 200) {
			return interaction.reply('failed to fetch');
		}

		const code = await LCCH.toCode(resp.data);

		/* Error if LCCH.toCode failed (aka returned null) */
		if (code == null) {
			return interaction.reply('failed to create');
		}

		/* Error if Code is too big (shouldn't happen after I implement the comments from the top) */
		if (code.length >= 2000) {
			return interaction.reply('code too big');
		}

		interaction.reply(code);
	}
})();
