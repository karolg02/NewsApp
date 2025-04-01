import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {MainPage} from "./mainpage/MainPage.tsx";
import {SecondPage} from "./secondpage/SecondPage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },{
                path: '/news',
                element: <SecondPage/>
            }
            ,
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