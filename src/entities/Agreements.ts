import {ViewEntry} from "./ViewEntry";

export interface Agreements {
    "@timestamp": string;
    "@toplevelentries": string;
    viewentry: ViewEntry[];
}