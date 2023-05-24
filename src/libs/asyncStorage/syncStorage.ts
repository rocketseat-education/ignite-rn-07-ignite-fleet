import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_ASSYNC_KEY = '@ignitefleet:last_sync';

export async function saveLastSyncTimestamp() {
  const timestamp = new Date().getTime();

  await AsyncStorage.setItem(STORAGE_ASSYNC_KEY, timestamp.toString());

  return timestamp;
}

export async function getLastAsyncTimestamp() {
  const timestamp = await AsyncStorage.getItem(STORAGE_ASSYNC_KEY);

  return Number(timestamp);
}