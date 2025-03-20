
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual publishable key
const publishableKey = 'pk_test_51YOUR_TEST_KEY';

export const stripePromise = loadStripe(publishableKey);
