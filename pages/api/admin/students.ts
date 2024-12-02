import { NextApiRequest, NextApiResponse } from 'next';
import StudentDetail from '../../../models/StudentDetail';
import Department from '../../../models/Department';
import Hostel from '../../../models/Hostel';
import Mess from '../../../models/Mess';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const students = await StudentDetail.findAll({
      include: [Department, Hostel, Mess],
    });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};