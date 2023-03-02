import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            <GuestList />
            <hr/>
            <UserSearch />
        </div>
    );
};

root.render(<App />);