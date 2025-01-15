import makeStylish from './stylish.js';

function formattedTree(data, format, replacer) {
  switch (format) {
    case 'stylish':
      return makeStylish(data, replacer);
    default:
      throw new Error(`Invalid file format type: '.${format}'! Try supported file formats.`);
  }
};

export default formattedTree;