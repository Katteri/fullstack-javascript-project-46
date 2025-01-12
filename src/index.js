import fs from 'fs';
import path from 'path';
import parse from './parser.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getExtension = ((file) => path.extname(file).slice(1));

function getDataFromFile(file) {
  const absolutePath = getAbsolutePath(file);
  const data = fs.readFileSync(absolutePath, 'utf8');
  const extension = getExtension(file);
  console.log(parse(data, extension));
}

export { getDataFromFile };
