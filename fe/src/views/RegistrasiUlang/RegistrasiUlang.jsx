import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
const RegistrasiUlang = () => {
  const [registrasis, setRegistrasis] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRegistrasi();
  }, []);

  const getRegistrasi = async () => {
    const response = await axios.get('http://localhost:3000/api/registrasiulang');
    setRegistrasis(response.data);
  };
  return (
    <>
      <Breadcrumb>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Registrasi Ulang
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h4> Registrasi Ulang </h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div>
                <input
                  type=""
                  className="form-control mb-3 border border-dark "
                  placeholder="Cari Unit PLN"
                  // value={kode_unit}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`create`} className="btn btn-primary">
                  + Tambah Registrasi Ulang
                </Link>
              </div>
              <table className="table is-striped table-bordered border-dark mt-3 ">
                <thead>
                  <tr className="text-center">
                    <th>No</th>
                    <th>NIPEN</th>
                    <th>Nama Peserta</th>
                    <th>Foto Wajah dan KTP</th>
                    <th>Foto KTP</th>
                  </tr>
                </thead>

                <tbody>
                  {registrasis
                    .filter((registrasi) => registrasi.nama_peserta.toLowerCase().includes(query))
                    .map((registrasi, index) => (
                      <tr key={registrasi._id}>
                        <td className="text-center justify-content-center">{index + 1}</td>
                        <td>{registrasi.nipen}</td>
                        <td>{registrasi.nama_peserta}</td>
                        <td>
                          <img className="img img-fluid" src={`http://localhost:3000/${registrasi.ktpWajah}`} alt="users" />
                        </td>
                        <td>{registrasi.ktp}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default RegistrasiUlang;
