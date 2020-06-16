import { createStore } from "redux"
import rootReducer from "./reducers"

export default createStore(rootReducer) 

// const persistConfig = {
//     key: 'root',
//     storage: localStorage,
//     whitelist: [
//         "language",
//         "darkMode"
//     ]
// }

// // const persistedReducer = persistReducer(persistConfig, rootReducer)
// // const store = createStore(persistedReducer) 
// // export const persistor = persistStore(store as unknown as Store<RootState, AnyAction>)

// export default () => {
//     const persistedReducer = persistReducer(persistConfig, rootReducer)
//     const store = createStore(persistedReducer) 
//     const persistor = persistStore(store as unknown as Store<RootState, AnyAction>)

//     return {
//         store, persistor
//     }
// }