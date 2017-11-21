function Item(name, image, type) {
    this.name = name;
    this.image = image;
    this.type = type;
}

Item.prototype.getDOMElement = function() {
    var itemDiv = document.createElement('div');
    itemDiv.className = 'element-div';
    itemDiv.style.display = 'inline-block';
    itemDiv.style.margin = '5px';

    var itemImg = document.createElement('div');
    itemImg.className = 'element-img';
    itemImg.style.backgroundImage = "url(./img/" + this.image + ")";
    itemDiv.appendChild(itemImg);
    
    var itemName = document.createElement('div');
    itemName.className = 'element-name';
    itemName.innerHTML = this.name;
    itemName.style.backgroundColor = this.type.color;
    itemDiv.appendChild(itemName);
    return itemDiv;
}