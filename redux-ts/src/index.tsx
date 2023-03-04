import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import RepositoriesList from "./components/RepositoriesList";
import {store} from "./state";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search for Packages</h1>
                <RepositoriesList />
            </div>
        </Provider>
    );
};

root.render(<App />);