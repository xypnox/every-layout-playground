import fs from 'node:fs';
import path from 'node:path';

export async function readFileAsString(filePath: string) {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return content;
}
