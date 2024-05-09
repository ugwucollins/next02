import Image from "next/image"
import Link from "next/link"
type Props = {
    result: Result
}

function Content({ result }: Props) {

  const wordCols = (
    <>
    <div className="flex flex-col gap-3 text-left">
        <Link href={`https://en.wikipedia.org/?and=${result.pageid}`} target="blank">
          <h1 className="text-xl text-black underline dark:text-white font-medium">{result.title}</h1>
        </Link>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{result.extract}</p>
    </div>
    </>
  )


  const MainContent = (
    <>
    <div className="w-full">
        <div className="flex justify-start text-left px-1 flex-row">
                 {result?.thumbnail?.source?
                  <Image 
                  src={result.thumbnail.source} 
                  alt={result.title}
                  width={result.thumbnail.width}
                  height={result.thumbnail.height}
                  loading="lazy"
                   />
                   :
                   <div className="mr-4">
                    <Image src="url" alt="Not Found"width={100} height={30} />
                  </div>
                  }
                <div>{wordCols}</div>
        </div>
    </div>
    </>
  )
//   :
//   (  <div className="mr-4">
//         {wordCols}
//     </div>)

 return MainContent;
}

export default Content;