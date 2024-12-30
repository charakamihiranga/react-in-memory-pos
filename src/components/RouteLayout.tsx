import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router-dom";

export function RouteLayout() {
    return (
        <>
        <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}