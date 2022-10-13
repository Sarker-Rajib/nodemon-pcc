import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
   return (
      <div>
         <p>Phone hunter</p>
         <Outlet></Outlet>
      </div>
   );
};

export default Main;