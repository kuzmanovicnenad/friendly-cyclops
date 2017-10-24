import { Friends, Path } from './interface';

export abstract class Search {

    constructor(protected friends: Friends = {}) {}

    // Return all friends connections
    public abstract getConnections(personName: string): Path[];
}
