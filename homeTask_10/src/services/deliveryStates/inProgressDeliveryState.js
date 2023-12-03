import DeliveryStateBase from './deliveryStateBase.js';

export default class InProgressDeliveryState extends DeliveryStateBase {
  handleRequest() {
    console.log(`"${this.gift.name}" delivery is in progress`);
  }
}
