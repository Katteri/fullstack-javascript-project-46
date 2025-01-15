import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const extensions = ['json', 'yml'];
const correct = readFile(`correct.txt`);

extensions.forEach((ext) => {
  describe('Positives cases', () => {
    test(`genDiff-${ext}`, () => {
      const file1 = getFixturePath(`file1.${ext}`);
      const file2 = getFixturePath(`file2.${ext}`);
      expect(genDiff(file1, file2)).toEqual(correct);
    });
  });
});
