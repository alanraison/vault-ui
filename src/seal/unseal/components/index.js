import React from 'react';
import UnsealCount from './unseal-count';
import UnsealInput from './unseal-input';
import UnsealButton from './unseal-button';

export default () => (
  <div>
    <div>
      <UnsealCount/>
    </div>
    <div>
      <UnsealInput/>
    </div>
    <div>
      <UnsealButton/>
    </div>
  </div>
);