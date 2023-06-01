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
import UpdateTanggungan from 'views/Tanggungan/UpdateTanggungan';
import RegistrasiUlang from 'views/RegistrasiUlang/RegistrasiUlang';
import CreateRegistUlang from 'views/RegistrasiUlang/CreateRegistUlang';
import CreateTanggungan from 'views/Tanggungan/CreateTanggungan';
import LaporanPesertaAktif from 'views/Laporan/LaporanPesertaAktif';
import LaporanPesertaPensiun from 'views/Laporan/LaporanPesertaPensiun';
import LaporanPesertaNonAktif from 'views/Laporan/LaporanPesertaNonAktif';
import LaporanUnit from 'views/Laporan/LaporanUnit';


const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
// const PesertaPensiun = Loadable(lazy(() => import('../views/PesertaPensiun')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <DashboardDefault/>, isMenu: true, isPrivate: false},
    { path: '/dashboard/default', element: <DashboardDefault/>, isMenu: true, isPrivate: false},
    { path: '/sample-page', element: <SamplePage /> },

    // auth
    // pesertapensiun
    {path: '/pesertapensiun', element: <PesertaPensiun/>, isMenu: true, isPrivate: true},
    { path: '/pesertapensiun/create', element: <CreatePesertaPensiun/> , isMenu: true, isPrivate: true},
    { path: '/pesertapensiun/update/:id', element: <UpdatePesertaPensiun/>, isMenu: true, isPrivate: true},

    // unitpln
    { path: '/unitpln', element: <UnitPln/>, isMenu: true, isPrivate: true},
    {path: '/unitpln/create', element: <CreateUnitPln/>, isMenu: true, isPrivate: true},
    { path: '/unitpln/update/:id', element: <UpdateUnitPln/>, isMenu: true, isPrivate: true},

    // tanggungan
    {path: '/tanggungan', element: <Tanggungan/>, isMenu: true, isPrivate: true},
    { path: '/tanggungan/create', element: <CreateTanggungan/>, isMenu: true, isPrivate: true},
    { path: '/tanggungan/update/:id', element: <UpdateTanggungan/>, isMenu: true, isPrivate: true},

    // registrasi ulang
    { path: '/registrasiulang', element: <RegistrasiUlang/>},
    { path: '/registrasiulang/create', element: <CreateRegistUlang/>, isMenu: true, isPrivate: true},

    // laporan
    { path: '/laporanpesertaaktif', element: <LaporanPesertaAktif/>, isMenu: true, isPrivate: true},
    { path: '/laporanpesertanonaktif', element: <LaporanPesertaNonAktif/>, isMenu: true, isPrivate: true},
    { path: '/laporanpesertapensiun', element: <LaporanPesertaPensiun/>, isMenu: true, isPrivate: true},
    { path: '/laporanunit', element: <LaporanUnit/>},
  ]
};

export default MainRoutes;
