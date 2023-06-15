import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import moment from 'moment';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

// material-ui
import { useTheme } from '@mui/material/styles';
// import { Grid} from '@mui/material';

import {
  
  Grid,
  
  MenuItem,

  TextField,
  Typography
} from '@mui/material';
//project import


import LaporanTest from './chart/Laporantest';
// import RevenuChartCard from './RevenuChartCard';
// import RevenuChartCardData from './chart/revenu-chart';
import ReportCard from './ReportCard';

import { gridSpacing } from 'config.js';

// assets
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import MainCard from 'component/MainCard';

// custom style
// const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
//   padding: '25px 25px',
//   borderLeft: '1px solid' + theme.palette.background.default,
//   [theme.breakpoints.down('sm')]: {
//     borderLeft: 'none',
//     borderBottom: '1px solid' + theme.palette.background.default
//   },
//   [theme.breakpoints.down('md')]: {
//     borderBottom: '1px solid' + theme.palette.background.default
//   }
// }));

// ==============================|| DASHBOARD DEFAULT ||============================== //
// TAMBAH CATEGORIES!R!!!

const status = [
  {
    value: 'today',
    label: '2021'
  },
  {
    value: 'month',
    label: '2022'
  },
  {
    value: 'year',
    label: '2023'
  }
];
const Default = () => {
  const theme = useTheme();
  const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');
  const [pesertas, setPesertas] = useState([]);
  const [units, setUnit] = useState([]);
  // const [pesertaAktif, setPesertaAktif] = useState([]);
  // const [pesertaNonAktif, setPesertaNonAktif] = useState([]);
  // const [chartdata, setChartdata] = useState([])

  useEffect(() => {
    getPesertas();
    getUnits();
    
  }, []);

  const getPesertas = () => {
    let pensiunan = []
    axios.get(
      "http://localhost:3000/api/pesertapensiun"
    ).then(res =>{
      console.log(res.data)
      for(const p of res.data){
        pensiunan.push(p.unit_pln)
      }
    }).catch(err => {
      console.log(err)
    })
    setPesertas();
    // console.log(pensiunan)

    // setChartdata({
    //   labels: pensiunan,
    // datasets: [
    //   {
    //     label: "Peserta pensiun",
    //     data: pensiunan,
    //     backgroundColor: "#1AA7EC",
    //     borderColor: "black",
    //     borderWidth: 1,
    //   },
    // ],
    // })
    
  };

  const getUnits = async () => {
    const response = await axios.get("http://localhost:3000/api/unitpln");
    setUnit(response.data);
  };
  // const options = {};


 
  
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={pesertas}
              secondary="Peserta Pensiun"
              color={theme.palette.warning.main}
              iconPrimary={Diversity3Icon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={units.length}
              secondary="Unit PLN"
              color={theme.palette.success.main}
              iconPrimary={BusinessIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="7"
              secondary="Peserta Aktif"
              color={theme.palette.primary.main}
              iconPrimary={GroupsIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="0"
              secondary="Peserta Non-Aktif"
              color={theme.palette.error.main}
              iconPrimary={PersonOffIcon}
            />
          </Grid>
        </Grid>

        
              {/* peserta pensiun */}
              
          {/* <div className="row m-3">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="text-center">Peserta Pensiun</h4>
                <Bar data={chartdata} options={options}></Bar>
              </div>

              <div className="col-lg-6">
                <h4 className="text-center">Unit PLN</h4>
                <Bar data={chartdata} options={options}></Bar>
              </div>
            </div>

          </div> */}
      </Grid>


      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Peserta Pensiun</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
         
          <LaporanTest />
        </MainCard>
      </Grid>

      {/* pln */}
      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Peserta Per-Unit</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {/* {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
         
          <LaporanTest />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Peserta Pensiun Aktif</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
         
          <LaporanTest />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Peserta Pensiun Non-Aktif</Typography>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
         
          <LaporanTest />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Default;
