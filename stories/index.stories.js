import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { Button, Welcome } from '@storybook/react/demo';
import withEditable from './withEditable';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', withEditable, () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', withEditable, withMarkdownNotes('ssss'), () => (
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    )
  );
