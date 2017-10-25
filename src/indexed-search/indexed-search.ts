import { Search } from '../search';
import { map, indexOf, each } from 'lodash';
import { Path, Friends, Friend } from '../interface';

export class IndexedSearch extends Search {

    private BUFFER_SIZE = 40000; // Can be calculated
    private names: string[];
    private buffer = new Uint8Array(40000)

    constructor(protected friends: Friends = {}) {
        super(friends);
        // List of names. Every name has unique number (number -> name)
        this.names = map(this.friends, (value, key) => { return key});

        // Make another field -> list of indexes of friends
        each(this.friends, friend => {
            friend.indexedFriends = map(friend.friends, f => indexOf(this.names, f))
        })
        console.log(this.names);
        console.log(this.friends);


    }

    public getConnections(personName: string): Path[] {
        return getAllConnections(personName);
    }

    private getAllConnections(name: string): Path[] {
        let myIndexedFriends = this.friends[name].indexedFriends;
        let result = new Uint8Array(400000)
        each(myIndexedFriends, friendIndex => this.connections(friendIndex, [], result))
        return result;
    }

    private connections(friendIndex: string, path: Path, acc: Uint8Array) {

        // Add name only if not in a path (no circular connections)
        if (indexOf(path, friendIndex) === -1 && path.length < 4) {
            let newPath = clone(path);
            newPath.push(friendName);

            acc.push(newPath);

            let friendObject = this.friends[friendName];

            each(friendObject.friends, f => this.connections(f, newPath, acc));
        }
    }
}
