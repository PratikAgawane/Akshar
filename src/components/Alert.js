import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    props.alert && (
      <div className="alert-container" style={{ padding: '10px' }}>
        <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    )
  );
}

export default Alert;
