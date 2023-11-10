export default class WeightRangeFilter {
  static filter(items, minWeight, maxWeight) {
    return items.filter((item) => item.getWeight() >= minWeight && item.getWeight() <= maxWeight);
  }
}
