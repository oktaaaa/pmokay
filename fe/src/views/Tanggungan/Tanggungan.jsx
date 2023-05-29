import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

export default function Tanggungan() {
  const [tanggungans, setTanggungans] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getTanggungans();
  }, []);

  const getTanggungans = async () => {
    const response = await axios.get('http://localhost:3000/api/tanggungan');
    setTanggungans(response.data);
  };

  const deleteTanggungan = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/tanggungan/${id}`);
      getTanggungans();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Breadcrumb>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Tanggungan
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h2>Tanggungan</h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="justify-center">
                <div className="column col-md-4">
                  <input
                    type=""
                    className="form-control mb-3 border border-dark "
                    placeholder="Cari nama peserta/tanggungan"
                    onChange={(e) => setQuery(e.target.value)}
                  />

                  <Link to={`create`} className="btn btn-primary">
                    Tambah Tanggungan
                  </Link>
                </div>
                <table className="table is-striped table-bordered mt-5 border border-dark">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th>NIP</th>
                      <th>Nama Peserta Pensiun</th>
                      <th>NIK Tanggungan</th>
                      <th>Nama Tanggungan</th>
                      <th>Tanggal Lahir</th>
                      <th>Relasi</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tanggungans
                      .filter((tanggungan) => tanggungan.nama_peserta.toLowerCase().includes(query))
                      .map((tanggungan, index) => (
                        <tr key={tanggungan._id}>
                          <td>{index + 1}</td>
                          <td>{tanggungan.nipen}</td>
                          <td>{tanggungan.nama_peserta}</td>
                          <td>{tanggungan.nik_tanggungan}</td>
                          <td>{tanggungan.nama_tanggungan}</td>
                          <td>{tanggungan.tgl_lahir}</td>
                          <td>{tanggungan.relasi}</td>
                          <td>
                            <Link
                              className="btn btn-primary mx-1 fa-regular fa-pen-to-square"
                              to={`/tanggungan/update/${tanggungan._id}`}
                            ></Link>
                            <button
                              onClick={() => deleteTanggungan(tanggungan._id)}
                              className="btn btn-danger fa-solid fa-trash-can"
                            ></button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
