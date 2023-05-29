import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
const LaporanPesertaPensiun = () => {
  return (
    <>
      <Breadcrumb>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Laporan
        </Typography>
      </Breadcrumb>

      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h4> Laporan Peserta Pensiun</h4>
                </Typography>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LaporanPesertaPensiun;
