import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartAction from '../store/actions/cart'

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    let TotalPrice = 0;
    
    for(let i = 0; i < cart.Cart.length; i++){
        TotalPrice += cart.Cart[i].price * cart.Cart[i].quantity
    }

    if(cart.value > 0){
        localStorage.setItem('amigurumishopping: cart', JSON.stringify(cart))
    }
    
    return (
        <>
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#CartModal">
                <span><i className="fas fa-shopping-cart"></i></span>
                <span className="badge rounded-pill bg-info text-dark">
                    {cart.value}
                </span>
            </button>

          
            <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div >
                            <h5 className="modal-title" id="CartModalLabel" style={{marginTop:"10px", marginLeft:"10px"}}>Meu Carrinho</h5>                            
                        </div>

                        <div className="modal-body table-responsive">
                            <table className="table tavle-hover" style={{textAlign: "center", verticalAlign:"middle"}}>
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Qtd</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {cart.Cart.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <th> <button className="btn btn-outline-danger btn-sm "><i  className=" far fa-trash-alt" onClick={() => dispatch(cartAction.DeleteItem(cart, item))}></i></button></th>
                                                <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.name_product} width="50px" /></th>
                                                <th><span className="btn btn-outline-info btn-sm ">{item.quantity}</span></th>
                                                <th>R$ {item.price.toFixed(2).toString().replace(".", ",")}</th>
                                                <th><button className="btn btn-outline-primary btn-sm"><i className=" fas fa-plus" onClick={() => dispatch(cartAction.AddItem(cart, item))}></i></button></th>
                                                <th><button className="btn btn-outline-danger btn-sm"><i className=" fas fa-minus" onClick={() => dispatch(cartAction.RemoveItem(cart, item))}></i></button></th>
                                                <th>R$ {(item.price * item.quantity).toFixed(2).toString().replace(".", ",")}</th>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <th colSpan="2" scope="col">Total</th>
                                        <th colSpan="3"> {cart.value} itens</th>
                                        <th colSpan="2">R$ {TotalPrice.toFixed(2).toString().replace(".", ",")}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{marginBottom:"20px", marginLeft:"400px"}}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;