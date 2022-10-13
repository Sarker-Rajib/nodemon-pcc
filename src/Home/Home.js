import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
   const phones = useLoaderData();
   return (
      <div>
         <p>This is home {phones.length}</p>
         <ul>
            {
               phones.map(ph => <li><Link to={`phones/${ph.id}`}>{ph.name}</Link></li>)
            }
         </ul>
      </div>
   );
};

export default Home;