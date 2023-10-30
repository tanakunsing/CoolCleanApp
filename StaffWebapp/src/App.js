import Account from "./Account";
import Home from "./Home";
import History from "./History";
import Login from "./Login";
import Purchase from "./Purchase"
import PurchaseForDone from "./PurchaseForDone";
import { BrowserRouter ,NavLink,Routes,Route } from 'react-router-dom';
import Profile from "./Profile";
import FormProduct from "./FormProduct";
import FormStaff from "./FormStaff";
function App() {
  return (

    <Routes>
      <Route exact path={"/"} element={<Login />} />
      <Route exact path={"/Home"} element={<Home />} />
      <Route exact path={"/Account"} element={<Account />} />
      <Route exact path={"/History"} element={<History />} />
      <Route exact path={"/Purchase"} element={<Purchase />} />
      <Route exact path={"/Profile"} element={<Profile />} />
      <Route exact path={"/FormProduct"} element={<FormProduct />} />
      <Route exact path={"/FormStaff"} element={<FormStaff />} />
      <Route exact path={"/PurchaseForDone"} element={<PurchaseForDone />} />
    </Routes>
  );
}

export default App;
