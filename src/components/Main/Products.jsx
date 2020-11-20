import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../JS/actions/productAction'

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchProducts()) ;
  } );

  const productsList = useSelector((state) => state.products);
  console.log(productsList);

  return (
    <div>
      {/* {
                productsList.map(el=>
                <p key={el.id}>{el.Name}</p>
                    )
            } */}
    </div>
  );
};

export default Products;
