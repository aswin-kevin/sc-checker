import { useState } from "react";
import axios from "axios";

const StatusCode = () => {
  const getStatusCode = (event) => {
    event.preventDefault();
    console.log("clicked status code button");
    const browserName = navigator.userAgent;
    const config = {
      headers: {
        "User-Agent": browserName,
      },
    };
    axios.get("https://example.com", config).then((_res) => {
      console.log("answer is", _res);
      //   setResp(_res.data.resp);
      //   setCopyTxt(true);
    });
  };

  return (
    <div>
      <div>Hi</div>
      <div onClick={getStatusCode}>Bye</div>
    </div>
  );
};

export default StatusCode;
