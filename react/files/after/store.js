import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);
const getMiddleware = () => {
if (process.env.NODE_ENV === 'production') {
return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
} else {
return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
}
};
export const store = createStore(
reducer, composeWithDevTools(getMiddleware()));
