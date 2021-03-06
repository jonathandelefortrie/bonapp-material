import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import CheckBox from '../src/components/CheckBox/CheckBox';

storiesOf('CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <CheckBox
      id="checkbox"
      name="checkbox"
      label={text('label', 'CheckBox')}
      checked={boolean('checked', false)}
    />
  ));
