import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
// import { log } from 'console';

const CreateRegistUlang = () => {
  const [nipen, setNipen] = useState('');
  const [nama_peserta, setNamaPeserta] = useState('');
  const [ktpWajah, setFotoKtpWajah] = useState();
  // const [ktp, setKtp] = useState('');
  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setFotoKtpWajah(e.target.files[0]);
  };

  const createRegistrasiUlang = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('nipen', nipen);
    formData.append('nama_peserta', nama_peserta);
    formData.append('ktpWajah', ktpWajah);

    try {
      await axios.post('http://localhost:3000/api/registrasiulang/create', formData);
      setNipen(nipen);
      setNamaPeserta(nama_peserta);
      setFotoKtpWajah(ktpWajah);
      navigate('/registrasiulang');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Breadcrumb title="Registrasi Ulang">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Registrasi Ulang
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h5>Registrasi Ulang</h5>
                </Typography>
              }
            />
            <Divider />
            <CardContent >
              <div className="form-row">
                <div className="form-group mb-2">
                  <form className="mx-5" onSubmit={createRegistrasiUlang}>
                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="nip" className="fw-semibold">
                          NIPEN
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nipen}
                          onChange={(e) => setNipen(e.target.value)}
                          placeholder="No Induk Pensiun"
                        />
                      </div>

                      <div className="form-group col-lg-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Nama Peserta Pensiun
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nama_peserta}
                          onChange={(e) => setNamaPeserta(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-lg-12 mb-2">
                        <label htmlFor="fotoWajahKtp" className="fw-semibold">
                          Upload Foto Wajah dan KTP
                        </label>
                        <input
                          accept=".jpeg, .png, .jpg"
                          type="file"
                          className="form-control border border-dark"
                          id="ktpWajah"
                          // value={ktpWajah}
                          onChange={onChangeFile}
                        />
                      </div>

                      {/* <div className="form-group col-md-12 mb-2">
                        <label htmlFor="fotoWajahKtp" className="fw-semibold">
                          Upload KTP
                        </label>
                        <input
                          type="file"
                          className="form-control border border-dark"
                          id="ktp"
                          value={ktp}
                          onChange={(e) => setKtp(e.target.value)}
                        />
                      </div> */}
                    </div>

                    <div className="">
                      <button type="submit" className="btn btn-primary my-3 form-label fw-semibold">
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
};

export default CreateRegistUlang;
