function ItemType(name, chance, color) {
    this.name = name;
    this.chance = chance;
    this.color = color;
}

ItemType.MilSpec = new ItemType("MilSpec", 0.4, '#4b69ff');
ItemType.Restricted = new ItemType("Restricted", 0.35, '#8847ff');
ItemType.Classified = new ItemType("Classified", 0.20, '#d32ee6');
ItemType.Covert = new ItemType("Covert", 0.06, '#eb4b4b');
ItemType.Knife = new ItemType("Knife", 0.025, '#ffae39');