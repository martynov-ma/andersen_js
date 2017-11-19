function Case() {
    this.items = [];
    this.currentChanceSum = 0;
    this.addItems.apply(this, arguments);
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
    for (var i = 1; i < this.items.length; i++) {
        if (r < this.items[i].chance) {
            return this.items[i - 1].item;
        }
    }
}