import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Edit from '../pages/Edit'

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NewBlog from '../pages/NewBlog';
import Details from '../pages/Details';

const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/new-blog' element={<NewBlog/>} />
                <Route path="/detail/:contentId" element={<Details/>}/>
                <Route path="/edit/:contentId" element={<Edit/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter