function Item(name, image, type) {
    this.name = name;
    this.type = type;
    this.image = image;
    switch (type) {
        case 'MilSpec':
            this.chance = 0.40;
            this.color = '#4b69ff';
            break;
        case 'Restricted':
            this.chance = 0.35;
            this.color = '#8847ff';
            break;
        case 'Classified':
            this.chance = 0.20;
            this.color = '#d32ee6';
            break;
        case 'Covert':
            this.chance = 0.06;
            this.color = '#eb4b4b';
            break;
        case 'Knife':
            this.chance = 0.025;
            this.color = '#ffae39';
            break;
    
        default:
            this.type = 'Common'
            this.color = '#b0c3d9';
            this.chance = 0.50;
            break;
    }

    Item.prototype.show = function() {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'case-div';
        itemDiv.style.display = 'inline-block';
        itemDiv.style.margin = '5px';
    
        var itemImg = document.createElement('div');
        itemImg.className = 'case-img';
        itemImg.style.backgroundImage = "url(./img/" + this.image + ")";
        itemDiv.appendChild(itemImg);
        
        var itemName = document.createElement('div');
        itemName.className = 'case-name';
        itemName.innerHTML = this.name;
        itemName.style.backgroundColor = this.color;
        itemDiv.appendChild(itemName);
    
        droppedItemsDiv.appendChild(itemDiv);
    }
}