import PriceCategoryBase from './priceCategoryBase.js';

export default class HighPriceCategory extends PriceCategoryBase {
  handleGift(gift) {
    if (gift.getCost() > 70) {
      return 'High Price Category';
    }
    return super.handleGift(gift);
  }
}
