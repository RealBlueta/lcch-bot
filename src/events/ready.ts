import { ApplicationCommandData } from 'discord.js';
import Client from '../components/client';

export default async function (client: Client) {
	const GUILD_ID = '1002745278459293706';

	const guildCommands: ApplicationCommandData[] = [];
	for (let command of client.commands) {
		guildCommands.push({
			name: command.name,
			description: command.description,
		});
	}
	console.log(guildCommands);
	client.guilds.cache.get(GUILD_ID)?.commands.set(guildCommands);

	console.log(`${client.user!.tag} has logged in!`);
}
