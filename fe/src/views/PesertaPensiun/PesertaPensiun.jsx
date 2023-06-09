import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import moment from 'moment';
import Swal from 'sweetalert2';
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

  // to search for data
  const filteredPeserta = pesertas.filter((peserta) => {
    return peserta.nama_peserta.toLowerCase().includes(query);
  });

  const deletePeserta = async (id) => {
    Swal.fire({
      title: 'Apa anda yakin ingin menghapus data?',
      text: 'Data tidak bisa kembali',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/api/pesertapensiun/${id}`);
        Swal.fire('Deleted!', 'Data telah terhapus.', 'success');
        setTimeout(() => {
          getUnits();
        });
      }
    });
  };

  return (
    <>
      <Breadcrumb>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Peserta Pensiun
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h4>Peserta Pensiun</h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="row flex-nowrap">
                <input
                  type=""
                  className="form-control mb-3 border border-dark"
                  placeholder="Cari nama peserta"
                  // value={kode_unit}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="row col-sm-3">
                <Link to={`create`} className="btn btn-primary ">
                  + Tambah Peserta Pensiun
                </Link>
              </div>
              <table className="table is-striped border border-dark table-bordered table-hover mt-3">
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

                {filteredPeserta?.length > 0 ? (
                  <tbody>
                    {pesertas.map((peserta, index) => (
                      <tr key={peserta._id}>
                        <td>{index + 1}</td>
                        <td>{moment(peserta.tgl_pensiun).format('MMMM Do YYYY')}</td>
                        <td>{peserta.nipen}</td>
                        <td>{peserta.nama_peserta}</td>
                        <td>{moment(peserta.tgl_lahir).format('MMMM Do YYYY')}</td>
                        <td>{peserta.alamat}</td>
                        <td>{peserta.nohp}</td>
                        <td>{peserta.email}</td>
                        <td>{peserta.nama_bank}</td>
                        <td>{peserta.no_rek}</td>
                        <td>{peserta.besar_mp}</td>
                        <td>{peserta.unit_pln}</td>
                        <td>
                          <Link
                            className="btn btn-primary fa-regular fa-pen-to-square mb-1"
                            to={`/pesertapensiun/update/${peserta._id}`}
                          ></Link>
                          <button onClick={() => deletePeserta(peserta._id)} className="btn btn-danger fa-solid fa-trash-can"></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <div className="text-center"> Data tidak ditemukan </div>
                )}
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
