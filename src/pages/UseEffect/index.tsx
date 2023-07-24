import React from "react";

const UseEffectPage = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const message = "[] no dependency added: render once";
    console.log("🚀 ~ file: index.tsx:7 ~ React.useEffect ~ message:", message);
  }, []);

  React.useEffect(() => {
    const message = ` dependency added, [count]: ${count}`;
    console.log("🚀 ~ file: index.tsx:13 ~ React.useEffect ~ message:", message);
  }, [count]);

  return (
    <div>
      <div>Open Your Console</div>
      <div style={{color: 'green'}} onClick={() => { setCount((state) => state + 1) }}>Press Me Multiple</div>
    </div>
  );
};

export default UseEffectPage;
