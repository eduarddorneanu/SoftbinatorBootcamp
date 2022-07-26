import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {

    return <div>
        <nav  style={{
            padding: 5,
            background: "gray"
         }}>
            <Link><button>Press</button></Link>
        </nav>

        {children}

        <footer  
        style={{
            padding: 5,
            background: "gray"
        }}>
            <button>Facebook</button>
        </footer>
    </div>
};

export default Layout;