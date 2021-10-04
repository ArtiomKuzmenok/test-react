import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [ content, error, counter, getContent, fetchMore] = useLoadContent();
  const [filter, setFilter] = useState({gender: '', status: '', query: '',})
 
  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} onSearch={getContent}/>
      {error ?
        <h1>Произошла ошибка ${error}</h1>
        : <ContentList content={content.currentImgList} counter={counter} numberOfPages={content.numberOfPages} fetchMore={fetchMore}/>
      }      
      
      
    </div>
  );
};

export default App;
