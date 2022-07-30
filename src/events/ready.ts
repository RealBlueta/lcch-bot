import { SlashCommandBuilder } from 'discord.js';
import Client from '../components/client';

export default async function (client: Client) {
	const GUILD_ID = '1002745278459293706';
	const GUILD_COMMANDS: SlashCommandBuilder[] = [...client.commands].map(
		(command) => command.data
	);
	client.guilds.cache.get(GUILD_ID)?.commands.set(GUILD_COMMANDS);
	console.log(`${client.user!.tag} has logged in!`);
}
