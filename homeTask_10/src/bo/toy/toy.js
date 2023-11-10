import GiftItem from '../giftItem.js';

export default class Toy extends GiftItem {
  constructor(name, weight, size) {
    super(name, weight);
    this.size = size;
  }

  getCost() {
    return super.getCost() + 15;
  }
}
