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
}

export async function getFiles(dirPath: string): Promise<string[]> {
  const result: string[] = [];
  const fullPath = path.resolve(process.cwd(), dirPath);
  const files = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      // If the file is a directory, we want to go recursive
      const subFiles = await getFiles(path.join(dirPath, file.name));
      const newFiles = subFiles.map((subFile) => path.join(file.name, subFile));
      result.push(...newFiles);
    } else {
      // the file is a file, we want to add the file name
      result.push(file.name);
    }
  }
  return result;
}
