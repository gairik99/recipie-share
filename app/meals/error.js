"use client";

import React from "react";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>`Oops! Something went wrong ${error}`</h1>
      <p>Failed to Fetch data</p>
    </main>
  );
};

export default Error;
