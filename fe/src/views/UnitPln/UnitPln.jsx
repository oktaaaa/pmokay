import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
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

  const filteredUnit = 
     units.filter( (unit) => {return unit.nama_unit.toLowerCase().includes(query)})
  
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
      <Breadcrumb>
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
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  <h4> Unit PLN</h4>
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
                  + Tambah Unit PLN
                </Link>
              </div>
              <table className="table is-striped border border-dark table-bordered table-hover mt-3">
                <thead>
                  <tr className="text-center">
                    <th>No</th>
                    <th>Kode Unit PLN</th>
                    <th>Nama Unit</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

              {filteredUnit?.length > 0? 
                <tbody>
                  {units
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
                : <div className='text-center'> Data tidak ditemukan </div>
              }

              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
