import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import SeoPage from './Components/Services/SeoPage/SeoPage';
import SmmPage from './Components/Services/SmmPage/SmmPage';
import ContentDevelopmentPage from './Components/Services/ContentDevelopmentPage/ContentDevelopmentPage';
import ContactUs from './Components/ContactUs/ContactUs';

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
        <Route path='/seopage' element={<SeoPage></SeoPage>} />
        <Route path='/smmpage' element={<SmmPage></SmmPage>} />
        <Route path='/contentpage' element={<ContentDevelopmentPage></ContentDevelopmentPage>} />
        <Route path='/contactus' element={<ContactUs></ContactUs>} />
      </Routes>
    </Layout>
    </BrowserRouter>


  );
}

export default App;
