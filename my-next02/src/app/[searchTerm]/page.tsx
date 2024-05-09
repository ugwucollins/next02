
import Getusers from "../../../lib/getusers";
import { Suspense} from 'react';
import Content from "./Content";

type Props = {
    params: {
        searchTerm: string
    }
}
 export default async function page({ params: { searchTerm }}: Props) {

  const wikiData: Promise<SearchResult> = Getusers(searchTerm);
  const data = await wikiData;
  const results:Result[] | undefined = data?.query?.pages;
  

  return(
    <>
      <div className="flex justify-center mt-2">
              {results?
              <Suspense fallback={<h1>Loading Blog...</h1>}>
                  <div className="w-full max-w-[1000px]
                  max-[800px]:max-w-[500px] bg-white">
                      { Object.values(results).map((result: any) =>{ 
                        return  <div>
                              <Content key={result.pageid} result={result} />
                          </div>}
                  )}
                  </div>
            </Suspense>
              :
              <h1 className='capitalize text-black dark:text-white text-xl font-semibold flex text-center hover:text-red-700 transition-all hover:text-2xl justify-center mt-[300px] '>{searchTerm} Not found</h1>
              }
      </div>
      
    </>
  )
}