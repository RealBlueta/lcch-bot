import base64 from 'base-64';
import { EmbedBuilder } from 'discord.js';
import Jimp from 'jimp';
import { EMBED_ERROR_COLOR } from './constants';
import { RGBA } from './types';

export function encode_bytes(bytes: Uint8Array): string {
	return base64.encode([...bytes].map((b) => String.fromCharCode(b)).join(''));
}

export function decode_bytes(b64: string): Uint8Array {
	const b = base64.decode(b64);
	const bytes = new Uint8Array();
	for (let i = 0; i < b.length; ++i) bytes[i] = b[i].charCodeAt(0);
	return bytes;
}

export class LCCH {
	/* Transforms Base64 Image into LCCH-Code */
	static async toCode(b64: string): Promise<string> {
		const image = await Jimp.read(Buffer.from(b64, 'base64'));

		const width = image.getWidth();
		const height = image.getHeight();
		const bytes = new Uint8Array(Math.ceil((width * height) / 8));

		for (let y = 0; y < height; ++y) {
			for (let x = 0; x < width; ++x) {
				//var pixel = [0, 0, 0, 255];
				const pixel: RGBA = Jimp.intToRGBA(image.getPixelColor(x, y));
				if (pixel.a > 200) {
					const index = x + y * width;
					const bIndex = Math.floor(index / 8);
					const bit = 1 << index % 8;
					bytes[bIndex] |= bit;
				}
			}
		}

		return `LCCH-${width}-${encode_bytes(bytes).replace(/=/gi, '').replace(/\n/gi, '')}`;
	}

	/* Transforms LCCH-Code into Boolean Array */
	static fromCode(lcch: string): boolean[] | null {
		const TEXTURE_SIZE = 37;
		const slices = lcch.trim().split('-');
		if (slices.length != 3 || !(slices[0] == 'LCCH')) return null;
		try {
			const crosshair: boolean[] = [];
			const size = Number.parseInt(slices[1]);
			const decoded = decode_bytes(slices[2]);
			const offset = Math.floor((TEXTURE_SIZE - size) / parseFloat('2f'));

			for (var x = 0; x < size; x++) {
				for (var y = 0; y < size; y++) {
					const index = x + offset + (y + offset) * TEXTURE_SIZE;
					if (index < 0 || index >= TEXTURE_SIZE * TEXTURE_SIZE) continue; // size > internal size, ignore this
					const bIndex = (x + y * size) / 8;
					const bit = 1 << (x + y * size) % 8;
					crosshair[index] = (decoded[bIndex] & bit) != 0;
				}
			}

			// turn into image somehow

			return crosshair;
		} catch {
			return null;
		}
	}
}

export function createErrorEmbed(message: string, reasons?: string[]): EmbedBuilder {
	return new EmbedBuilder()
		.setColor(EMBED_ERROR_COLOR)
		.setAuthor({
			iconURL:
				'https://images-ext-1.discordapp.net/external/-AbUBTHVQLo7c_2abuzJQ4F8-YjyPs8NXiuh4zol_oI/https/cdn.discordapp.com/avatars/929913369786482759/bee37d0bc2557fb49445872f91e43a32.webp', // lcch logo
			name: 'Uh oh...',
		})
		.setDescription(`**${message}**`)
		.setFooter({ text: new Date().toUTCString() });
}
