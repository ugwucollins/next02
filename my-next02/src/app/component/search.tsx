"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
    const [search,setsearch] = useState('');
    const router = useRouter()
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/${search}/`)
      setsearch('')
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-row">
            <input type="text"
                placeholder="Search..."
                className="sm:w-[350px] py-2 pl-2 rounded-lg shadow outline-none bg-white text-black font-medium text-lg
                shadow-slate-400 dark:shadow-slate-700 w-full max-[345px]:w-full"
                value={search}
                onChange={e => setsearch(e.target.value)}
                autoFocus
            />
            <button type="submit"
            className="text-2xl w-auto h-auto max-[400px]:ml-1 ml-2 p-1 transition-all bg-slate-400 border-2 rounded-md hover:bg-slate-300">🚀</button>
        </form>
    </>
  )
}
