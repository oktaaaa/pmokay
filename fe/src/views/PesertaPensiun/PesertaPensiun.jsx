import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
export default function PesertaPensiun() {
  const [pesertas, setPesertas] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPesertas();
  }, []);

  const getPesertas = async () => {
    const response = await axios.get('http://localhost:3000/api/pesertapensiun');
    setPesertas(response.data);
  };

  const deletePeserta = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/pesertapensiun/${id}`);
      getPesertas();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Breadcrumb title="Peserta Pensiun">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Peserta Pensiun
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h2>Peserta Pensiun</h2>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="row flex-nowrap col-md-4">
                <input
                  type=""
                  className="form-control mb-3 border border-dark"
                  placeholder="Cari nama peserta"
                  // value={kode_unit}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="row col-md-2">
                <Link to={`create`} className="btn btn-primary ">
                  Tambah Peserta Pensiun
                </Link>
              </div>
              <table className="table is-striped table-bordered table-hover mt-3">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tgl Pensiun</th>
                    <th>NIPEN</th>
                    <th>Nama Peserta</th>
                    <th>Tgl Lahir</th>
                    <th>Alamat</th>
                    <th>No. HP</th>
                    <th>E-mail</th>
                    <th>Nama Bank</th>
                    <th>No Rekening</th>
                    <th>Besar MP</th>
                    <th>Unit PLN</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {pesertas
                    .filter((peserta) => peserta.nama_peserta.toLowerCase().includes(query))
                    .map((peserta, index) => (
                      <tr key={peserta._id}>
                        <td>{index + 1}</td>
                        <td>{peserta.tgl_pensiun}</td>
                        <td>{peserta.nipen}</td>
                        <td>{peserta.nama_peserta}</td>
                        <td>{peserta.tgl_lahir}</td>
                        <td>{peserta.alamat}</td>
                        <td>{peserta.nohp}</td>
                        <td>{peserta.email}</td>
                        <td>{peserta.nama_bank}</td>
                        <td>{peserta.no_rek}</td>
                        <td>{peserta.besar_mp}</td>
                        <td>{peserta.unit_pln}</td>
                        <td>
                          <Link
                            className="btn btn-primary fa-regular fa-pen-to-square mb-2"
                            to={`/pesertapensiun/update/${peserta._id}`}
                          ></Link>
                          <button onClick={() => deletePeserta(peserta._id)} className="btn btn-danger fa-solid fa-trash-can"></button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <div className="row flex-nowrap">
      
        <div className="column">
          <Link to={`create`} className="btn btn-primary">
            Tambah Baru
          </Link>
          <table className="table is-striped table-bordered table-hover mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Tgl Pensiun</th>
                <th>NIPEN</th>
                <th>Nama Peserta</th>
                <th>Tgl Lahir</th>
                <th>Alamat</th>
                <th>No. HP</th>
                <th>E-mail</th>
                <th>Nama Bank</th>
                <th>No Rekening</th>
                <th>Besar MP</th>
                <th>Unit PLN</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {pesertas
                .filter((peserta) => peserta.nama_peserta.toLowerCase().includes(query))
                .map((peserta, index) => (
                  <tr key={peserta._id}>
                    <td>{index + 1}</td>
                    <td>{peserta.tgl_pensiun}</td>
                    <td>{peserta.nipen}</td>
                    <td>{peserta.nama_peserta}</td>
                    <td>{peserta.tgl_lahir}</td>
                    <td>{peserta.alamat}</td>
                    <td>{peserta.nohp}</td>
                    <td>{peserta.email}</td>
                    <td>{peserta.nama_bank}</td>
                    <td>{peserta.no_rek}</td>
                    <td>{peserta.besar_mp}</td>
                    <td>{peserta.unit_pln}</td>
                    <td>
                      <Link className="btn btn-primary fa-regular fa-pen-to-square" to={`/pesertapensiun/update/${peserta._id}`}></Link>
                      <button onClick={() => deletePeserta(peserta._id)} className="btn btn-danger mx-2 fa-solid fa-trash-can"></button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
}
