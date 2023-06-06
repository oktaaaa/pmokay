import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Bar } from "react-chartjs-2";
import moment from 'moment';
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
import { Grid} from '@mui/material';

//project import
// import SalesLineCard from './SalesLineCard';
// import SalesLineCardData from './chart/sale-chart-1';


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

const Default = () => {
  const theme = useTheme();

  const [pesertas, setPesertas] = useState([]);
  const [units, setUnit] = useState([]);
  // const [pesertaAktif, setPesertaAktif] = useState([]);
  // const [pesertaNonAktif, setPesertaNonAktif] = useState([]);
  
  useEffect(() => {
    getPesertas();
    getUnits();
  }, []);

  const getPesertas = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/pesertapensiun"
    );
    setPesertas(response.data);
  };

  const getUnits = async () => {
    const response = await axios.get("http://localhost:3000/api/unitpln");
    setUnit(response.data);
  };
  const options = {};

  const pesertaPensiunData = {
    labels: pesertas.map((peserta) => moment(peserta.tgl_pensiun).format('MMMM YYYY')),
    datasets: [
      {
        label: "Peserta pensiun",
        data: [pesertas.map((peserta) => peserta.nipen).length],
        backgroundColor: "#1AA7EC",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const unitPlnData = {
    labels: units.map((unit) => unit.nama_unit),
    datasets: [
      {
        label: "Unit PLN",
        data: [units.map((unit) => unit.nama_unit).length],
        backgroundColor: "#1AA7EC",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    getUnits();
    getPesertas();
  }, []);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={pesertas.length}
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
              
          <div className="row m-3">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="text-center">Peserta Pensiun</h4>
                <Bar data={pesertaPensiunData} options={options}></Bar>
              </div>

              <div className="col-lg-6">
                <h4 className="text-center">Unit PLN</h4>
                <Bar data={unitPlnData} options={options}></Bar>
              </div>
            </div>

          </div>
      </Grid>


      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <SalesLineCard
                      chartData={SalesLineCardData}
                      title="Sales Per Day"
                      percentage="3%"
                      icon={<TrendingDownIcon />}
                      footerData={[
                        {
                          value: '$4230',
                          label: 'Total Revenue'
                        },
                        {
                          value: '321',
                          label: 'Today Sales'
                        }
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ display: { md: 'block', sm: 'none' } }}>
                    <Card>
                      <CardContent sx={{ p: '0 !important' }}>
                        <Grid container alignItems="center" spacing={0}>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  REALTY
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="right">
                                  -0.99
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  INFRA
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                                  -7.66
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RevenuChartCard chartData={RevenuChartCardData} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Traffic Sources
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Direct</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          80%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="direct" value={80} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          50%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Social" value={50} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Referral</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          20%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Referral" value={20} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Bounce</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          60%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Bounce" value={60} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Internet</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Default;
