import DeliveryStateBase from './deliveryStateBase.js';

export default class NotDeliveredState extends DeliveryStateBase {
  handleRequest() {
    console.log(`"${this.gift.name}" delivery failed`);
  }
}
