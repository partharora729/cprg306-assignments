import Image from "next/image";
import Link from 'next/link';
import studentInfo from "./week-2/student-info";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href="/week-2" className="text-yellow-500 underline">Week 2</Link></p>
      </div>
    </main>
  );
}

