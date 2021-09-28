// Library
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import HomePageAdmin from "./pages/HomePageAdmin";
import DetailBook from "./pages/DetailBook";
import ReadBook from "./pages/ReadBook";
import Subscribe from "./pages/Subscribe";
import Profile from "./pages/Profile";
import ListTransaction from "./pages/ListTransaction";
import AddBook from "./pages/AddBook";
import ViewBookAdded from "./pages/ViewBookAdded";

// Components
import PrivateRoute from "./components/PrivateRoute";

// UserContext
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/home-page" component={HomePage} />
          <PrivateRoute exact path="/detail-book/:id" component={DetailBook} />
          <PrivateRoute exact path="/detail-book-added" component={ViewBookAdded} />
          <PrivateRoute exact path="/read-book" component={ReadBook} />
          <PrivateRoute exact path="/subscribe" component={Subscribe} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/list-transaction" component={ListTransaction} />
          <PrivateRoute exact path="/add-book" component={AddBook} />
          <PrivateRoute exact path="/home-page-admin" component={HomePageAdmin} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
