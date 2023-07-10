import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ignitefleet:location';

type LocationProps = {
  latitude: number;
  longitude: number;
  timestamp: number;
}

export async function getStorageLocations() {
  const storage = await AsyncStorage.getItem(STORAGE_KEY)

  const response = storage ? JSON.parse(storage) : []

  return response
}

export async function saveStorageLocation(newLocation: LocationProps) {
  const storage = await getStorageLocations()

  storage.push(newLocation)

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
}

export async function removeStorageLocations() {
  await AsyncStorage.removeItem(STORAGE_KEY)
}