import {BrowserRouter as Routes, Route, Link} from 'react-router-dom';
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Company from './components/Pages/Company'
import NewProject from './components/Pages/NewProject'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

import Container from './components/layout/Container';

export default function App() {
  return (
    <BrowserRouter>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/company">Company</Link>
          <Link to="/newproject">New Project</Link>
        </ul>

    <h1>Home</h1>

          <Routes>
            <Container customClass="min-height">
              <Route path= "/" element={<Home/>}/>
              <Route path= "/Company" element={<Company/>}/>
              <Route path= "/Contact" element={<Contact/>}/>
              <Route path= "/NewProject" element={<NewProject/>}/>
            </Container>  
          </Routes>

        <p>Footer</p>


      </BrowserRouter>
  );
}