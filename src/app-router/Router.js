import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NewBlog from '../pages/NewBlog';

const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/new-blog' element={<NewBlog/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter