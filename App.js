import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryNav from './src/navigation';
import { Permissions, Notifications } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      notification: null,
      title: 'Hello World',
      body: 'Say something!'
    };
  }

  async registerForPushNotifications() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        return;
      }
    }

    const token = await Notifications.getExpoPushTokenAsync();

    this.subscription = Notifications.addListener(this.handleNotification);

    this.setState({
      token
    });
  }

  handleNotification = notification => {
    console.log('Notification', notification);
    this.setState({
      notification
    });
  };

  sendPushNotification(
    token = this.state.token,
    title = this.state.title,
    body = this.state.body
  ) {
    return fetch('https://exp.host/--/api/v2/push/send', {
      body: JSON.stringify({
        to: token,
        title: title,
        body: body,
        data: { message: `${title} - ${body}` }
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
  }

  componentDidMount() {
    this.registerForPushNotifications();
  }

  render() {
    return <PrimaryNav />;
  }
}
