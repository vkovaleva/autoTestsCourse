import PriceCategoryBase from './priceCategoryBase.js';

export default class MediumPriceCategory extends PriceCategoryBase {
  handleGift(gift) {
    if (gift.getCost() > 20 && gift.getCost() <= 70) {
      return 'Medium Price Category';
    }
    return super.handleGift(gift);
  }
}
