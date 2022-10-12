
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Question from './Components/Question/Question';

import YourPerformanceStat from './Components/YourPerformanceStat/YourPerformanceStat';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>, children: [
      {
        path: '/',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>
      },

      {
        path: '/yourPerformance',
        element: <YourPerformanceStat></YourPerformanceStat>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/home/:homeId',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
        },
        element: <Question></Question>
      }

    ]
  },

  {
    path: '*',
    element: <div><img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp" alt="" /></div>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
