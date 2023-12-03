import GiftItem from '../giftItem.js';

export default class Candy extends GiftItem {
  constructor(name, weight, flavor) {
    super(name, weight);
    this.flavor = flavor;
  }

  getCost() {
    return super.getCost() + 2;
  }
}
