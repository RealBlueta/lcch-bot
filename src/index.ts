import 'dotenv/config';
import Client from './components/client';
import { Command } from './types';
import { IntentsBitField } from 'discord.js';
import { readdirSync } from 'fs';

// Bot
const client = new Client({
	intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers],
});

async function main() {
	// Load Comamnds
	const commands = readdirSync('src/commands');
	for (const file of commands) {
		if (!file.endsWith('.ts')) continue;
		const command: Command = (await import(`./commands/${file}`)).default;
		client.commands.add(command);
	}

	// Load Events
	const events = readdirSync('src/events');
	for (const file of events) {
		if (!file.endsWith('.ts')) continue;
		const event = (await import(`./events/${file}`)).default;
		const event_name = file.substring(0, file.length - 3);
		client.on(event_name, event);
	}

	// Login
	client.login(process.env.DISCORD_TOKEN);
}

main();
