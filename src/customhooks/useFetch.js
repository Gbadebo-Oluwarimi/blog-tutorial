import {useState,useEffect} from 'react';

const useFetch = (url) => {

    const [data, setdata] = useState(null)
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
        const abortCont = new AbortController();


      fetch(url, {signal:abortCont.signal}).then((res) => {
          if(!res.ok){
              throw Error('Could not fetch data');
          }
          return res.json();
      }).then((data) => {
          setdata(data);
          setIsloading(false);
          setError(null);
      }).catch((err) => {
          if(err.name === 'AbortError'){
              console.log('fetch aborted')
          }else{
          setError(err.message);
          setIsloading(false);
          }
      })

      return () => abortCont.abort()
    }, [url]) // we put the url as a dependency so that when ever the url changes we would run the use effect function so as to render the new data 
    

    // returning values in this custom made hook
    return {
        data,
        isloading,
        error
    }
}

export default useFetch;