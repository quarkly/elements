import { readdirSync, existsSync } from 'fs';
import { join } from 'path';
// import { styledPackToDict } from './styles';
import * as elementsModules from '../index';
import defaultElement from './defaultElement';

const toLowerFirst = string => string.charAt(0).toLowerCase() + string.slice(1);

const elements = Object.keys(elementsModules).map(n => toLowerFirst(n));

const loadElementDicts = () => {
  const PATH = './src/';
  const dirs = readdirSync(PATH);
  return dirs.reduce((acc, dir) => {
    if (!elements.includes(dir)) {
      return acc;
    }
    const fileName = `${dir}.dict.js`;
    const filePath = join(PATH, dir, fileName);
    const modulePath = join('../', dir, fileName);
    if (existsSync(filePath)) {
      acc.push({
        [dir]: require(modulePath).default, // eslint-disable-line
      });
    } else {
      acc.push({
        [dir]: defaultElement,
      });
    }
    return acc;
  }, []);
};

const makeDict = () => {
  //   styledPackToDict();
  const elementsDict = loadElementDicts();
  console.log(elementsDict);
};

makeDict();
