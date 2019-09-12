import React, { useEffect } from "react";

const Item = props => {
  const { item, index, selectedProduct } = props;

  useEffect(() => {}, []);
  function handleClick() {
    if (props.onSelectProduct) {
      props.onSelectProduct(item);
    }
  }
  return (
    <div className="product animated fadeIn" onClick={handleClick}>
      <div
        className={
          "product__index " +
          (selectedProduct && selectedProduct.Id === item.Id ? "active" : "")
        }
      >
        {index + 1}
      </div>
      <div className="product__text">{item.Name}</div>
      <div
        className={
          "product__rdio " +
          (selectedProduct && selectedProduct.Id === item.Id ? "active" : "")
        }
      >
        {selectedProduct && selectedProduct.Id === item.Id && <div />}
      </div>
    </div>
  );
};

export default Item;
