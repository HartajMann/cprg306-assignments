import StudentInfo from "../app/StudentInfo.js";
import Link from "next/link";

export default function Page()
{
  return(
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-bold absolute top-0 mt-5"> CPRG 306: Web Development 2 - Assignments</h1>
      <div className=" absolute top-12">
        <StudentInfo />
        <p><Link href="/week2" className="hover:text-slate-500">Week 2</Link></p>
        <p><Link href="/week3" className="hover:text-slate-500">Week 3</Link></p>
        <p><Link href="/week4" className="hover:text-slate-500">Week 4</Link></p>
        <p><Link href="/week5" className="hover:text-slate-500">Week 5</Link></p>
        <p><Link href="/week6" className="hover:text-slate-500">Week 6</Link></p>
        <p><Link href="/week7" className="hover:text-slate-500">Week 7</Link></p>
        </div>
    </div>
  );
}