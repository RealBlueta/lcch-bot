import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../types';

export default new (class TestCommand implements Command {
	data: SlashCommandBuilder = new SlashCommandBuilder()
		.setName('test')
		.setDescription('test command');

	async run(interaction: CommandInteraction) {
		interaction.reply('Hello!');
	}
})();
