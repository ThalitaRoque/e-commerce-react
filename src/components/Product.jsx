import React, {useState, useEffect, useContext} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
// import { BasketContext } from '../helper/context/BasketContext';

const Product = () => {
 
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    // const {basket, setBasket} = useContext(BasketContext); //cesta da compra
    const dispatch = useDispatch();
    const addProduct = (product) => {
     dispatch(addCart(product));
    // const prueba = basket.push(product) 
    // setBasket(product) // poner en localStorage
    }

    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch (`http://localhost:5000/products/${id}`);
        setProduct(await response.json());
        setLoading(false);

      }
      getProduct();
    }, []);
    

    const Loading = () => {
        return(
            <>
              <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={400}/>
              </div>
              <div className="col-md-6">
                <Skeleton height={50} width={300} />
                <Skeleton height={75} />
                <Skeleton height={25} width={150} />
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100} />
                <Skeleton height={400} width={150} style={{marginLeft:6}}/>
              </div>
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
            <div key={product.id}>
               <div className="col-md-6" key={product.id}>
              <img src={product.img} alt={product.title} height="400px" width="400px" />
               </div>
               <div className="col-md-6"  key={product.id}>
                 <h1 className="display-5">{product.title}</h1>
                 <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className= "fa fa-star"></i>
                 </p>
                 <h3 className="display-6 fw-bold my-4">
                    ${product.price}
                 </h3>
                 <p className="lead">{product.description}</p>
               </div> 
               <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                Add to Cart
               </button>
               <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                Go to Cart
               </NavLink>
               </div>
               
            </>
        )
    }


  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>

    </div>
  );
}

export default Product;