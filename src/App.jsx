import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Join from "./pages/join/Join"
import Blog from './pages/blog/Blog'
import Feedback from './pages/feedback/Feedback'
import Features from './pages/features/Features'
import Courses from './pages/courses/Courses'
import ErrorPage from "./components/Errorpage"
import NotFound from './components/NotFound'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<ErrorPage/>}>
    <Route index element={<Home/>} errorElement={<ErrorPage/>} />
    <Route path="about" element={<About />} errorElement={<ErrorPage/>} />
    <Route path="courses" element={<Courses />} errorElement={<ErrorPage/>} />
    <Route path="features" element={<Features />} errorElement={<ErrorPage/>} />
    <Route path="feedback" element={<Feedback />} errorElement={<ErrorPage/>} />
    <Route path="blogs" element={<Blog />} errorElement={<ErrorPage/>} />
    <Route path="join" element={<Join />} errorElement={<ErrorPage/>} />

    <Route path="*" element={<NotFound />} errorElement={<ErrorPage/>} />
  </Route>
))

export default function App() {
  return <RouterProvider router={router} />
}