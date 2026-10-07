import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'favicon.svg', 'robots.txt', 'logo-horizontal.png', 'logo-square.png', 'logo-symbol.png']) {
  await copyFile(file, `dist/${file}`);
}
console.log('Built BLACKMAP website in dist/');
