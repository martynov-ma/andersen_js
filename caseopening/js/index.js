window.onload = function() {
    var firstCase = new Case();
    firstCase.addItems(
        new Item('Uncommon'),
        new Item('Uncommon'),
        new Item('Uncommon'),
        new Item('Legendary'),
        new Item('Uncommon'),
        new Item('Rare'),
        new Item('Rare'),
        new Item('Rare'),
        new Item('Mythical'),
        new Item('Mythical'),
        new Item('Legendary'),
        new Item('Immortal')
    );

    for (var i = 0; i < 5; i++) {
        console.log(firstCase.open().type);
    }
}