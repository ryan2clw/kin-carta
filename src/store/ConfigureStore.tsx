import { createStore, compose, applyMiddleware, combineReducers, Dispatch, Action, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { GlobalReducer } from './GlobalReducer';

export interface IConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>,
    navigation: any,
}

const reducers = {
    contacts: GlobalReducer
};
const rootReducer = combineReducers({
    ...reducers,
});

const configureStore = () => {
    
    const middleware = [
        thunk
    ];
    if (process.env.NODE_ENV === `development`) {
        const { logger } = require(`redux-logger`);
        console.log("logger", logger);
        middleware.push(logger);
      }

    return createStore(
        rootReducer,
        compose(applyMiddleware(...middleware)),
    );
 }
 export const store = configureStore();
 export type RootState = ReturnType<typeof rootReducer>

