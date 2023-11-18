import React from 'react';
import ProfilePage from './Pages/Profile';
import RootLayout from './Functions/RootLayout';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import { HomePage } from './Pages/Home';
import ProgramPage from './Pages/Program';
import { OrganizatorsPage } from './Pages/Organizators';
import { ConditionsPage } from './Pages/Conditions';
import { PrizesPage } from './Pages/Prizes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/IU-COMP", element: <HomePage /> },
      { path: "/IU-COMP/Info", element: <ProfilePage /> },
      { path: "/IU-COMP/Program", element: <ProgramPage /> },
      { path: "/IU-COMP/Organizators", element: <OrganizatorsPage /> },
      { path: "/IU-COMP/Conditions", element: <ConditionsPage /> },
      { path: "/IU-COMP/Prizes", element: <PrizesPage /> },
    ],
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
