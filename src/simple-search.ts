import { Search } from './search';
import { Path, Friends, Friend } from './interface';
import { each, indexOf, clone } from 'lodash';

export class SimpleSearch extends Search {

    public getConnections(personName: string): Path[] {
        return this.getAllConnections(personName)
    }

    private getAllConnections(name: string): Path[] {
        let myFriends = this.friends[name].friends;
        let result: Path[] = [];
        each(myFriends, friendName => this.connections(friendName, [], result))
        return result;
    }

    //friend: string, path: string, acc: string[]
    private connections(friendName: string, path: Path, acc: Path[]) {

        // Add name only if not in a path (no circular connections)
        if (indexOf(path, friendName) === -1) {
            let newPath = clone(path);
            newPath.push(friendName);

            acc.push(newPath);

            let friendObject = this.friends[friendName];

            each(friendObject.friends, f => this.connections(f, newPath, acc));
        }
    }
}
