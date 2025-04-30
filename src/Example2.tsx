import React,{ useEffect } from "react";


async function somethingAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 10);
  }
  );
}

export function Example2(props: {
}) {
   const [value, setValue] = React.useState(0);
  return (
    <div>
      <button onClick={async () => {

       await  somethingAsync();
        setValue(1);
      }}>Click me</button>


      <h1>Hello, World!</h1>
      <p>{value}</p>
    </div>
  );
}