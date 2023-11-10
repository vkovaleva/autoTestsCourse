import Candy from './candy.js';

export default class FruitCandy extends Candy {
  constructor(name, weight, flavor, fruitType) {
    super(name, weight, flavor);
    this.fruitType = fruitType;
  }

  getCost() {
    return super.getCost() + 4;
  }
}
