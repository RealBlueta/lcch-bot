import { CommandInteraction } from 'discord.js';
import { Command } from '../types';
import { LCCH } from '../util';

export default new (class ImageCommand implements Command {
    name: string;
    description: string;
    
    constructor() {
        this.name = "image";
        this.description = "Image Command test";
    }

    async run(interaction: CommandInteraction) {
        // takes image and makes code
        // LCCH.toCode
        interaction.reply("Hello!");
    }
});