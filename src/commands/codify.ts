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
		// takes image and makes code
		// LCCH.toCode
		const input = interaction.options.getAttachment('input', true);

		if (!input.contentType!.includes('image')) {
			// tell user that the attatchment must be of type image
		}

		if (!(input.width! <= 37) && !(input.height! <= 37)) {
			// tell user that the image must be below or atleast 37x37
		}

		const resp = await axios.get(input.url, {
			responseEncoding: 'base64',
		});
		if (resp.status != 200) {
			return interaction.reply('failed to fetch');
		}

		const code = await LCCH.toCode(resp.data);
		if (code == null) {
			return interaction.reply('failed to create');
		}

		interaction.reply(code);
	}
})();
