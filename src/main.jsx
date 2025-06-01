import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import './index.css'
import Root from './Layouts/Root.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: []
    },
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
)
