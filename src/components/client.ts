import { Client as DiscordClient, ClientOptions } from 'discord.js';
import { Command } from '../types';

export default class Client extends DiscordClient {
	commands: Set<Command>;
	constructor(options: ClientOptions) {
		super(options);
		this.commands = new Set();
	}
}
