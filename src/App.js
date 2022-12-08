import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";
import ViewAll from "./pages/ViewAll";

const App = ()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/viewall" element={<ViewAll/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;