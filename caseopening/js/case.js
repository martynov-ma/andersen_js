function Case(name, image) {
    this.name = name;
    this.image = image;
    this.items = [];
    this.currentChanceSum = 0;
}

Case.prototype.addItem = function(newItem) {
    if (newItem instanceof Item) {
        this.items.push({
            chance: newItem.chance + this.currentChanceSum,
            item: newItem
        });
        this.currentChanceSum += newItem.chance;
    } else {
        throw "[this item cant be stored in the case]";
    }
}

Case.prototype.addItems = function() {
    if (arguments.length != 0) {
        if (arguments.length == 1) {
            if (arguments[0] instanceof Object) {
                this.addItem.call(this, arguments[0]);
            } else if (arguments[0] instanceof Array) {
                for (var i = 0; i < arguments[0].length; i++) {
                    this.addItem.call(this, arguments[0][i]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                this.addItem.call(this, arguments[i]);
            }
        }
    }
}

Case.prototype.open = function() {
    var r = Math.random() * this.currentChanceSum;
    for (var i = 0; i < this.items.length - 1; i++) {
        if (r > this.items[i].chance && r <= this.items[i + 1].chance) {
            this.items[i + 1].item.show();
            return;
        }
    }
}

Case.prototype.getCaseDOMElement = function() {
    var caseDiv = document.createElement('div');
    caseDiv.className = 'case-div';
    
    var caseImg = document.createElement('div');
    caseImg.className = 'case-img';
    caseImg.style.backgroundImage = "url(./img/" + this.image + ")";
    caseDiv.appendChild(caseImg);

    var caseName = document.createElement('div');
    caseName.className = 'case-name';
    caseName.innerHTML = this.name;
    caseDiv.appendChild(caseName);

    caseOpenBtn.onclick = this.open.bind(this);
    return caseDiv;
}