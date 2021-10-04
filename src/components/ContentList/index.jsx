import "./index.css";
import FetchMoreButton from "../FetchMoreButton";

const ContentList = ({ content, counter, numberOfPages, fetchMore }) => {

  if (content === undefined) {
    return '';
  } else {
    return (
      <div>
          <h1>Simple content list</h1>
          <ul>      
          {content.map( (item) => {        
            if (item !== undefined) {
              return (
                <li className="list_element" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className='characterName'>Name: {item.name}</div>
                  <div className='characterStatus'>Status: {item.status}</div>
                  <div className='characterGender'>Gender: {item.gender}</div>
                </li>     
              )
            }
            else return null                  
          })}
          {console.info(`Available content: ${content}`)}
        </ul>
        {(counter < numberOfPages) ? <FetchMoreButton onClick={fetchMore} /> : '' }
      </div>
         
  );
  }  
};

export default ContentList;
