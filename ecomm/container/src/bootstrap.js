import { mount as MountProducts} from "products/ProductsIndex";
import { mount as MountCart} from  "cart/CartShow";

console.log("Container!");

MountProducts(document.querySelector("#dev-products"));
MountCart(document.querySelector("#dev-cart"));
