//2. Create a App.jsx component. <App /> is the component task***.

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';

function App() {
    return (
        <div>
            <Header />
            <Notes />
            <Footer />
        </div>
    );
}

export default App;