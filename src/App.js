
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import QuizTopics from './Components/QuizTopics/QuizTopics';
import YourPerformanceStat from './Components/YourPerformanceStat/YourPerformanceStat';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>, children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/quizTopics',
        element: <QuizTopics></QuizTopics>
      },
      {
        path: '/yourPerformance',
        element: <YourPerformanceStat></YourPerformanceStat>
      },

    ]
  },
  {
    path: '/blog',
    element: <Blog></Blog>
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
