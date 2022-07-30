export class LCCH {
    static toCode(b64string: string): string {
        // var cut = b64string.replace(/^data:image\/\w+;base64,/, "");
        // var buffer = Buffer.from(cut, "base64");
    
        // var image = await Jimp.read(buffer);
        // var width = image.getWidth();
        // var height = image.getHeight();
    
        // var bytes = new Uint8Array(Math.ceil((width * height) / 8));
    
        // for (var y = 0; y < height; ++y) {
        //     for (var x = 0; x < width; ++x) {
        //         //var pixel = [0, 0, 0, 255];
        //         var pixel: RGBA = Jimp.intToRGBA(image.getPixelColor(x, y));
        //         if (pixel.a > 200) {
        //             var index = x + y * width;
        //             var bIndex = Math.floor(index / 8);
        //             var bit = 1 << index % 8;
        //             bytes[bIndex] |= bit;
        //         }
        //     }
        // }
    
        // return `LCCH-${width}-${replaceAll(
        //     replaceAll(encodebytes(bytes), "=", ""),
        //     "\n",
        //     ""
        // )}`;
        return "";
    }
    
    static fromCode(lcch: string): boolean[] | null {
        // var TEXTURE_SIZE = 37;
        // var split: string[] = lcch.trim().split("-");
        // if (split.length != 3) return null;
        // if (!(split[0] == "LCCH")) return null;
        // try {
        //     var size: number = Number.parseInt(split[1]);
        //     var crosshair: boolean[] = new Boolean[
        //         TEXTURE_SIZE * TEXTURE_SIZE
        //     ]();
        //     var decoded: any = base64.decode(split[2]);
        //     var offset: number = Math.floor(
        //         (TEXTURE_SIZE - size) / parseFloat("2f")
        //     );
        //     for (var x = 0; x < size; x++) {
        //         for (var y = 0; y < size; y++) {
        //             var index: number =
        //                 x + offset + (y + offset) * TEXTURE_SIZE;
        //             if (index < 0 || index >= TEXTURE_SIZE * TEXTURE_SIZE)
        //                 continue; // size > internal size, ignore this
        //             var bIndex: number = (x + y * size) / 8;
        //             var bit: number = 1 << (x + y * size) % 8;
        //             crosshair[index] = (decoded[bIndex] & bit) != 0;
        //         }
        //     }
        //     return crosshair;
        // } catch (error: any) {
        //     return null;
        // }
        return [];
    }
}