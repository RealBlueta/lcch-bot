import Jimp from 'jimp';
import replaceAll from 'string.prototype.replaceall';
import { RGBA } from './types';

function encode_bytes(bytes: Uint8Array): string {
	return [...bytes].map((b) => String.fromCharCode(b)).join('');
}

function decode_bytes(b64: string): Uint8Array {
	return new Uint8Array();
}

export class LCCH {
	static async toCode(b64: string): Promise<string> {
		const raw = b64.replace(/^data:image\/\w+;base64,/, '');
		const image = await Jimp.read(Buffer.from(raw, 'base64'));

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

		return `LCCH-${width}-${replaceAll(
			replaceAll(encode_bytes(bytes), '=', ''),
			'\n',
			''
		)}`;
	}

	static fromCode(lcch: string): boolean[] | null {
		const TEXTURE_SIZE = 37;
		const split: string[] = lcch.trim().split('-');

		if (split.length != 3 || !(split[0] == 'LCCH')) return null;

		try {
			const size = Number.parseInt(split[1]);
			const crosshair = new Boolean[TEXTURE_SIZE * TEXTURE_SIZE]();
			const decoded = decode_bytes(split[2]);
			const offset = Math.floor((TEXTURE_SIZE - size) / parseFloat('2f'));

			for (var x = 0; x < size; x++) {
				for (var y = 0; y < size; y++) {
					const index = x + offset + (y + offset) * TEXTURE_SIZE;
					if (index < 0 || index >= TEXTURE_SIZE * TEXTURE_SIZE)
						continue; // size > internal size, ignore this
					const bIndex = (x + y * size) / 8;
					const bit = 1 << (x + y * size) % 8;
					crosshair[index] = (decoded[bIndex] & bit) != 0;
				}
			}

			return crosshair;
		} catch {
			return null;
		}
	}

    static createImage(code: string): Jimp | null {
        const width = parseInt(code.split('-')[1]);
        if (isNaN(width)) return null;

        const image = new Jimp(width, width, 'black');
        const crosshair = LCCH.fromCode(code);
        if (crosshair == null) return null;

        // todo

        return image;
    }
}
