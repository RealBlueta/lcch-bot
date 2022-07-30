import client from '../index';

export default async function () {
	const GUILD_ID = '1002745278459293706';
	client.guilds.cache.get(GUILD_ID)?.commands.set([
		{
			name: 'test',
			description: 'Test Command',
		},
	]);
	console.log(`${client.user!.tag} has logged in!`);
}
