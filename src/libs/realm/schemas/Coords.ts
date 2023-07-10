import { Realm } from '@realm/react';

export type CoordsSchemaProps = {
  latitude: number;
  longitude: number;
  timestamp: number;
}

export class Coords extends Realm.Object<Coords> {
  latitude!: number;
  longitude!: number;
  timestamp!: number;

  static generate({ latitude, longitude, timestamp }: CoordsSchemaProps) {
    return {
      latitude,
      longitude,
      timestamp
    }
  }

  static schema = {
    name: 'Coords',
    embedded: true,
    properties: {
      latitude: 'float',
      longitude: 'float',
      timestamp: 'float'
    }
  }
}