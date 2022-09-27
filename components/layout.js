// components/layout.js

import Footer from './Footer'
import Header from "./Header";

export default function layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}