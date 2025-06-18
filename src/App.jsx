import React from 'react';
import { Suspense } from 'react'; 
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Applayout';

const App = () => {
  return (
    <>
      <Suspense fallback={
        <div className='w-full h-screen flex items-center justify-center'>

        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App