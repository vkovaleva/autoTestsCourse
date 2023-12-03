import CandyFactory from './bo/candy/candyFactory.js';
import CandyType from './bo/candy/candyType.js';
import GiftBox from './bo/giftBox/giftBox.js';
import Toy from './bo/toy/toy.js';
import RibbonDecorator from './bo/ribbonDecorator.js';
import PriceSortingStrategy from './services/priceSortingStrategy.js';
import DeliveryStates from './services/deliveryStates/deliveryStates.js';

const chocoCandy = CandyFactory.createCandy(CandyType.Chocolate, 'Choco Bar', 20, 'choco', 'milk');
const fruitCandy = CandyFactory.createCandy(CandyType.Fruit, 'Gummies', 40, 'fruity', 'cherry');
const caramelCandy = CandyFactory.createCandy(CandyType.Caramel, 'Toffee', 15, 'sweet', 'toffee');
const toy = new Toy('Fox', 35, 'small');

const gift = new GiftBox('Christmas Gift');

gift.addItem(chocoCandy);
gift.addItem(fruitCandy);
gift.addItem(caramelCandy);
gift.addItem(new RibbonDecorator(caramelCandy));
gift.addItem(new RibbonDecorator(toy));
gift.addItem(toy);

console.log(gift.getDescription());
console.log(`"${gift.name}" box weight: ${gift.getWeight()}g`);
console.log(`"${gift.name}" box price: $${gift.getCost()}`);

console.log(`\n"${gift.name}" box before sorting by price:`);
gift
  .getItems()
  .forEach((giftItem) =>
    console.log(`${giftItem.getDescription()} - Price: $${giftItem.getCost()}`),
  );

gift.sortItems(PriceSortingStrategy.compare);

console.log(`\n"${gift.name}" box after sorting by price:`);
gift
  .getItems()
  .forEach((giftItem) =>
    console.log(`${giftItem.getDescription()} - Price: $${giftItem.getCost()}`),
  );

const minWeight = 20;
const maxWeight = 40;
console.log(`\n"${gift.name}" items in Weight Range ${minWeight}g - ${maxWeight}g:`);
gift
  .filterItems(minWeight, maxWeight)
  .forEach((giftItem) =>
    console.log(`${giftItem.getDescription()} - Weight: ${giftItem.getWeight()}g`),
  );

console.log(`\nPrice Category of "${gift.name}": ${gift.getPriceCategory()}`);

console.log('\nGift delivery:');
gift.setState(DeliveryStates.setInProgressDeliveryState);
gift.requestDelivery();
gift.setState(DeliveryStates.setCompletedDeliveryState);
gift.requestDelivery();
