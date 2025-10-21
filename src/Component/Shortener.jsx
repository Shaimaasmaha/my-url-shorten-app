import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history , setHistory]=useState([]);

  useEffect(() => {
    const saved =localStorage.getItem('urlHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }}, []);

    useEffect(() => {
      localStorage.setItem('urlHistory', JSON.stringify(history));
    }, [history]);

const handleShorten = async () => {
  try{
  setLoading(true);
  const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const newShortenedUrl = response.data.result.full_short_link;
  setShortenedUrl(newShortenedUrl);
  setHistory([...history, { original: url, shortened: newShortenedUrl }]);
  setUrl('');}
  catch (error) {
    setError(' Please try add link.');
  }
  finally {
    setLoading(false);
  }
};
 const handleCopy =(link)=>{
    navigator.clipboard.writeText(link);
  alert('Copied to clipboard!');
  }
const handleDelete =(short)=>{
  const updatedHistory = history.filter(item => item.shortened !== short);
  setHistory(updatedHistory);
};
return(
  <>
  
 <div className='bg-violet-950 py-7 px-4 w-4/5 md:w-3.5/4 mx-auto  my-4 bg-[url(./assets/images/bg-shorten-mobile.svg)] bg-position-[right_top] bg-no-repeat md:bg-[url(./assets/images/bg-shorten-desktop.svg)] rounded-lg '>
 <div className='flex flex-col md:flex-row w-full gap-4 md:gap-2 items-center justify-center '>
<input type='text' onChange={(e)=>setUrl(e.target.value)} value={url} className='bg-white p-3 w-full md:w-3/4 rounded-lg  border-1' placeholder='shorten a link here ...' />
<button  className='bg-cyan-400 w-full md:w-1/4 rounded-lg p-3 text-white font-stretch-50% cursor-pointer' onClick={handleShorten}  > shorten it !</button>
</div>
{error && <p className='text-red-500 mt-2'>{error}</p>}
</div>
 

  </>
)

}

export default Shortener ;