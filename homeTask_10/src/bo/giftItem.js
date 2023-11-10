export default class GiftItem {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.price = 0;
  }

  getWeight() {
    return this.weight;
  }

  getCost() {
    return this.price;
  }

  getDescription() {
    return this.name;
  }
}
