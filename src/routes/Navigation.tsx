import { Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate} from'react-router-dom'
import logo from '../logo.svg';

import { routes } from './routes';


const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
              <nav>
                  <img src={ logo }  />

                  <ul>
                    {
                      routes.map(({to, name}) => (
                        <li key={to}>
                          <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                      </li>
                      ))
                    }
                      
                      
                  </ul>
              </nav>
              <Routes>
                {
                  routes.map(({path, Component}) => (
                    <Route key={path}  path={path} element={<Component />}/> 
                  ))
                }
              
              
              <Route  path="/*" element={<Navigate to={routes[0].to} replace />}/>   
              </Routes>
            


              
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
