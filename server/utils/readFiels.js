import fs from 'fs/promises'
import csv from 'async-csv'
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const CSV_PATH = path.join(dirname, '..', 'db', 'terrorData.csv');


async function readCsv() {
    const csvString = await fs.readFile(CSV_PATH, 'utf-8');
    const rows = await csv.parse(csvString, {columns: true});
    return rows.slice(1, 51)
}


export default readCsv;