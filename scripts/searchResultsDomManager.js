const searchResultsDomManager = {
    busStopFactory(busStop) {
        return `
        <section class="bus-stop">
         <div class="bus-stop__route-name">${busStop.route_name}</div>
         <div class="bus-stop__stop-name">${busStop.route_name}</div>
         </section>        
         `
    },
    renderSearchResults(searchResults) {
        const container = document.getElementById("searchResults");
        searchResults.forEach(busStop => {
            container.innerHTML += this.busStopFactory(busStop);
        })
    }
};