import MapView, { MapViewProps, PROVIDER_GOOGLE, LatLng } from "react-native-maps";

type Props = MapViewProps & {
  coordinates: LatLng[];
}

export function Map({ coordinates, ...rest }: Props) {

  const lastCoordinate = coordinates[coordinates.length - 1];

  return (
    <MapView 
      provider={PROVIDER_GOOGLE}
      style={{ width: '100%', height: 200 }}
      region={{
        latitude: lastCoordinate.latitude,
        longitude: lastCoordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      {...rest}
    />
  );
}