import { reverseGeocodeAsync } from 'expo-location'

type Props = {
  latitude: number;
  longitude: number
}

export async function getAddressLocation({ latitude, longitude }: Props) {
  try {
    const addressResponse = await reverseGeocodeAsync({ latitude, longitude })

    return addressResponse[0]?.street
  } catch (error) {
    console.log(error)
  }
}