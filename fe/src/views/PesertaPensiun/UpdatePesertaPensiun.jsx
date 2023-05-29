import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

function UpdatePesertaPensiun() {
  const { id } = useParams();
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

  useEffect(() => {
    getPesertaById();
  }, []);

  const getPesertaById = async () => {
    const response = await axios.get(`http://localhost:3000/api/pesertapensiun/${id}`);
    setTglPensiun(response.data.tgl_pensiun);
    setNipen(response.data.nipen);
    setNamaPeserta(response.data.nama_peserta);
    setTglLahir(response.data.tgl_lahir);
    setAlamat(response.data.alamat);
    setNohp(response.data.nohp);
    setEmail(response.data.email);
    setNamaBank(response.data.nama_bank);
    setNoRek(response.data.no_rek);
    setBesarMp(response.data.besar_mp);
    setUnitPln(response.data.unit_pln);
  };

  const updatePeserta = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/pesertapensiun/update/${id}`, {
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
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h4>Ubah Peserta Pensiun</h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <div className="form-row">
                <div className="form-group col-lg-12 mb-2">
                  <form className="mx-5" onSubmit={updatePeserta}>
                    <div className="row">
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Tanggal Pensiun
                        </label>
                        <input
                          type="date"
                          className="form-control border border-dark"
                          value={tgl_pensiun}
                          onChange={(e) => setTglPensiun(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          NIPEN
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          placeholder="No Induk Pensiunan"
                          value={nipen}
                          onChange={(e) => setNipen(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-md-12 mb-2">
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
                    </div>

                    <div className="row">
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Tanggal Lahir
                        </label>
                        <input
                          type="date"
                          className="form-control border border-dark"
                          value={tgl_lahir}
                          onChange={(e) => setTglLahir(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Alamat
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
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          No. HP
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nohp}
                          onChange={(e) => setNohp(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          E-mail
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
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Nama Bank
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={nama_bank}
                          onChange={(e) => setNamaBank(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          No Rekening
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
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="tgl-pensiun" className="fw-semibold">
                          Besar Manfaat Pensiun
                        </label>
                        <input
                          type="text"
                          className="form-control border border-dark"
                          value={besar_mp}
                          onChange={(e) => setBesarMp(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-12 mb-2">
                      <label htmlFor="tgl-pensiun" className="fw-semibold">
                        Unit PLN{' '}
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

export default UpdatePesertaPensiun;
