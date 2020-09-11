
function renderRestaurants(restaurants) {
    let htmlString = '';
    for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];
        htmlString +=`
        <div class="text-center border rounded bg-secondary " style="width: 300px;">
            <h2 class="p-3 text-light rounded-top" >${restaurant.name}</h2>
            <h3 class="p-3">${restaurant.type}</h3>
            <h2 class="text-success">${'🦥'.repeat(restaurant.priceRating)}</h2>

        </div>
    ` 
    }


    return `
        <div class="d-flex flex-wrap justify-content-center mt-5">
        ${htmlString}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];
    console.log(renderRestaurants);
    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}