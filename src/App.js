import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";
import ViewAll from "./pages/ViewAll";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import OrderHistory from "./pages/OrderHistory";

const App = ()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/viewall" element={<ViewAll/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/orderpage" element={<OrderPage/>} />
      <Route path="/paymentpage" element={<PaymentPage/>} />
      <Route path="/profilepage" element={<ProfilePage/>} />
      <Route path="/orderhistory" element={<OrderHistory/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;