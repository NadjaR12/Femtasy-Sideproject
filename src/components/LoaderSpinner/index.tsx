import React from "react";
import { Circles } from "react-loader-spinner";

import "./styles.scss";

export default function LoaderSpinner() {
  return (
    <div className="LoaderSpinner">
      <Circles
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
