
import Link from 'next/link';
import StudentInfo from './student-info'; 

export default function Page() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className="text-center">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <StudentInfo/>
      </div>
    </main>
  
    // </div>
  );
}
