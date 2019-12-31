import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';
import TopBar from 'components/topBar';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <TopBar/>
                <Routes/>
            </BrowserRouter>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
