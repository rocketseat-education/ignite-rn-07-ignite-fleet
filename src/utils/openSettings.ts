import { Linking, Platform } from "react-native";

export function openSettings() {
  if(Platform.OS === 'ios') {
    return Linking.openURL('app-settings:');
  }

  if(Platform.OS === 'android') {
    return Linking.openSettings();
  }
}