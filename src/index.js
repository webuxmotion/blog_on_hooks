import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';
import TopBar from 'components/topBar';
import { CurrentUserProvider } from 'contexts/currentUser';

const App = () => {
    return (
        <CurrentUserProvider>
            <BrowserRouter>
                <TopBar/>
                <Routes/>
            </BrowserRouter>
        </CurrentUserProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
