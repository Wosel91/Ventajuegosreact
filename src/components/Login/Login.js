import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.css';

const Login = ({ cerrar }) => {
  function Logimenu() {
    // props.auth.signInmenu();
  }
  return (
    <div>
      <div className="modal-header text-center fondo-naranja">
        <h2 className="card-title blanco">Crea tu cuenta en IG para continuar</h2>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          id="botoncerrar"
          onClick={() => {
            cerrar();
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-5 p-7 margenlogin">
            <h2 className="card-title text-center naranja">Conectarse con</h2>
            <div className="div text-center">
              <button type="button">facebook</button>
              <br />
              <button type="button" onClick={Logimenu}>
                google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  cerrar: PropTypes.object,
};
const mapStateToProps = state => {
  return {
    auth1: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Login);
