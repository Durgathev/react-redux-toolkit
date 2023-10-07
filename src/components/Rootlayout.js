import { Outlet } from "react-router-dom";
import Navigation from "./Elements/Navigation";
import { Provider } from "react-redux";
import store from "../store/store";

const Rootlayout = ()=>{
    return <>
    <Provider store={store}>
    <Navigation />
    <main>
        <Outlet />
    </main>
    </Provider>
    </>
}

export default Rootlayout;