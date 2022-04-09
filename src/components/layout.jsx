import React from 'react';

const Layout = ({ setIsUpload }) => {
  return <div className="layout" onClick={() => setIsUpload(false)}></div>;
};

export default Layout;
