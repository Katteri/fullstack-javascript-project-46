#!/usr/bin/env node
import { program } from 'commander';
import { getDataFromFile } from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    getDataFromFile(filepath1);
  });

program.parse();
