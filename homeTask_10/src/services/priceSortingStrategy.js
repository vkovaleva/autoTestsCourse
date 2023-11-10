export default class PriceSortingStrategy {
  static compare(a, b) {
    return a.getCost() - b.getCost();
  }
}
