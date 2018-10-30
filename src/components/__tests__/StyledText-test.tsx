import 'react-native';
import React from 'react';
import { MonoText } from '../StyledText';
import renderer from 'react-test-renderer';

const {it, expect} = require("jest");

it('renders correctly', () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
