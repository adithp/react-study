import React from 'react'
import Nav from '../includes/Nav'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom';
import View from './View';

export default function TravelApp() {
  return (
      <>
    <section className="wrapper">
      <Router>
          <Nav />
          <Routes>
             <Route path='/' element={<Home />} />
              <Route path='place/:id' element={<View />} />
          </Routes>
          
      </Router>
        
    </section>
   </>
  )
}
