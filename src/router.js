import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './App';
import Terms from "./components/Term";


const appRouter = (<BrowserRouter>
    <Routes>
        <Route exact path='/' element={<App />}/>
        <Route exact path='/terms-conditions' element={<Terms />}/>
        <Route exact path='*' element={<App />}/>
    </Routes>
</BrowserRouter>)


export default appRouter;
