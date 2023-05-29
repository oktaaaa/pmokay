import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

const UpdateTanggungan = () => {
  const { id } = useParams();
  const [nipen, setNip] = useState('');
  const [nama_peserta, setNamaPeserta] = useState('');

  const [nik_tanggungan, setNikTanggungan] = useState('');
  const [tgl_lahir, setTglLahirTanggungan] = useState('');
  const [nama_tanggungan, setNamaTanggungan] = useState('');
  const [relasi, setRelations] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    getTanggunganById();
  }, []);

  const getTanggunganById = async () => {
    const response = await axios.get(`http://localhost:3000/api/tanggungan/${id}`);
    setNip(response.data.nipen);
    setNamaPeserta(response.data.nama_peserta);
    setNikTanggungan(response.data.nik_tanggungan);
    setTglLahirTanggungan(response.data.tgl_lahir);
    setNamaTanggungan(response.data.nama_tanggungan);
    setRelations(response.data.relasi);
  };

  const keyEnterHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(nipen);
      // console.log(getPesertaByNip);
      getPesertaByNip();
    }
  };

  const handleRelations = (e) => {
    setRelations(e.target.value);
  };
  const options = [
    { value: '', label: 'Pilih relasi dengan peserta pensiun' },
    { value: 'Suami', label: 'Suami' },
    { value: 'Istri', label: 'Istri' },
    { value: 'Anak', label: 'Anak' }
  ];
  //   update
  const updateTanggungan = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/tanggungan/update/${id}`, {
        nipen,
        nama_peserta,
        nik_tanggungan,
        tgl_lahir,
        nama_tanggungan,
        relasi
      });
      navigate('/tanggungan');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Breadcrumb title="Tanggungan">
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
            <Divider />
            <CardContent>
              <Breadcrumb title="Tambah Unit PLN"></Breadcrumb>
              <Grid container spacing={gridSpacing}>
                <Grid item>
                  <Card>
                    <Divider />
                    <CardContent>
                      <form onSubmit={updateTanggungan}>
                        <h4 className="mb-2">Cari NIP/Nama Pegawai</h4>

                        <div className="row">
                          <div className="form-group col-lg-6 mb-2">
                            <label htmlFor="inputNIP">
                              NIP
                              {/* <p>Nip adalah {nip}</p> */}
                              <input
                                type="text"
                                className="form-control"
                                id="nip"
                                value={nipen}
                                onChange={(e) => setNip(e.target.value)}
                                onKeyDown={keyEnterHandler}
                                placeholder="No Induk Pensiun"
                              />
                            </label>
                          </div>

                          <div className="form-group col-lg-6 mb-2">
                            <label htmlFor="inputPassword4">
                              Nama Pegawai
                              <input
                                type="text"
                                className="form-control"
                                id="namaPegawai"
                                value={nama_peserta}
                                onChange={(e) => setNamaPeserta(e.target.value)}
                              />
                            </label>
                          </div>
                        </div>

                        <hr />

                        <h4>Input Tanggungan</h4>
                        <div className="form-row">
                          <div className="form-group col-lg-6 mb-2">
                            <label htmlFor="Nik">
                              NIK
                              <input
                                type="text"
                                className="form-control"
                                id="nik"
                                value={nik_tanggungan}
                                onChange={(e) => setNikTanggungan(e.target.value)}
                                placeholder="No Induk Tanggungan"
                              />
                            </label>
                          </div>
                          <div className="form-group col-lg-6 mb-2">
                            <label htmlFor="tgllahir">
                              Tanggal Lahir
                              <input
                                type="date"
                                className="form-control"
                                id="tglLahir"
                                value={tgl_lahir}
                                onChange={(e) => setTglLahirTanggungan(e.target.value)}
                                placeholder="Tanggal Lahir"
                              />
                            </label>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-lg-6 mb-2">
                            <label>
                              Nama Lengkap
                              <input
                                type="text"
                                className="form-control"
                                id="namaLengkap"
                                value={nama_tanggungan}
                                onChange={(e) => setNamaTanggungan(e.target.value)}
                              />
                            </label>
                          </div>
                          <div className="form-group col-lg-6 mb-2">
                            <label htmlFor="relasi">Relasi</label>

                            <select value={relasi} onChange={handleRelations} className="form-select">
                              {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="field">
                          <button type="submit" className="btn btn-primary fw-semibold mt-3">
                            Simpan
                          </button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateTanggungan;
