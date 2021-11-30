
import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

let composeEnhancers = compose;
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer, composeEnhancers())
// export default store = createStore(
//     rootReducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
// )

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);