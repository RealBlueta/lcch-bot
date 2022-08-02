import Client from '../components/client';

export default async function ready(client: Client) {
	console.log(`${client.user!.tag} has logged in!`);
	// FOR OFFICIAL
	// const BOT_COMMANDS = [...client.commands]
	// 	.map((command) => command.data)
	// 	.map((data) => data.toJSON());
	// client.application!.commands.set([]);
}
