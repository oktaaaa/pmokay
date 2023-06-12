import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import CreateRegistUlang from 'views/RegistrasiUlang/CreateRegistUlang';


const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
// const PesertaPensiun = Loadable(lazy(() => import('../views/PesertaPensiun')));

// ==============================|| MAIN ROUTES ||============================== //

const UserRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <DashboardDefault/>},
    { path: '/dashboard/default', element: <DashboardDefault/>},

    
    // registrasi ulang
    { path: '/registrasiulang', element: <RegistrasiUlang/>},
    { path: '/registrasiulang/create', element: <CreateRegistUlang/>, isMenu: true, isPrivate: true},

    
  ]
};

export default UserRoutes;
