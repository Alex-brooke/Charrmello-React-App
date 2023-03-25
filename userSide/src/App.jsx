import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Listen from "./pages/listen/Listen";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/cinematic">
              <Home type="cinematic" />
            </Route>
            <Route path="/audio-dramas">
              <Home type="series" />
            </Route>
            <Route path="/listen">
              <Listen />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;