import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import "./App.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FetchRQ from './pages/FetchQuery'

//create a router
const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {path:'/', element:<Home/>},
      {path:'/about', element:<About/>},
      {path:'/contact', element:<FetchRQ/>}
    ]
  }
])


        
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    )
}

export default App