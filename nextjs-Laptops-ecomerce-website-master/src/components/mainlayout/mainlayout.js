import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import NewsLetter from '../../components/NewsLetter.js/index.js';
import CartProvider from '../../components/context';
import GlobalStyle, { Container } from '../../globalStyles';
const Layout =({children})  => {
     return (
         <>
            <CartProvider>
                <GlobalStyle/>
                <Navbar />
                <main>
                    {children}
                </main>
            
            
                <NewsLetter/>
                <Footer/>
            
            </CartProvider>
        </>
     )

 }
 export default Layout;