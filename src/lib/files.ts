import fs from 'node:fs';
import path from 'node:path';

export async function readFileAsString(filePath: string) {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return content;
}

export async function getFolders(dirPath: string) {
  const fullPath = path.resolve(process.cwd(), dirPath);
  console.log(fullPath);
  const files = fs.readdirSync(fullPath, { withFileTypes: true });
  return files.filter((file) => file.isDirectory()).map((file) => file.name);
  // return []
}
