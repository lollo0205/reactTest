import Ryzen_5_5600G from "./images/ryzen_5_5600G.jfif";
import Ryzen_7_5700G from "./images/ryzen_7_5700G.jfif";
import Ryzen_9_5900X from "./images/ryzen_9_5900X.jfif";
import Intel_I5 from "./images/intel_i5.jfif";
import Intel_I7 from "./images/intel_i7.jfif";
import Intel_I9 from "./images/intel_i9.jfif";

export const cards = [
  { id: 1, type: 'cpu', image: Ryzen_5_5600G, price: 256.00, name: 'Ryzen 5 5600G', qtaStock: 20 },
  { id: 2, type: 'cpu', image: Ryzen_7_5700G, price: 356.00, name: 'Ryzen 7 5700G', qtaStock: 20 },
  { id: 3, type: 'cpu', image: Ryzen_9_5900X, price: 456.00, name: 'Ryzen 9 5900X', qtaStock: 20 },
  { id: 4, type: 'cpu', image: Intel_I5, price: 320.00, name: "Intel I5", qtaStock: 20 },
  { id: 5, type: 'cpu', image: Intel_I7, price: 420.00, name: "Intel I7", qtaStock: 20 },
  { id: 6, type: 'cpu', image: Intel_I9, price: 520.00, name: "intel I9", qtaStock: 20 }
]


/**
 * product types example: {id: number, qta: number, priceSinglePiece: number, partialPrice: number}
 */
export const cart = {
  products: [],
  totalProducts: 0,
  amount: 0
}

