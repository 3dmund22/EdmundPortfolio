import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';

const Layout = () => {
   return (
      <div className='App'>
         <Sidebar />
         <div className='page'>
            <span className='tags top-tags'>&alt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'></span>&alt;/body&gt;
            <br />

            <span className='bottom-tag-html'>&alt;/html&gt;</span>
         </div>
      </div>
   )

}

export default Layout;