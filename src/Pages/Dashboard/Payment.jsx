import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

//  add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat">

            </SectionTitle>
            <div>
                <Elements stripe={stripePromise}>

                    <CheckOut />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;