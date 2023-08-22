import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center m-5 ">
        <div>Star Wars</div>
      </div>
      <div className=" flex justify-center">
        <Link
          href="/planets"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          View Planets
        </Link>
      </div>
    </>
  );
}
