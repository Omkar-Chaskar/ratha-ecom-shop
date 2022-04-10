import "../styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const rating = [4, 3, 2, 1];

export default function Filter() {

  const [category, setCategory] = useState([]);

  async function categoryApiCall() {
    const response = await axios.get("/api/categories");
    setCategory(response.data.categories);
    console.log(category);
  }

  useEffect(() => {
    categoryApiCall();
  }, []);

  return (
    <section className="filter">
      <div>
        <div className="filter-header-container">
          <h5 className="filter-header">Filter</h5>
          <button className="filter-clear">Clear</button>
        </div>
        <div className="price-slider-container">
          <h5 className="Price-slider-header">Price</h5>
          <div className="slider-container">
            <input
              type="range"
              min="50"
              max="200"
              value="150"
              className="slider"
              id="myRange"
            />
            <p className="price-slider-value p2 bolder">150</p>
          </div>
        </div>
        <div className="catagory-container">
          <h5 className="catagory-header">Catagory</h5>
          <ul>
            {category.map(({_id, categoryName}) => {
              return (
                <li>
                  <input
                    type="checkbox"
                    className="catagory-box"
                    name="Men Clothing"
                    id={_id}
                  />
                  <label htmlFor={_id}>{categoryName}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rating-container">
          <h5 className="rating-header">Rating</h5>
          <ul>
            {rating.map((rating, index) => {
              return (
                <li>
                  <input
                    type="radio"
                    name="rating"
                    className="rating-radio-btn"
                    id={index}
                  />
                  <label htmlFor={index}>{rating} stars & above</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sortby-container">
          <h5 className="sortby-header">Sort By</h5>
          <input
            type="radio"
            name="sort"
            className="sortby-radio-btn"
            id="low-to-high-price"
          />
          <label htmlFor="rating-four">Price - Low to High</label>
          <br />
          <input
            type="radio"
            name="sort"
            className="sortby-radio-btn"
            id="high-to-low-price"
          />
          <label htmlFor="rating-three">Price - High to Low</label>
          <br />
        </div>
      </div>
    </section>
  );
}
