import React from 'react';
const { Icon } = require('expo');

import Colors from '../constants/Colors';

export interface TabBarIconProps {
  name: string;
  focused: boolean;
}

export default class TabBarIcon extends React.Component<TabBarIconProps> {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}