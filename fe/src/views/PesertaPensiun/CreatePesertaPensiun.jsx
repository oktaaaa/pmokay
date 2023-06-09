import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Divider, Grid, Typography, CardHeader } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

function CreatePesertaPensiun() {
  const [tgl_pensiun, setTglPensiun] = useState('');
  const [nipen, setNipen] = useState('');
  const [nama_peserta, setNamaPeserta] = useState('');
  const [tgl_lahir, setTglLahir] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nohp, setNohp] = useState('');
  const [email, setEmail] = useState('');
  const [nama_bank, setNamaBank] = useState('');
  const [no_rek, setNoRek] = useState('');
  const [besar_mp, setBesarMp] = useState('');
  const [unit_pln, setUnitPln] = useState('');

  const navigate = useNavigate();
  const createPesertaPensiun = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/pesertapensiun/create', {
        tgl_pensiun,
        nipen,
        nama_peserta,
        tgl_lahir,
        alamat,
        nohp,
        email,
        nama_bank,
        no_rek,
        besar_mp,
        unit_pln
      });
      navigate('/pesertapensiun');
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
        <Grid item lg={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h5>Tambah Peserta Pensiun</h5>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="form-row">
                <div className="form-group mb-2">
                  <form className="mx-5" onSubmit={createPesertaPensiun}>
                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Tanggal Pensiun <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control border border-dark"
                          value={tgl_pensiun}
                          onChange={(e) => setTglPensiun(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          NIPEN <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          placeholder="No Induk Pensiunan"
                          value={nipen}
                          onChange={(e) => setNipen(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Nama Peserta Pensiun <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nama_peserta}
                          onChange={(e) => setNamaPeserta(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Tanggal Lahir <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control border border-dark"
                          value={tgl_lahir}
                          onChange={(e) => setTglLahir(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Alamat <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={alamat}
                          onChange={(e) => setAlamat(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          No. HP <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nohp}
                          onChange={(e) => setNohp(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          E-mail <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control border border-dark"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Nama Bank <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nama_bank}
                          onChange={(e) => setNamaBank(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          No Rekening <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={no_rek}
                          onChange={(e) => setNoRek(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Besar Manfaat Pensiun <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={besar_mp}
                          onChange={(e) => setBesarMp(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="tgl-pensiun" className="fw-semibold">
                        Unit PLN <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control border border-dark"
                        value={unit_pln}
                        onChange={(e) => setUnitPln(e.target.value)}
                      />
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
}

export default CreatePesertaPensiun;
