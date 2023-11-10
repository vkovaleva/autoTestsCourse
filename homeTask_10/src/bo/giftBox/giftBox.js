import GiftItem from '../giftItem.js';
import DeliveryStates from '../../services/deliveryStates/deliveryStates.js';
import PriceCategoryHandler from '../../services/priceCategoryHandler/priceCategoryHandler.js';
import WeightRangeFilter from '../../services/weightRangeFilter.js';

export default class GiftBox extends GiftItem {
  constructor(name) {
    super(name, 0);
    this.items = [];
    this.currentState = DeliveryStates.setNotDeliveredState(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getWeight() {
    return this.items.reduce((total, item) => total + item.getWeight(), 0);
  }

  getCost() {
    return this.items.reduce((total, item) => total + item.getCost(), 0);
  }

  sortItems(sortingStrategy) {
    this.items.sort(sortingStrategy);
  }

  filterItems(minWeight, maxWeight) {
    return WeightRangeFilter.filter(this.items, minWeight, maxWeight);
  }

  getPriceCategory() {
    return PriceCategoryHandler.handleGift(this);
  }

  setState(state) {
    this.currentState = state(this);
  }

  requestDelivery() {
    this.currentState.handleRequest();
  }

  getDescription() {
    return this.items.reduce((total, item) => `${total + item.getDescription()}, `, 'Gift box: ');
  }
}
