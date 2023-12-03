import Candy from './candy.js';

export default class CaramelCandy extends Candy {
  constructor(name, weight, flavor, caramelType) {
    super(name, weight, flavor);
    this.caramelType = caramelType;
  }

  getCost() {
    return super.getCost() + 3;
  }
}
