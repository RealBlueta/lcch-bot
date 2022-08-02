import Client from '../components/client';

export default async function ready(client: Client) {
	// TEMPORARY FOR TESTING
	const GUILD_ID = '1002745278459293706';
	const GUILD_COMMANDS = [...client.commands]
		.map((command) => command.data)
		.map((data) => data.toJSON());
	client.guilds.cache.get(GUILD_ID)?.commands.set(GUILD_COMMANDS);
	console.log(`${client.user!.tag} has logged in!`);

	// // x
	// client.application!.commands.set([]);
}
