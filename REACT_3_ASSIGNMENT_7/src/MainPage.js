import React from 'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Headfn from './IPL_ASSIGNMENT/components/commonpages/header';
import NavbarFn from './IPL_ASSIGNMENT/components/commonpages/navbar';
import SidebarFn from './IPL_ASSIGNMENT/components/commonpages/sidebar';
import FooterFn from './IPL_ASSIGNMENT/components/commonpages/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import HomeFn from './IPL_ASSIGNMENT/components/pages/Home';
import AboutFn from './IPL_ASSIGNMENT/components/pages/About';
import ServiceFn from './IPL_ASSIGNMENT/components/pages/Services';
import IplFn from './IPL_ASSIGNMENT/components/pages/IplTable';

const MainFn =()=>{
    return (
        <>
        <div className='container'>

    <BrowserRouter>
           <Headfn/>
           <NavbarFn/>
            <div className='row'>

            <SidebarFn/>
                  
                 <div className='col-9 bg-info-subtle'>

                    <Routes>
                   
                        <Route path='/home' element ={<HomeFn/>}></Route>
                        <Route path='/about' element={<AboutFn/>}></Route>
                        <Route path='/service' element={<ServiceFn/>}></Route>
                        <Route path='/ipltable' element={<IplFn/>}></Route>

                    </Routes>
                       
                 </div>
               
            </div>

           <FooterFn/>
           </BrowserRouter>
        </div>
        </>
    )
}

export default MainFn;