import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import Event from "./events/Event";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            {/*<GuestList />*/}
            {/*<hr/>*/}
            {/*<Event />*/}
            
            <UserSearch />
            
        </div>
    );
};

root.render(<App />);