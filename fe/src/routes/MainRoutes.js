import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import PesertaPensiun from 'views/PesertaPensiun/PesertaPensiun';
import UnitPln from 'views/UnitPln/UnitPln';
import CreateUnitPln from 'views/UnitPln/CreateUnitPln';
import Tanggungan from 'views/Tanggungan/Tanggungan';
import CreatePesertaPensiun from 'views/PesertaPensiun/CreatePesertaPensiun';
import UpdatePesertaPensiun from 'views/PesertaPensiun/UpdatePesertaPensiun';
import UpdateUnitPln from 'views/UnitPln/UpdateUnitPln';
// import FirstPageIkpln from 'views/FirstPageIkpln/FirstPageIkpln';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
// const PesertaPensiun = Loadable(lazy(() => import('../views/PesertaPensiun')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <DashboardDefault/>},
    { path: '/dashboard/default', element: <DashboardDefault/>},
    { path: '/sample-page', element: <SamplePage /> },

    // pesertapensiun
    {path: '/pesertapensiun', element: <PesertaPensiun/>},
    { path: '/pesertapensiun/create', element: <CreatePesertaPensiun/>},
    { path: '/pesertapensiun/update/:id', element: <UpdatePesertaPensiun/>},
    // unitpln
    { path: '/unitpln', element: <UnitPln/>},
    {path: '/unitpln/create', element: <CreateUnitPln/>},
    { path: '/unitpln/update/:id', element: <UpdateUnitPln/>},

    // tanggungan
    {path: '/tanggungan', element: <Tanggungan/>}
  ]
};

export default MainRoutes;
