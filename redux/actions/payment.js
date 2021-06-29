import * as api from "../api";
import { PAYMENT } from "../constants/index";

// Retrieve Data

const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      alert("Error retrieving data");
    }
  };

export const AddPayment = (id) => async (dispatch) => {
    try {
        const user = await _retrieveData;
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const formData = {
          slot:id,
          client: user.id
        }
        const response = await api.payment(formData);

        const session = response.data;
        localStorage.setItem("session",session.id);

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            alert(result.error.message)
          }

      dispatch({ type: PAYMENT, response });

    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
};