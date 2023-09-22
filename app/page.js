import StudentInfo from "../app/StudentInfo.js";
import Link from "next/link";

export default function Page()
{
  return(
    <div>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <p><Link href="/week2">Week 2</Link></p>
        <p><Link href="/week3">Week 3</Link></p>
    </div>
  );
}