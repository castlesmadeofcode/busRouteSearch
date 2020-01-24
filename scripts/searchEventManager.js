const searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("searchBtn");
        button.addEventListener("click", () => {
            const input = document.getElementById("searchCriteria");
            const searchCriteria = input.value;
            const searchResultPromise = apiManager.searchBusStops(searchCriteria);
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults);
            });
        });
    }
}