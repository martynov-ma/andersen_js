window.onload = function() {
    var currentCaseDiv = document.getElementById("currentCaseDiv");
    var caseOpenBtn = document.getElementById('caseOpenBtn');
    var droppedItemsDiv = document.getElementById('droppedItemsDiv');

    var bravoCase = new Case('Operation Bravo Case', 'case.png');
    bravoCase.addItems(
        new Item('UMP-45 | Bone Pile', 'ump.png', Item.MilSpec),
        new Item('Nova | Tempest', 'nova.png', Item.MilSpec),
        new Item('Galil AR | Shattered', 'galil.png', Item.MilSpec),
        new Item('M4A4 | Zirka', 'm4.png', Item.Restricted),
        new Item('USP-S | Overgrowth', 'usp.png', Item.Restricted),
        new Item('P2000 | Ocean Foam', 'p2000.png', Item.Classified),
        new Item('AWP | Graphite', 'awp.png', Item.Classified),
        new Item('AK-47 | Fire Serpent', 'ak.png', Item.Covert),
        new Item('M9 Bayonet | Crimson Web', 'knife.png', Item.Knife)
    );
    currentCaseDiv.appendChild(bravoCase.getCaseDOMElement());
}