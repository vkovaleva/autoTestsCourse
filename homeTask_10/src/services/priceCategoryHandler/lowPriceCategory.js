import PriceCategoryBase from './priceCategoryBase.js';

export default class LowPriceCategory extends PriceCategoryBase {
  handleGift(gift) {
    if (gift.getCost() <= 20) {
      return 'Low Price Category';
    }
    return super.handleGift(gift);
  }
}
