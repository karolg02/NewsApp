import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {MainPage} from "./mainpage/MainPage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: '*',
                element: <MainPage/>
            }
        ]
    }
]

export const Routing = () =>{
    return useRoutes(routes);
}