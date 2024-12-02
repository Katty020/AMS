import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [studentDetail, setStudentDetail] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/student/${id}`)
        .then(response => {
          setStudentDetail(response.data);
        })
        .catch(error => {
          console.error('Error fetching student details:', error);
        });
    }
  }, [id]);

  if (!studentDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Name: {studentDetail.name}</p>
      <p>Email: {studentDetail.email}</p>
      <p>Department: {studentDetail.Department.name}</p>
      <p>Hostel: {studentDetail.Hostel.name}</p>
      <p>Mess: {studentDetail.Mess.name}</p>
    </div>
  );
};

export default StudentDashboard;