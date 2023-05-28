import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import PesertaPensiun from 'views/PesertaPensiun/PesertaPensiun';
import UnitPln from 'views/UnitPln/UnitPln';
import CreateUnitPln from 'views/UnitPln/CreateUnitPln';
import Tanggungan from 'views/Tanggungan/Tanggungan';
// import FirstPageIkpln from 'views/FirstPageIkpln/FirstPageIkpln';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
// const PesertaPensiun = Loadable(lazy(() => import('../views/PesertaPensiun')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <DashboardDefault/>},
    { path: '/dashboard/default', element: <DashboardDefault/>},
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> },
    // pesertapensiun
    {path: '/pesertapensiun', element: <PesertaPensiun/>},

    // unitpln
    { path: '/unitpln', element: <UnitPln/>},
    {path: '/unitpln/create', element: <CreateUnitPln/>},

    // tanggungan
    {path: '/tanggungan', element: <Tanggungan/>}
  ]
};

export default MainRoutes;
