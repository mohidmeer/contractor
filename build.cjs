/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
/* eslint-enable @typescript-eslint/no-require-imports */


const zipName = 'site.zip';
const output = fs.createWriteStream(path.join(__dirname, zipName));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`✅ Zipped ${archive.pointer()} bytes to ${zipName}`);
});

archive.on('error', err => { throw err; });

archive.pipe(output);

// Zip everything except .next, node_modules, data
archive.glob('**/*', {
  cwd: __dirname,
  ignore: ['.next/**', 'node_modules/**','.git/**', zipName],
  dot: true,
});

archive.finalize();