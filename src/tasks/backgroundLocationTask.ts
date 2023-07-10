import * as TaskManager from 'expo-task-manager';

export const BACKGROUND_TASK_NAME =  'location-tracking';

TaskManager.defineTask(BACKGROUND_TASK_NAME, ({ data, error }: any) => {
  try {
    if(error) {
      throw error
    }

    const { coords, timestamp } = data.locations[0];

    const currentLocation = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      timestamp
    }

    console.log(currentLocation)

  } catch (error) {
    console.log(error)
  }
})