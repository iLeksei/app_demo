import {EntryData} from "./EntryData";

export interface ViewEntry {
    "@position": string;
    "@unid": string;
    "@noteid": string;
    "@siblings": string;
    entrydata: EntryData[];
}