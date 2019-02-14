import cssDict from './cssDict';

export const mapProps = (dict, element, props) =>
  Object.keys(props).reduce((acc, propKey) => {
    const dictValue = dict[propKey];
    if (!dictValue) {
      return acc;
    }
    if (dictValue.only && !dictValue.only.includes(element)) {
      return acc;
    }
    acc[dictValue.key] = dictValue.getValue(props[propKey]);
    return acc;
  }, {});

export const mapPropsToCss = (element, props) => mapProps(cssDict, element, props);
