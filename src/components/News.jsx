import React,{useEffect,useState} from"react";

function News() {
    const [news,setNews]=useState([]);
   let APIDATA=null;
    if(APIDATA==null){ 
     try {
      APIDATA =fetch("https://newsdata.io/api/1/news?apikey=pub_707160e9e96ffb3e0f706f2a61e424df7754c&q=Mandsaur");
    
     } catch (error) {
      return<><link to="/">k</link></>
   
      
     }   }
      
      
  // if(APIDATA==null){ 
  //    try {
  //     APIDATA= fetch("APIDATA.json")

  //    } catch (error) {
      
  //    }   }
         
    APIDATA.then((res)=>res.json())
          .then((dataa)=>setNews(dataa.results))
          .catch((error)=>console.error("error Feacching News",error));   
       
    return(<>
    <div>
      <h5 className="mt-20 text-2xl font-bold border-b animate-pulse border-black" >LATEST-NEWS</h5>
  <div className="flex flex-row   justify-center  m-auto  flex-wrap">
        {
          
        news.map((article, index) => (
         <>
         
          <div className="bg-slate-300 md:m-12 m-0 md:w-2/5 mb-6 w-10/12 border-b border-r shadow-black  border-black h-auto p-5 ">  <a href={article.l} target="_blank" rel="noopener noreferrer">
          <span  className="  m-6 w-1/3 text-red-600 font-bold h-auto p-5 ">NEWS:</span> <p className="font-bold border-b-2 border-black cursor-pointer hover:text-red-700 hover:border-red-500">* {article.title}</p>
              <br/>
            <p className=" font-serif text-xs border-b-2 "><span className="font-bold font-serif text-base border-b-2 border-black">description:</span>
            {article.description}</p> 
             <p className="font-bold font-serif text-xs ">image :
             <img src={article.image_url} alt="image not found"/></p> 
            
            <p className="text-xs text-end font-bold text-slate-950"><span className="font-bold font-serif text-base border-b-2  border-black"></span>date of publish :{article.pubDate} </p>
             
            </a></div></>
        ))
        }
   </div>
    </div></>)
  
    
}
export default News;