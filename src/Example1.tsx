import React,{ useEffect } from "react";

export function Example1(props: {
  onClick: () => Promise<void>;
}) {
   const [value, setValue] = React.useState(0);
  return (
    <div>
      <button onClick={async () => {

       await  props.onClick();
        setValue(1);
      }}>Click me</button>


      <h1>Hello, World!</h1>
      <p>{value}</p>
    </div>
  );
}