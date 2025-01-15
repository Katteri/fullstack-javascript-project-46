import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import compare from './compare.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getExtension = ((file) => path.extname(file).slice(1));

function getDataFromFile(filepath) {
  const absolutePath = getAbsolutePath(filepath);
  const data = fs.readFileSync(absolutePath, 'utf8');
  const extension = getExtension(filepath);
  return parse(data, extension);
}

function genDiff(filepath1, filepath2) {
  const data1 = getDataFromFile(filepath1);
  const data2 = getDataFromFile(filepath2);
  const result = compare(data1, data2);
  return result;
}

export default genDiff;
