import { friends } from './friends';
import { SimpleSearch } from './simple-search';

let simpleSearch = new SimpleSearch(friends);

// simple search
document.getElementById('simple-search').addEventListener('click', () => {

     // Get connections of first friend
     let connections = simpleSearch.getConnections("Jaclyn");
     console.log(connections);
})
