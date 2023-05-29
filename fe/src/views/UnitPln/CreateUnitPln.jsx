import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

export default function CreateUnitPln() {
  const [kode_unit, setKodeUnit] = useState('');
  const [nama_unit, setNamaUnit] = useState('');
  const navigate = useNavigate();

  const createUnit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/unitpln/create', {
        kode_unit,
        nama_unit
      });
      navigate('/unitpln');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Breadcrumb title="Unit PLN">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Unit PLN
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h5>Tambah Unit PLN</h5>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="form-row">
                <div className="form-group col-lg-6 mb-2">
                  <form onSubmit={createUnit}>
                    <label className="form-label fw-semibold">
                      Kode Unit
                      <input
                        type="text"
                        className="form-control border border-dark"
                        value={kode_unit}
                        onChange={(e) => setKodeUnit(e.target.value)}
                      />
                    </label>
                    <label className="form-label fw-semibold">
                      Nama Unit
                      <input
                        type="text"
                        className="form-control border border-dark"
                        value={nama_unit}
                        onChange={(e) => setNamaUnit(e.target.value)}
                      />
                    </label>
                    <div className="field">
                      <button type="submit" className="btn btn-primary fw-semibold mt-3">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
