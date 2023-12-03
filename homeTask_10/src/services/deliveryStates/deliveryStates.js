import NotDeliveredState from './notDeliveredState.js';
import InProgressDeliveryState from './inProgressDeliveryState.js';
import CompletedDeliveryState from './completedDeliveryState.js';

export default class DeliveryStates {
  static setNotDeliveredState(item) {
    return new NotDeliveredState(item);
  }

  static setInProgressDeliveryState(item) {
    return new InProgressDeliveryState(item);
  }

  static setCompletedDeliveryState(item) {
    return new CompletedDeliveryState(item);
  }
}
