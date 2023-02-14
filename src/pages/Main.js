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
import MovieDetails from "./MovieDetails";
import UpdatePassword from "./UpdatePassword";
import WithAuth from "../components/hoc/WithAuth";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />

        <Route path="/" element={
            <Homepage />
        } />

        {/* <Route path="/home" element={
          <WithAuth>
            <Home />
          </WithAuth>
        } /> */}
        <Route path="/viewall" element={
          <WithAuth>
            <ViewAll />
          </WithAuth>
        } />
        <Route path="/moviedetails" element={
          <WithAuth>
            <MovieDetails />
          </WithAuth>
        } />
        <Route path="/orderpage" element={
          <WithAuth>
            <OrderPage />
          </WithAuth>
        } />
        <Route path="/paymentpage" element={
          <WithAuth>
            <PaymentPage />
          </WithAuth>
        } />
        <Route path="/profilepage" element={
          <WithAuth>
            <ProfilePage />
          </WithAuth>
        } />
        <Route path="/orderhistory" element={
          <WithAuth>
            <OrderHistory />
          </WithAuth>
        } />
        <Route path="/ticketresult" element={
          <WithAuth>
            <TicketResult />
          </WithAuth>
        } />
        <Route path="/ticketused" element={
          <WithAuth>
            <TicketUsed />
          </WithAuth>
        } />
        <Route path="/ticketexpired" element={
          <WithAuth>
            <TicketExpired />
          </WithAuth>
        } />
        <Route path="/managemovie" element={
          <WithAuth>
            <ManageMovie />
          </WithAuth>
        } />
        <Route path="/dashboard" element={
          <WithAuth>
            <Dashboard />
          </WithAuth>
        } />
        <Route path="/manageschedule" element={
          <WithAuth>
            <ManageSchedule />
          </WithAuth>
        } />
        <Route path="/tespage" element={<TesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main;