import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const libMap = {
  fa: async () => import('react-icons/fa'),
  io: async () => import('react-icons/io'),
  md: async () => import('react-icons/md'),
  ti: async () => import('react-icons/ti'),
  go: async () => import('react-icons/go'),
  fi: async () => import('react-icons/fi'),
  gi: async () => import('react-icons/gi'),
  wi: async () => import('react-icons/wi'),
  di: async () => import('react-icons/di'),
};

const Box = styled('span')(
  {
    boxSizing: 'border-box',
  },
  themed('Icon'),
  variant('icons'),
  ...includeWith('icon'),
);

const getIcon = async str => {
  const [dir, name] = str.split('/');
  if (!libMap[dir]) {
    return null;
  }
  const lib = await libMap[dir]();
  return lib[name];
};

export default props => {
  const { name, ...other } = props;
  const [Icon, setIcon] = React.useState(null);
  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const ico = await getIcon(name);
        setIcon(ico);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, name);
  return Icon ? <Box {...other}>{Icon}</Box> : <Box />;
};
