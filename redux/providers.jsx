"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

const persistor = persistStore(store);

export function Providers({ children }) {
  const [isLoading  ,setIsLoading] = useState(false);
  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(true)
    }, 4000);
  } ,[])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={!isLoading && <div className="w-screen h-screen"><Loading /></div>}>
        {children}
      </PersistGate>
    </Provider>
  );
}
