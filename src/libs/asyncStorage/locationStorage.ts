import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ignitefleet:location';

export async function getStorageLocation() {
  const storage = await AsyncStorage.getItem(STORAGE_KEY)

  const response = storage ? JSON.parse(storage) : []

  return response
}