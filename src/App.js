import React from "react";
import Main from "./pages/Main";
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

export default App