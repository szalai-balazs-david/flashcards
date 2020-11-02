import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import {Alert} from 'react-native'

const NOTIFICATION_KEY  = "FlashcardNotification"

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Study you lazy SoaB!',
    body: "👋 Don't forget, a practice a day keep the min awake!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
    
              Notifications.setNotificationHandler({
                handleNotification: async () => ({
                  shouldShowAlert: true,
                  shouldPlaySound: false,
                  shouldSetBadge: false,
                }),
              });

              let trigger = new Date()
              trigger.setDate(trigger.getDate() + 1)
              trigger.setHours(20)
              trigger.setMinutes(0)

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger
              })

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}