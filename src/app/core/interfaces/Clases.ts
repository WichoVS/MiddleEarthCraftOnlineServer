import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Players {
  max: number;
  online: number;
  sample: any[];
}

export interface Version {
  name: string;
  protocol: number;
}

export interface RootObject {
  description: string;
  favicon: string;
  latency: number;
  players: Players;
  version: Version;
}
