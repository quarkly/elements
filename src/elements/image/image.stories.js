import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ReactDOMServer from 'react-dom/server';
import { hasCSSTOMSupport } from 'jss';
import { JssProvider, SheetsRegistry, jss, sheets } from 'react-jss';
import Card from '../card';
import Image from './index';
import Theme from '../theme';

console.log(jss.version);
const sheetsRegistry = new SheetsRegistry();
const App = () => (
  <JssProvider registry={sheetsRegistry}>
    <Theme>
      <Card bg={['blue', 'red']} p={[1, 200, 55]} bg={['green', 'blue', 'red']}/>
      <Image
        src="https://picsum.photos/500"
        p={[1, 200, 55]}
        height={[222, 333, 444]}
        display={['block', 'none', 'block']}
        variant="primary"
      />
    </Theme>
  </JssProvider>
);
const render = () => {
  console.log(ReactDOMServer.renderToString);
  const aap = ReactDOMServer.renderToString(<App />);
  console.log(sheetsRegistry, sheetsRegistry.toString(), aap, sheets);
};
const Button = props => <button {...props}>Hello</button>;
const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs);
stories
  .add('default', () => (
    <Theme>
      <Card  p={[1, 200, 55]} bg={['green', 'blue', 'red']}/>
      <Button onClick={render} />
      <Image
        src="https://picsum.photos/500"
        p={[1, 200, 55]}
        bg={['red', 'blue', 'yellow']}
        variant="primary"
      />
      <Button />
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      <Button />
      <Image src="https://picsum.photos/500" height={text('height', '100px')} />
      sss
      <Image src="https://picsum.photos/500" height={[100, 20, 30]} />
      <Button />
    </Theme>
  ));
