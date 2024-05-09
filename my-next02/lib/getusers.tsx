
export default async function Getusers(searchTerm: string) {

   const SearchParams = new URLSearchParams({
    action:'query',
    generator:'search',
    gsrsearch: searchTerm,
    gsrlimit: '26',
    prop: 'pageimages/extracts',
    excharts: '100',
    exintro:'true',
    explaintext:'true',
    exlimit:'max',
    format:'json',
    origin:'*',
   })
   
   const Response = await fetch('https://en.wikipedia.org/w/api.php?' + SearchParams)
   .catch((error) =>{throw new Error('please check your network')})

   if (!Response.ok) throw new Error('please check your Internet' );
   
   return Response.json();
}
