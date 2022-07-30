import { CommandInteraction } from 'discord.js';
import { Command } from '../types';

export default new (class TestCommand implements Command {
	name: string;
	description: string;

	constructor() {
		this.name = 'test';
		this.description = 'Test command';
	}

	async run(interaction: CommandInteraction) {
		interaction.reply('Hello!');
	}
})();
