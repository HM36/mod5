document.addEventListener("DOMContentLoaded", function() {
    var categories = ['Lunch', 'Dinner', 'Sushi', 'Dessert'];
    function getRandomCategoryShortName() {
        var randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    function loadRandomCategoryMenu() {
        var randomCategoryShortName = getRandomCategoryShortName();
        console.log("Loading menu for category:", randomCategoryShortName);
    }

    document.getElementById("specials-tile").addEventListener("click", function(event) {
        event.preventDefault();
        loadRandomCategoryMenu();
    });
});
