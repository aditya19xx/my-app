import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';

function App() {
  // const router = createBrowserRouter([
  //   {path: '/', element: <Home></Home>},
  // {path: '/home', element: <Home></Home>},
  // {path: '/about', element: <About></About>},
  // {path: '/services', element: <Services></Services>},
  // {path: '/footer', element: <Footer></Footer>}
  // ])
  return (
    // <div className="App">
    // <RouterProvider router={router}></RouterProvider>
    // </div>

    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/services' element={<Services></Services>} />
      </Routes>
    </Layout>
    </BrowserRouter>


  );
}

export default App;
