import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (


<>
      <a href="#main-content" className="skip-to-content">
Aller directement au contenu principal
      </a>

      <Header />

        <main id="main-content">

<Outlet />

        </main>



   <Footer />   
</>

    );
};

export default Layout;