function Item(type) {
    this.type = type;
    switch (type) {
        case 'Uncommon':
            this.chance = 0.40;
            break;
        case 'Rare':
            this.chance = 0.35;
            break;
        case 'Mythical':
            this.chance = 0.20;
            break;
        case 'Legendary':
            this.chance = 0.04;
            break;
        case 'Immortal':
            this.chance = 0.01;
            break;
    
        default:
            this.type = 'Common'
            this.chance = 0.50;
            break;
    }
}

/*Item.Type = typeEnum({Common: 0.50, Rare: 0.30, Mythical: 0.15, Legendary: 0.04, Immortal: 0.01});

function typeEnum(types) {
    typeEnum.values = [];

    var proto = typeEnum.prototype = {
        constructor: typeEnum,
        type: function() { return this.type },
        chance: function() { return this.chance }
    }

    for (name in types) {
        var type = Object.create(proto);
        type.name = name;
        type.value = types[name];
        typeEnum[name] = type;
        typeEnum.values.push(type);
    }

    return typeEnum;
}*/