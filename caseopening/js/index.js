window.onload = function() {
    var currentCaseDiv = document.getElementById("currentCaseDiv");
    var caseOpenBtn = document.getElementById('caseOpenBtn');
    var droppedItemsDiv = document.getElementById('droppedItemsDiv');
    var allCurrentTypesUl = document.getElementById('allCurrentTypesUl');
    var allItemsInCaseUl = document.getElementById('allItemsInCaseUl');

    showAllItemTypes();

    var bravoCase = new Case('Operation Bravo Case', 'case.png');
    bravoCase.addItems(
        new Item('UMP-45 | Bone Pile', 'ump.png', ItemType.MilSpec),
        new Item('Nova | Tempest', 'nova.png', ItemType.MilSpec),
        new Item('Galil AR | Shattered', 'galil.png', ItemType.MilSpec),
        new Item('M4A4 | Zirka', 'm4.png', ItemType.Restricted),
        new Item('USP-S | Overgrowth', 'usp.png', ItemType.Restricted),
        new Item('P2000 | Ocean Foam', 'p2000.png', ItemType.Classified),
        new Item('AWP | Graphite', 'awp.png', ItemType.Classified),
        new Item('AK-47 | Fire Serpent', 'ak.png', ItemType.Covert),
        new Item('M9 Bayonet | Crimson Web', 'm9.png', ItemType.Knife)
    );
    currentCaseDiv.appendChild(bravoCase.getDOMElement());

    /*for (var i = 0; i < 100; i++) {
        bravoCase.open();
    }*/

    showAllItemsInCase(bravoCase);
}

 function showAllItemTypes() {
    var typesArr = [];
    var totalChanse = 0;
    for (var type in ItemType) {
        typesArr.push(ItemType[type]);
        totalChanse += ItemType[type].chance;
    }
    typesArr.sort(function(a, b) {
        return b.chance - a.chance;
    })

    var typeListItem;
    typesArr.forEach(function(type) {
        typeListItem = document.createElement('li');
        typeListItem.innerText = type.name + " - " + (type.chance * 100 / totalChanse).toFixed(0) + "%";
        typeListItem.style.backgroundColor = type.color;
        allCurrentTypesUl.appendChild(typeListItem);
    });
}

function showAllItemsInCase(currentCase) {
    var itemListItem;
    var itemImg;
    var itemNameDiv;
    currentCase.items.forEach(function(caseItem) {
        itemListItem = document.createElement('li');

        itemImgDiv = document.createElement('div');
        itemImgDiv.style.backgroundImage = "url(./img/" + caseItem.item.image + ")";
        itemImgDiv.style.backgroundColor = caseItem.item.type.color;
        itemListItem.appendChild(itemImgDiv);

        itemNameDiv = document.createElement('span');
        itemNameDiv.innerText = caseItem.item.name;
        itemListItem.appendChild(itemNameDiv);

        allItemsInCaseUl.appendChild(itemListItem);
    });
}

function showDroppedItem(item) {
    droppedItemsDiv.appendChild(item.getDOMElement());
}