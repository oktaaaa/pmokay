import React from 'react';
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// const AuthLogin = Loadable(lazy(() => import('../views/Login')));
// ==============================|| PROFILE SECTION ||============================== //
import Logo from 'assets/images/IKPLNWS2JB.png';
import imgIKPLN from 'assets/images/cover-1.png';

const FirstPageIkpln = () => {
  return (
    <>
      <div className="row-fluid bg-primary">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-8 p-3">
            {/* <h3 className="text-white">IKPLN</h3> */}
            <img src={Logo} alt="logo" />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-4 mx-auto p-3 text-end">
            <button className="btn btn-light">
              <Link to={`/login`}>Masuk </Link>
            </button>
          </div>
          <hr/>
        </div>
        <div className="row">
          <h3 className = "text-center text-white">Selamat Datang di <br />IKPLN WS2JB</h3>
        </div>
        <div className="text-center">
          <img src={imgIKPLN} className = "rounded mb-5" width="80%" alt="Card" />
        </div>
      </div>
    </>
  );
};

export default FirstPageIkpln;
