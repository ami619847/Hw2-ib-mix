module.exports = class ShoppingCart{
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(itemName, itemQuantity, itemPricePerUnit) {
    let item = {
      name: itemName,
      quantity: itemQuantity,
      pricePerUnit: itemPricePerUnit
    }
    return this.items.push(item);
  }

  clear() {
    return this.items = []
  }

  clone() {
    const newItems = new ShoppingCart();
    newItems.items = JSON.parse(JSON.stringify(this.items))
    return newItems;
  }
}