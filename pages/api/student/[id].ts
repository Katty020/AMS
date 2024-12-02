import { NextApiRequest, NextApiResponse } from 'next';
import StudentDetail from '../../../models/StudentDetail';
import Department from '../../../models/Department';
import Hostel from '../../../models/Hostel';
import Mess from '../../../models/Mess';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const studentDetail = await StudentDetail.findOne({
      where: { user_id: id },
      include: [Department, Hostel, Mess],
    });

    if (!studentDetail) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(studentDetail);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};