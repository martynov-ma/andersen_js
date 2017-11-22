function Case(name, image) {
    this.name = name;
    this.image = image;
    this.items = [];
    this.currentChanceSum = 0;
}

Case.prototype.addItem = function(newItem) {
    if (newItem instanceof Item) {
        this.items.push({
            chance: newItem.type.chance + this.currentChanceSum,
            item: newItem
        });
        this.currentChanceSum += newItem.type.chance;
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
    var temp;
    for (var i = 0; i < this.items.length; i++) {
        if (r <= this.items[i].chance) {
            temp = this.items[i];
            console.log(r.toFixed(4) + " -> [" + (temp.chance - temp.item.type.chance).toFixed(2) + 
                        " - " + temp.chance.toFixed(2) + "] => " + 
                        temp.item.name.split(" ")[0]);
            showDroppedItem(this.items[i].item);
            return;
        }
    }
}

Case.prototype.getDOMElement = function() {
    var caseDiv = document.createElement('div');
    caseDiv.className = 'element-div';
    
    var caseImg = document.createElement('div');
    caseImg.className = 'element-img';
    caseImg.style.backgroundImage = "url(./img/" + this.image + ")";
    caseDiv.appendChild(caseImg);

    var caseName = document.createElement('div');
    caseName.className = 'element-name';
    caseName.innerHTML = this.name;
    caseDiv.appendChild(caseName);

    caseOpenBtn.addEventListener('click', this.open.bind(this));
    caseOpenBtn.addEventListener('click', toggleCaseAnimation);
    
    window.addEventListener('keypress', this.open.bind(this));
    window.addEventListener('animationend', toggleCaseAnimation);

    function toggleCaseAnimation() {
        caseDiv.classList.toggle("animated");
        caseDiv.classList.toggle("pulse");
    }
    return caseDiv;
}