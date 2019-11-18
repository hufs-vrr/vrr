import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

import Client from './Apollo/Client'
import { ApolloProvider } from 'react-apollo-hooks'

ReactDOM.render(
    <ApolloProvider client={Client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
