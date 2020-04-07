import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import createRootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const middleware = [logger, sagaMiddleware];

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(),
        preloadedState,
        compose(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(createRootSaga);

    return store;
}
