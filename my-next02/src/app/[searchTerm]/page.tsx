
import Getusers from "../../../lib/getusers";
import { Suspense} from 'react';
import Content from "./Content";
// import { Rings } from 'react-loader-spinner';

type Props = {
    params: {
        searchTerm: string
    }
}
 // <Rings
  //         visible={true}
  //         height="100"
  //         width="100"
  //         color="rgba(47, 38, 75, 0.948)"
  //         ariaLabel="rings-loading"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         />
 export default async function page({params: { searchTerm }}: Props) {
  const wikiData: Promise<SearchResult> = Getusers(searchTerm);
  const data = await wikiData;
  const results:Result[] | undefined = data?.query?.pages;
  
  // const [isClient, setIsClient] = useState(true)
 
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsClient(false)
  //   },200)
  // }, [])

  return(
    <>
    {/* {isClient?
        <div className='flex justify-center flex-col mt-[280px]'>
          <Rings
          visible={true}
          height="100"
          width="100"
          color="rgba(47, 38, 75, 0.948)"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </div> */}
        
      <div className="flex justify-center mt-2">
              {results?
              <Suspense fallback={<h1>Loading Blog...</h1>}>
                  <div className="w-full max-w-[1000px]
                  max-[800px]:max-w-[500px] bg-white">
                      { Object.values(results).map((result: any) =>{ 
                        return  <div>
                              <Content key={result.pageid} result={result} />
                              {/* {JSON.stringify(result)} */}
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