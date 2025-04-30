import React,{ useEffect } from "react";

export function Example3(props: {
  onMount: () => Promise<void>;
}) {
   const [value, setValue] = React.useState(0);


  useEffect(() => {
    props.onMount().then(() => {
      setValue(1);
    }
    );
  }, []);
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{value}</p>
    </div>
  );
}