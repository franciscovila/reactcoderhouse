import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from './CartContext';

const CartWidget = () => {
  const Contexto = useContext(Context)

  return (
    <div>
    {Contexto.cart.lenght}
      <ShoppingCartIcon color="success" fontSize="large" />
    </div>
  )
}

export default CartWidget