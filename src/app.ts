import { friends } from './friends';
import { SimpleSearch } from './simple-search';

let simpleSearch = new SimpleSearch(friends);

// simple search
document.getElementById('simple-search').addEventListener('click', () => {
     // Get connections of first friend
     let start = new Date().getTime();
     let connections = simpleSearch.getConnections("Jaclyn");
     let end = new Date().getTime();

     document.getElementById('simple-search-time')
        .innerHTML = ((end - start) / 1000).toString();

     console.log(connections);

})
