"use client";
// this means that you will be able to see your output in the browser not in the server.
import Link from "next/link";
export default function(){
    return(<div className="">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <h1>Parth Arora</h1>
        <Link href="https://github.com/partharora729/cprg306-assignments.git" className="text-yellow-500 underline">My Github Link</Link>
    </div>)
}

