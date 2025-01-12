export default (fileData, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(fileData);
    default:
      throw new Error(`Invalid file extension: '${extension}'! Try supported formats.`);
  }
};
