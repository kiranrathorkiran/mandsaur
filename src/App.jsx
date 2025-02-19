
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Home,Places,Link,Contact,News} from "./components/index"
import Navbar from "./Navbar"




function App()
{
   


   // count=1;
    return(
        <Router>
              <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/places" element={<Places/>}></Route>
                <Route path="/link" element={<Link/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/news" element={<News/>}></Route>
            </Routes>
        </Router>
      
    )
}
export default App;