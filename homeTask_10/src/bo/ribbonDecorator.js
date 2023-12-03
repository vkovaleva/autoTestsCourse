import GiftItem from './giftItem.js';

export default class RibbonDecorator extends GiftItem {
  constructor(item) {
    super(item.name, 0);
    this.item = item;
  }

  getCost() {
    return this.item.getCost() + 7;
  }

  getWeight() {
    return this.item.getWeight() + 2;
  }

  getDescription() {
    return `Ribbon + ${this.item.getDescription()}`;
  }
}
