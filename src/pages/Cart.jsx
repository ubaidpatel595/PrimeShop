import React from 'react';
import styles from '../css/pages/cart.module.css'
import ProductCarousel from '../components/common/ProductCarousel';
import { getAllProducts, getRecomendations } from '../services/productService';
import Header from '../components/common/Header';
import { useNavigate } from 'react-router-dom';
function Cart() {
    const nav = useNavigate();
    const items = getAllProducts();
    const cartTotal = items.reduce((prev, curr) => prev +=curr.price ,items[0].price);
    console.log(cartTotal)
    return (
        <React.Fragment>
            <Header/>
            <div className={styles.cart_page}>
                <div className={styles.cart}>
                    <div className={styles.cart_heading}>
                        <h1>Shooping Cart</h1>
                        <button className={styles.deselect_btn}>Deselect all items</button>
                        <span className={styles.price_label}>Price</span>
                    </div>
                    {items.map((data) => <div className={styles.product}>
                        <img src={data.images[0][0]} className={styles.thumbnail} />
                        <div className={styles.details}>
                            <h2 className={styles.title}>{data.title}</h2>
                            <span className={styles.stock}>{(data.stock > 0 ? "IN STOCK" : "OUT OF STOCK")}</span>
                            <span className={styles.size}>Size: {data.size}</span>
                            <span className={styles.color}>Color: {data.variants[0].options[0].name}</span>
                            <button className={styles.qty}>QTY:
                                <select>
                                    {Array.from({length:6},(value)=><option>{value}</option>)}
                                </select> 
                            </button>
                            <button className={styles.delete}>Delete</button>
                            <button className={styles.save}>Save for later</button>
                            <button className={styles.more}>See more like this</button>
                            <button className={styles.share}>share</button>
                        </div>
                        <div className={styles.price}>
                            <span className={styles.discount}>{Math.round(((data.mrp - data.price) / data.mrp) * 100)}% off </span>
                            <span className={styles.limited_deal}>Limited time deal</span>
                            <span className={styles.price}>{data.price}</span>
                            <span className={styles.mrp}>M.R.P.:{data.mrp}</span>
                        </div>
                    </div>)}
                    <div className={styles.sub_total}>
                        {`Subtotal(1 item):₹ ${cartTotal}`}
                    </div>
                </div>
                <div className={styles.proceed_buy}>
                    <div className={styles.cart_valume}></div>
                    <span className={styles.order_eligibiity}>Your order is eligible for FREE Delivery. Choose FREE Delivery option at checkout.</span>
                    <h3>Subtotal {`(${items.length + 1} item)`}: ₹{cartTotal}</h3>
                    <button onClick={()=>nav("/checkout/dd")}>Proceed to buy</button>
                </div>
            </div>
            <ProductCarousel name={"You Might also Like"} items={getRecomendations("faetured")}/>
        </React.Fragment>
    )
}
export default Cart;