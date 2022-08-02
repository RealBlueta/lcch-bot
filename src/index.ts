import 'dotenv/config';
import Client from './components/client';
import { Command } from './types';
import { GatewayIntentBits } from 'discord.js';
import { readdirSync } from 'fs';

async function main() {
	// Create Bot Client
	const client = new Client({
		intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
	});

	// Load Comamnds
	const commands = readdirSync('src/commands').filter((f) =>f.endsWith('.ts'));
	for (const file of commands) {
		const command: Command = (await import(`./commands/${file}`)).default;
		client.commands.add(command);
	}

	// Load Events
	const events = readdirSync('src/events').filter((f) => f.endsWith('.ts'));
	for (const file of events) {
		const event = (await import(`./events/${file}`)).default;
		client.on(event.name, event);
	}

	// Login
	client.login(process.env.DISCORD_TOKEN);
}

main();
