import ChocolateCandy from './chocolateCandy.js';
import FruitCandy from './fruitCandy.js';
import CaramelCandy from './caramelCandy.js';
import CandyType from './candyType.js';

export default class CandyFactory {
  static createCandy(type, name, weight, flavor, specificProperty) {
    if (type === CandyType.Chocolate) {
      return new ChocolateCandy(name, weight, flavor, specificProperty);
    }
    if (type === CandyType.Fruit) {
      return new FruitCandy(name, weight, flavor, specificProperty);
    }
    if (type === CandyType.Caramel) {
      return new CaramelCandy(name, weight, flavor, specificProperty);
    }
    throw new Error('Invalid candy type');
  }
}
