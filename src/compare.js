import _ from 'lodash';

const getKeys = (object) => _.sortBy(Object.keys(object));

export default (data1, data2) => {
  const keys1 = getKeys(data1);
  const keys2 = getKeys(data2);
  const keys = _.union(keys1, keys2);

  let result = '{\n';
  keys.forEach((key) => {
    if (!Object.hasOwn(data1, key)) {
      result += `  + ${key}: ${data2[key]}\n`;
    } else if (!Object.hasOwn(data2, key)) {
      result += `  - ${key}: ${data1[key]}\n`;
    } else if (data1[key] !== data2[key]) {
      result += `  - ${key}: ${data1[key]}\n`;
      result += `  + ${key}: ${data2[key]}\n`;
    } else {
      result += `    ${key}: ${data1[key]}\n`;
    }
  });
  result += '}';

  return result;
};
