import { useCallback, useState } from "react";
import axios from "axios";

export const useLoadContent = () => {
  
  const [content, setContent] = useState({});
  const [error, setError] = useState()
  const [counter, setCounter] = useState(1)
  const getContent = useCallback(async (filter = null, url = 'https://rickandmortyapi.com/api/character/?page=1') => {
    /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
   let filterOptions;
      if (filter !== null) {
        filterOptions = `&gender=${filter.gender}&status=${filter.status}&name=${filter.query}`;
      } else {
        filterOptions = '';
      }
      let err;
       const response = await axios.get(`${url}${filterOptions}`)
      .catch (error => {
        err = error.message
      });
        setContentPage(response, err) 
  }, []); 

  function setContentPage(response, error) { 
    if (error) {
      setError(error)
      return
    }
    const data = response.data
    const countOfElements = data.info.count;
    const pages = Math.ceil(countOfElements / 10);            
    const resultArray = data.results;
    const firstArrayImg = [];
    for (let i = 0; i <= 9; i++) {
      firstArrayImg.push(resultArray[i]);
    }      
    const secondArrayImg = [];
    for (let i = 10; i <= 19; i++) {
      secondArrayImg.push(resultArray[i]);
    }
    let result = {
      firstPageImgList: firstArrayImg,
      secondPageImgList: secondArrayImg,
      numberOfPages: pages,
      next: data.info.next,
      page: 1,
      currentImgList: firstArrayImg,
    }
    setContent(result);
  }  

  // TODO: Put fetchMore method here
  const fetchMore = useCallback( () => { 
    if ( counter % 2 !== 0 ) {
      setContent(() => ({
        ...content,
        currentImgList: content.secondPageImgList,
      }))      
    }
    else if (counter % 2 === 0) {
      getContent(null, content.next)
    }      
    setCounter(counter + 1)
  }, [content, getContent, counter]) 

  return [content, error, counter, getContent, fetchMore];
};
