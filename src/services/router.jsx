import UsersList from "../pages/usersList/usersList";
import React from "react"
import {createHashRouter, RouterProvider} from "react-router-dom";
import {PostPage} from "../pages/postPage/postPage";


export const router = createHashRouter([
    {
        path: "/",
        element: <UsersList/>
    },
    {
        path: "/:postId",
        element: <PostPage/>,
    }

])

export const Router = () => {
    return <RouterProvider router={router}/>
}