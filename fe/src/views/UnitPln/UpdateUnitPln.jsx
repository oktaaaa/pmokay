import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

export default function UpdateUnitPln() {
  const { id } = useParams();
  const [kode_unit, setKodeUnit] = useState('');
  const [nama_unit, setNamaUnit] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    getUnitsById();
  }, []);

  const getUnitsById = async () => {
    const response = await axios.get(`http://localhost:3000/api/unitpln/${id}`);
    setKodeUnit(response.data.kode_unit);
    setNamaUnit(response.data.nama_unit);
  };

  // edit
  const updateUnit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/unitpln/update/${id}`, {
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
        <Grid item lg={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h5>Ubah Unit PLN</h5>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="form-row">
                <div className="form-group mb-2">
                  <form onSubmit={updateUnit}>
                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="kodeUnit" className="form-label fw-semibold">
                          Kode Unit<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={kode_unit}
                          onChange={(e) => setKodeUnit(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="namaUnit" className="form-label fw-semibold">
                        Nama Unit<span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control border border-dark"
                        value={nama_unit}
                        onChange={(e) => setNamaUnit(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <button type="submit" className="btn btn-primary fw-semibold mt-3">
                        Ubah
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
