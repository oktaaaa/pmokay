import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

export default function UnitPln() {
  const [units, setUnit] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = async () => {
    const response = await axios.get('http://localhost:3000/api/unitpln');
    setUnit(response.data);
  };

  const deleteUnit = async (id) => {
    // try {
    //   await axios.delete(`http://localhost:3000/api/unitpln/${id}`);
    //   getUnits();
    // } catch (error) {
    //   console.log(error);
    // }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/api/unitpln/${id}`);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        setTimeout(() => {
          getUnits();
        }, 2000);
      }
    });
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
        <Grid item>
          <Card>
            <Divider />
            <CardContent>
              <div className="row flex-nowrap">
                <input
                  type=""
                  className="form-control mb-3 border border-dark"
                  placeholder="Ketik Nama Unit"
                  // value={kode_unit}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="row">
                <Link to={`create`} className="btn btn-primary mb-3">
                  Tambah Unit PLN
                </Link>

                <table className="table is-striped table-bordered border-dark">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th>Kode Unit PLN</th>
                      <th>Nama Unit</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>

                  <tbody>
                    {units
                      .filter((unit) => unit.nama_unit.toLowerCase().includes(query))
                      .map((unit, index) => (
                        <tr key={unit._id}>
                          <td className="text-center justify-content-center">{index + 1}</td>
                          <td>{unit.kode_unit}</td>
                          <td>{unit.nama_unit}</td>
                          <td className="justify-content-center">
                            <Link className="btn btn-primary mx-4 fa-regular fa-pen-to-square" to={`/unitpln/update/${unit._id}`}></Link>
                            <button onClick={() => deleteUnit(unit._id)} className="btn btn-danger fa-solid fa-trash-can"></button>
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
