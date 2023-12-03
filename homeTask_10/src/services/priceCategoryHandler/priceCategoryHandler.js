import LowPriceCategory from './lowPriceCategory.js';
import MediumPriceCategory from './mediumPriceCategory.js';
import HighPriceCategory from './highPriceCategory.js';

const lowPriceHandler = new LowPriceCategory();
const mediumPriceHandler = new MediumPriceCategory(lowPriceHandler);
const highPriceHandler = new HighPriceCategory(mediumPriceHandler);

export default highPriceHandler;
