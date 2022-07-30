import { ApplicationCommandData } from 'discord.js';
import client from '../index';

export default async function () {
	const GUILD_ID = '1002745278459293706';

	const guildCommands: ApplicationCommandData[] = [];
	for (let command of client.commands) {
		guildCommands.push({
			name: command.name,
			description: command.description,
		});
	}
	client.guilds.cache.get(GUILD_ID)?.commands.set(guildCommands);

	console.log(`${client.user!.tag} has logged in!`);
}
