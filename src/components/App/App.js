import './App.css';
import Form from "../Form/Form.js";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={["/signup", "/signin"]} component={Form}/>
        </Switch>
    </div>
  );
}

export default App;
