import React, { useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

const Cta = ({ className, ...rest }) => {
  const gContext = useContext(GlobalContext);

  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
