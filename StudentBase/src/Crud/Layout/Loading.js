import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div class="text-center" >
      <div
        className="spinner-border text-danger"
        role="status"
        style={{ width: "100px", height: "100px" ,margin:"auto"}}
      >
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      
    </div>
  );
};

export default Loading;