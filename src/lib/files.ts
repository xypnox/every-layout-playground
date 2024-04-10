import fs from 'node:fs';
import path from 'node:path';

export interface BaseItem {
  path: string;
  name: string;
}

export interface File extends BaseItem {
  type: 'file';
  content: string;
  Component?: any
}

export type Item = File | Directory;

export interface Directory extends BaseItem {
  type: 'directory';
  children: Item[];
}


export async function readFileAsString(filePath: string) {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return content;
}
