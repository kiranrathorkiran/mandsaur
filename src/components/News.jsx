import React,{useEffect,useState} from"react";
// import { data } from "react-router-dom";
 


function News() {
    const [news,setNews]=useState({});
    // setNews([])
    // //  console.log(data);
    //  console.log(news);
    
     
     console.log("data feactd.........");
    const APIRESPONSE=fetch("https://api.currentsapi.services/v1/search?keywords=Indore&apiKey=7QVa9OPH1Ya4GJI8M-vOgQZ9wHMbjQOKuQn5X2wcV9wjL-aC")
    
    APIRESPONSE.then((res)=>res.json())
          .then((dataa)=>setNews(dataa.news))
          .catch((error)=>console.error("error Feacching News",error));   
          
       console.log("all news=",news);
       console.log("APIRESPONSE",typeof APIRESPONSE);
         
    //  fetch("https://api.currentsapi.services/v1/latest-news?apiKey=7QVa9OPH1Ya4GJI8M-vOgQZ9wHMbjQOKuQn5X2wcV9wjL-aC")
    
      if(news=={})
      {
        console.log("data nhi aaya");
        
      }
      else{
        console.log("heloo word");
        
      }
  
   
    return(<>
    <div>
      <h5 className="mt-48" >Latest News</h5>
      <ul>
        {
            
        news.map((article, index) => (
         
          <li key={index}>{index}  = 
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))
        }
      </ul>
    </div></>)
    
}
export default News;