import React from 'react';
import { Card, CardHeader, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
const LaporanPesertaNonAktif = () => {
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
                  <h4>Laporan Peserta Pensiun Non-Aktif</h4>
                </Typography>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LaporanPesertaNonAktif;
