export const elementDict = {
  href: ['image', ''],
};

const cssDict = {
  link: {
    href: ['button', 'image'],
    key: 'href',
    getValue(val) {
      return val + 1;
    },
    default: 'http://quarkly.space',
  },
};

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
