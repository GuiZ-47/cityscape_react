import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
});

export default function NotificationSteven() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    //getAccessToken();
    
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button title="Send Push Notification" color="#F69120" onPress={async () => {await sendPushNotification();}} />
    </View>
  );
}

const sendPushNotification = async () => {
  try {
    await fetch('https://exp.host/--/api/v2/push/send?useFcmV1=true', {
      method: 'POST',
      headers: {
        'Host': 'exp.host',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "to": "ExponentPushToken[b0wPL9A0oJbXzYE7DvWsf2]",
        //"to": "ExponentPushToken[-NXL6FIhA3_WYDUSGtyrsr]",
        //"to": "ExponentPushToken[H4LTRBPCRqGn9g-QwnLIF-]",
        "sound": "default",
        "title": "Message !",
        "body": "Corps du message !",
        "data": { "data": "pushDeSteven" }
      })
    });
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
};

/*async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      to: 'ExponentPushToken[-NXL6FIhA3_WYDUSGtyrsr]',
      //to: 'fV1ddSCTQvuW_V83f7y8Xh:APA91bE0Z6Pf_MA2uyFef0KFk2wLme55qJXSybktcC6N_DIUevDgGSpjhMdR-fkbbCdIUeUo1w6LBSHi01O2GDxtcM_rYhqsJeZ8Lyjjio8n4FOTbmxXeVRsL5SLGh3WB6paJv868EI1',
      title: "You've got morve! 📬",
      body: 'Here is the notification, buddy',
      data: { data: 'propertyId: 1' },
    },
    trigger: { seconds: 2 },
  });
}*/

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ projectId: 'f65551f0-3de8-4c0f-a646-c16e5ac405ea' })).data;
    //token = (await Notifications.getDevicePushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

function getAccessToken() {
  return new Promise(function(resolve, reject) {
    const key = require('../../../cityscape-right-now-fdfd7045d08c.json');
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function(err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
      console.log(access_token);
    });
  });
}
