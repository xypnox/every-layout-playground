import fs from 'fs';
import path from 'path';

export async function readFileAsString(filePath) {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return content;
}
