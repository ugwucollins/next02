import Link from "next/link";
import Search from "./search";
export default function Navbar() {
  return (
    <div className="w-full flex px-1 justify-center place-content-center bg-slate-800 dark:bg-slate-200 text-white text-center dark:text-black p-3 sm:p-4 mt-1 sticky top-0">
      <div className="flex justify-between sm:px-3 px-0 w-full flex-row max-[345px]:flex-col max-[345px]:gap-1">
        <h1 className="text-xl font-semibold mt-1 sm:ml-0 ml-1">
            <Link href={`/`}>
                Wikipedia
            </Link>
        </h1>
        <div>
           <Search />
        </div>
      </div>
    </div>
  )
}
