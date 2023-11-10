export default class PriceCategoryBase {
  constructor(handler = null) {
    this.handler = handler;
  }

  handleGift(gift) {
    if (this.handler) {
      return this.handler.handleGift(gift);
    }
    return 'Unknown Price Category';
  }
}
