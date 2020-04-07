import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

const Root = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default Root;