"use client";

import React from "react";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>Oops! Something went wrong</h1>
      <p>Failed to Create Meal</p>
    </main>
  );
};

export default Error;
