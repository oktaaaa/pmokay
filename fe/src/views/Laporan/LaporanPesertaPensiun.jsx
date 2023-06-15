import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

const LaporanPesertaPensiun = () => {
  const componentPDF = useRef();
  const [pesertas, setPesertas] = useState([]);
  const [allpesertas, setAllPesertas] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    getPesertas();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'Userdata',
    onAfterPrint: () => alert('Data saved in PDF')
  });

  const getPesertas = async () => {
    const response = await axios.get('http://localhost:3000/api/pesertapensiun');
    setPesertas(response.data);
    setAllPesertas(response.data);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const handleSelect = (date) => {
    let filtered = allpesertas.filter((peserta) => {
      let productDate = new Date(peserta['tgl_pensiun']);
      return productDate >= date.selection.startDate && productDate <= date.selection.endDate;
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setPesertas(filtered);
  };
  return (
    <>
      <Breadcrumb>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Laporan
        </Typography>
      </Breadcrumb>

      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h4> Laporan Peserta Pensiun</h4>
                </Typography>
              }
            />
            <Divider />
            <div className="row">
              <button className="btn btn-success col-md-2" onClick={generatePDF}>
                PDF
              </button>
            </div>
            <CardContent>
              <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
              <div ref={componentPDF} style={{ width: '100%' }}>
                <table className="table is-striped table-bordered">
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
                      <th>Besar MP</th>
                      <th>Unit PLN</th>
                    </tr>
                  </thead>

                  <tbody>
                    {pesertas.map((peserta, index) => (
                      <tr key={peserta._id}>
                        <td>{index + 1}</td>
                        <td>{peserta.tgl_pensiun}</td>
                        <td>{peserta.nipen}</td>
                        <td>{peserta.nama_peserta}</td>
                        <td>{peserta.tgl_lahir}</td>
                        <td>{peserta.alamat}</td>
                        <td>{peserta.nohp}</td>
                        <td>{peserta.email}</td>
                        <td>{peserta.besar_mp}</td>
                        <td>{peserta.unit_pln}</td>
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
};

export default LaporanPesertaPensiun;
