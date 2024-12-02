import { useState } from 'react';
import axios from 'axios';

const Pay = () => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/pay', { user_id: userId, amount });
      alert('Payment successful');
    } catch (error) {
      alert('Payment failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Pay</button>
    </form>
  );
};

export default Pay;