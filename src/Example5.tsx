import React,{ useEffect } from "react";

export function Example5(props: {
  onClick: () => void;
}) {
   const [value, setValue] = React.useState(0);
  return (
    <div>
      <button onClick={async () => {
          props.onClick();

        setTimeout(() => {
          setValue(1);
        },10);
      }}>Click me</button>


      <h1>Hello, World!</h1>
      <p>{value}</p>
    </div>
  );
}