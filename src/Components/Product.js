import "../styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { useState, useEffect, useReducer } from "react";

export default function Product() {
  const [productsList, setProductList] = useState([]);

  async function productApiCall() {
    const response = await axios.get("/api/products");
    setProductList(response.data.products);
    console.log(productsList);
  }

  useEffect(() => {
    productApiCall();
  }, []);

  function productReducer(state, action) {
    return { ...state, cartItems: state.cartItems.concat(action.payload) };
  }

  const [state, dispatch] = useReducer(productReducer, {
    cartItems: [],
    counter: 0
  });
  console.log(state.cartItems);
  return (
    <div>
      <div className="main-header-container flex">
        <h5 className="main-header">Showing All Product</h5>
        <p className="p1 main-product-count">
          ( Showing <span id="product-count">20</span> products )
        </p>
      </div>
      <ul className="product-container">
        {productsList.map((products) => {
          return (
            <li className="card-vertical" key={products._id}>
              <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                  <FavoriteBorderIcon />
                </span>
                <div className="card__media-column card__media-column-vertical">
                  <img
                    className="card-img-height"
                    src={products.productImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="card__secondary text-center card__secondary-vertical">
                <p className="p1">
                  {products.subtitle} <br />
                  {products.description}
                  <br />
                </p>
                <h2 className="card__subtitle text-center">
                  Rs {products.discountPrice}
                </h2>
              </div>
              <div className="card__action-buttons text-center">
                {state.cartItems.some((cart) => products._id === cart._id) ? (
                  <button className="button button-secondary p1 btn-full bold">
                    Go To Cart
                  </button>
                ) : (
                  <button
                    className="button button-secondary p1 btn-full bold"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: products })
                    }
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
