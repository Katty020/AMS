import { NextApiRequest, NextApiResponse } from 'next';
import Transaction from '../../models/Transaction';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { user_id, amount } = req.body;

    try {
      const transaction = await Transaction.create({ user_id, amount, status: 'Pending' });
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ error: 'Transaction failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};