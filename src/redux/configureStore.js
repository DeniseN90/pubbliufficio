import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './enhancer/monitor-reducer'
import loggerMiddleware from './middleware/logger'
import pubbliufficioReducer from './pubbliufficio-store'

export default function configurePubbliufficioStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    
    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers);
    
    const store = createStore(pubbliufficioReducer, preloadedState, composedEnhancers)
    return store;
}