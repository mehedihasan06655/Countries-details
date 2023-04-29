import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import CountryFlag from './Component/Root/CountryFlag/CountryFlag';
import FlagsQuiz from './Component/FlagsQuiz/FlagsQuiz';
import Continents from './Component/Continents/Continents';
import Organization from './Component/Organization/Organization';
import USState from './Component/USState/USState';
import EmojiFlags from './Component/EmojiFlags/EmojiFlags';
import Download from './Component/Download/Download';
import About from './Component/About/About';
import CountryDetails from './Component/CountryDetails/CountryDetails';

const router = createBrowserRouter([
    {
      path:"/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <CountryFlag/>,
          loader: () => fetch('https://restcountries.com/v3.1/all')
        },
        {
          path: 'quiz',
          element:<FlagsQuiz/>,
        },
        {
          path: 'continents',
          element: <Continents/>,
        },
        {
          path: 'organization',
          element: <Organization/>,
        },
        {
          path: 'state',
          element: <USState/>,
        },
        {
          path: 'emojiFlags',
          element: <EmojiFlags/>,
        },
        {
          path: 'download',
          element: <Download/>,
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'country/:countryId',
          element:<CountryDetails/>,
          loader: ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.countryId}`)
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
