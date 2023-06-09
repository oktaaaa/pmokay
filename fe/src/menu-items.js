// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import Groups2Icon from '@mui/icons-material/Groups2';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  BusinessRoundedIcon: BusinessRoundedIcon,
  Groups2Icon: Groups2Icon,
  FolderSharedIcon: FolderSharedIcon,
  FolderCopyIcon: FolderCopyIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      caption: 'Beranda',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'beranda',
          title: 'Beranda',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard/default'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        // {
        //   id: 'sample-page',
        //   title: 'Sample Page',
        //   type: 'item',
        //   url: '/sample-page',
        //   icon: icons['ChromeReaderModeOutlinedIcon']
        // },
        {
          id: 'pesertaPensiun',
          title: 'Peserta Pensiun',
          type: 'item',
          url: '/pesertapensiun',
          icon: icons['Groups2Icon']
        },
        {
          id: 'unitPln',
          title: 'Unit PLN',
          type: 'item',
          url: '/unitpln',
          icon: icons['BusinessRoundedIcon']
        },
        {
          id: 'tanggungan',
          title: 'Tanggungan',
          type: 'item',
          url: '/tanggungan',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'registrasiUlang',
          title: 'Registrasi Ulang',
          type: 'item',
          url: '/registrasiulang',
          icon: icons['FolderSharedIcon']
        },
        {
          id: 'laporan',
          title: 'Laporan',
          type: 'collapse',
          icon: icons['FolderCopyIcon'],
          children: [
            {
              id: 'laporanPesertaPensiun',
              title: 'Laporan Peserta Pensiun',
              type: 'item',
              url: '/laporanpesertapensiun',
             
            },
            {
              id: 'laporanPesertaAktif',
              title: 'Laporan Peserta Pensiun Aktif',
              type: 'item',
              url: '/laporanpesertaaktif',
              
            },
            {
              id: 'laporanPesertaNonAktif',
              title: 'Laporan Peserta Pensiun Non-Aktif',
              type: 'item',
              url: '/laporanpesertanonaktif',
         
            },
            {
              id: 'laporanPesertaPerUnit',
              title: 'Laporan Peserta Per-Unit',
              type: 'item',
              url: '/laporanunit',
          
            }
          ]
        },
        // {
        //   id: 'auth',
        //   title: 'Authentication',
        //   type: 'collapse',
        //   icon: icons['SecurityOutlinedIcon'],
        //   children: [
        //     {
        //       id: 'login-1',
        //       title: 'Login',
        //       type: 'item',
        //       url: '/application/login',
        //       target: true
        //     },
        //     {
        //       id: 'register',
        //       title: 'Register',
        //       type: 'item',
        //       url: '/application/register',
        //       target: true
        //     }
        //   ]
        // }
      ]
    },
  ]
};
