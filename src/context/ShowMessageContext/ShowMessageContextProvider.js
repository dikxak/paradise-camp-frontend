import React, { useState } from 'react';

import ShowMessageContext from './show-message-context';

const ShowMessageContextProvider = props => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMessageState = state => {
    setShowMessage(state);
  };

  const showMessageContext = {
    setShowMessage: handleMessageState,
    showMessage,
  };

  return (
    <ShowMessageContext.Provider value={showMessageContext}>
      {props.children}
    </ShowMessageContext.Provider>
  );
};

export default ShowMessageContextProvider;
