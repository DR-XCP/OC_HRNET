import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
   FLUSH,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   REHYDRATE,
   persistReducer,
   persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeeReducer from "./reducers/reducer";

const persistConfig = {
   key: "root", // Clé de base pour le stockage
   storage, // Définit le mécanisme de stockage
   whitelist: ["employees"],
};

const rootReducer = combineReducers({
   employees: employeeReducer,
});

// Crée un reducer persistant qui enveloppe rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure le store Redux avec le reducer persistant
export const store = configureStore({
   reducer: persistedReducer, // Utilise le reducer persistant comme reducer principal
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            // Configuration spéciale pour éviter des erreurs de serialisation avec certaines actions de redux-persist
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});
// Crée un persistor pour le store, nécessaire pour le rechargement persistant du state
export const persistor = persistStore(store);
