import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Searchbar from "./components/Searchbar";

function App() {
  const {isLoggedIn} = useAppContext();

  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>home page</p>
            </Layout>
          }
        />
        <Route path="/search" element={<>Search Page</>} />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Searchbar />
            </Layout>
          }
        />
        {isLoggedIn && (
          <>
            <Route path="/add-hotel" element={
              <Layout>
                <AddHotel />
              </Layout>
            }/>
            <Route path="/add-hotels" element={
              <Layout>
                <MyHotels />
              </Layout>
            }/>
            <Route path="/edit-hotels/:hotelId" element={
              <Layout>
                <EditHotel />
              </Layout>
            }/>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
