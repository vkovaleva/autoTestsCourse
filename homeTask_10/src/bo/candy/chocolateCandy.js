import Candy from './candy.js';

export default class ChocolateCandy extends Candy {
  constructor(name, weight, flavor, chocolateType) {
    super(name, weight, flavor);
    this.chocolateType = chocolateType;
  }

  getCost() {
    return super.getCost() + 5;
  }
}
