import { Jimp } from 'jimp';

async function processImage(inputPath, outputPath) {
  try {
    console.log(`Reading image: ${inputPath}...`);
    const image = await Jimp.read(inputPath);
    const data = image.bitmap.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      
      // Target white/near-white backgrounds
      if (luminance > 240) {
        data[i + 3] = 0; // Alpha
      }
    }
    console.log(`Writing image: ${outputPath}...`);
    await image.write(outputPath);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err);
  }
}

async function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    // Fallback to default if no args
    await processImage('public/lina_signature_v2.png', 'public/lina_signature_v2_transparent.png');
  } else {
    for (const file of files) {
      const input = file;
      const output = file.replace(/\.(png|jpg|jpeg)$/, '_transparent.png');
      await processImage(input, output);
    }
  }
  console.log("All done!");
}

main();
