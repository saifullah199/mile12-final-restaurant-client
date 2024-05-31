import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import useCart from '../../Hooks/useCart'
import { AuthContext } from "../../Provider/AuthProvider";
const CheckOut = () => {
  const [error,setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()
    const {user} = useContext(AuthContext)
    const totalPrice = cart.reduce((total,item) => total + item.price, 0)

    useEffect(() =>{
      axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return 
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
          console.log('payment error', error)
          setError(error.message)
        }
        else{
          console.log('payment method', paymentMethod)
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
            }
          }
        })
        if(confirmError){
          console.log('confirm error')
        }
        else{
          console.log('payment intent', paymentIntent)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>

        Pay
      </button>
      <p> {error} </p>
        </form>
    );
};

export default CheckOut;