import { Search } from './search';
import { Path, Friends } from './interface';

export class SimpleSearch extends Search {
    constructor(protected friends: Friends = {}) {
        super(friends);
    }

    public getConnections(personName: string): Path[] {
        return []
    }
}
