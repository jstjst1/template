import React from 'react';
import { Link } from 'react-router-dom';

function Page2() {
  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <Link to="/page2/subpage2">Go to Subpage 1</Link>
    </div>
  );
}

export default Page2;
