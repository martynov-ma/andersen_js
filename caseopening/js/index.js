window.onload = function() {
    var currentCaseDiv = document.getElementById("currentCaseDiv");
    var caseOpenBtn = document.getElementById('caseOpenBtn');
    var droppedItemsDiv = document.getElementById('droppedItemsDiv');

    var bravoCase = new Case('Operation Bravo Case', 'case.png');
    bravoCase.addItems(
        new Item('UMP-45 | Bone Pile', 'ump.png', 'MilSpec'),
        new Item('Nova | Tempest', 'nova.png', 'MilSpec'),
        new Item('Galil AR | Shattered', 'galil.png', 'MilSpec'),
        new Item('M4A4 | Zirka', 'm4.png', 'Restricted'),
        new Item('USP-S | Overgrowth', 'usp.png', 'Restricted'),
        new Item('P2000 | Ocean Foam', 'p2000.png', 'Classified'),
        new Item('AWP | Graphite', 'awp.png', 'Classified'),
        new Item('AK-47 | Fire Serpent', 'ak.png', 'Covert'),
        new Item('M9 Bayonet | Crimson Web', 'm9.png', 'Knife')
    );
    currentCaseDiv.appendChild(bravoCase.getCaseDOMElement());

    /*for (var i = 0; i < 100; i++) {
        bravoCase.open();
    }*/
}