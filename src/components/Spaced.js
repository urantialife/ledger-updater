import React from "react";

export default ({ of, children }) => (
  <div className="container">
    {children}
    <style jsx>
      {`
        .container :global(> * + *) {
          margin-top: ${of}px;
        }
      `}
    </style>
  </div>
);
