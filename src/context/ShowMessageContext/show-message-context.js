import React from 'react';

const ShowMessageContext = React.createContext({
  showMessage: false,
  setShowMessage: state => {},
});

export default ShowMessageContext;
