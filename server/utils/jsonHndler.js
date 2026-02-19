import fs from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const PATH = path.join(dirname, '..', 'db', 'playersScore.json');



export async function writeToJsonData(data) {
    const jsonDb = await readJson()
    jsonDb.push(data)
    fs.writeFile(PATH, JSON.stringify(jsonDb))
}



export async function readJson() {
    const db = await fs.readFile(PATH)
    return JSON.parse(db)
}