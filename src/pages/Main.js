import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./SignIn";
import Homepage from "./Homepage";
import ViewAll from "./ViewAll";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import OrderPage from "./OrderPage";
import PaymentPage from "./PaymentPage";
import ProfilePage from "./ProfilePage";
import OrderHistory from "./OrderHistory";
import TicketResult from "./TicketResult";
import TicketUsed from "./TicketUsed";
import TicketExpired from "./TicketExpired";
import ManageMovie from "./ManageMovie";
import Dashboard from "./Dashboard";
import ManageSchedule from "./ManageSchedule";
import TesPage from "./TesPage";
import Home from "./Home";

const Main = ()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Homepage/>} />
      <Route path="/viewall" element={<ViewAll/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/orderpage" element={<OrderPage/>} />
      <Route path="/paymentpage" element={<PaymentPage/>} />
      <Route path="/profilepage" element={<ProfilePage/>} />
      <Route path="/orderhistory" element={<OrderHistory/>} />
      <Route path="/ticketresult" element={<TicketResult/>} />
      <Route path="/ticketused" element={<TicketUsed/>} />
      <Route path="/ticketexpired" element={<TicketExpired/>} />
      <Route path="/managemovie" element={<ManageMovie/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/manageschedule" element={<ManageSchedule/>} />
      <Route path="/tespage" element={<TesPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Main;