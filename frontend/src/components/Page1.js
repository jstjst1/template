import React from 'react';
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <Link to="/page1/subpage1">Go to Subpage 1</Link>
    </div>
  );
}

export default Page1;
