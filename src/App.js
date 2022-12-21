import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './components/keep';
 

// imported this from style.js 
import useStyles from "./style"
const App = () => {

  // using useStyles as hook 

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Navbar />
        <main>
        <div/>

        

        <Routes>
        
        <Route path='/' element={<Movies/>}/>
        <Route path='/movieInformation/:id' element={<MovieInformation/>}/>
        <Route path='/actors/:id' element={<Actors/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
    
        </Routes>
        </main>

      </Router>

    </div>
  )
}
export default App