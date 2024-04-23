import Head from "next/head";
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>{count}</title>
      </Head>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
export default MyComponent;
