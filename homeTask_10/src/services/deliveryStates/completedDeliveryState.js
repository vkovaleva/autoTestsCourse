import DeliveryStateBase from './deliveryStateBase.js';

export default class CompletedDeliveryState extends DeliveryStateBase {
  handleRequest() {
    console.log(`"${this.gift.name}" delivery is completed`);
  }
}
