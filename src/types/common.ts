/** Enums */
import { ResourceId } from ".";

export interface IAnyObject {
  [key: string]: any;
}

export interface IBasicRecord {
  created: number;
  resource_id: ResourceId;
  resource_name: string;
  updated: number;
  timestamp: number;
}

export type IStandardList<T> = {
  details: T;
  dataSetKey?: string;
  list: T[];
};

export interface IStringObject {
  [key: string]: string;
}
