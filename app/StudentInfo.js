import Link from "next/link";

export default function StudentInfo()
{   return(
    <div>
        <p>Name: Hartaj Singh Mann</p>
        <p>Course section: CPRG 306 A</p>
        <Link href="https://github.com/HartajMann/cprg306-assignments.git" className="hover:text-slate-500">GitHub repository</Link>
    </div>
);
}