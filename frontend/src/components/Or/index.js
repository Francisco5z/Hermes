import React from 'react';

import { Or } from './styles';

function OrComponent({ stripsColor="#aaa" }) {
  return <Or stripsColor={stripsColor}><span> Ou </span></Or>;
}

export default OrComponent;