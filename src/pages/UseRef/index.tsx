/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";

interface InputInterface {
  value: string;
  ref: any;
  onChange: any;
}

const Input1: React.FC<InputInterface> = (props) => {
  return (
    <input value={props.value} ref={props.ref} onChange={props.onChange} />
  );
};

const Input2 = React.forwardRef((props: InputInterface, ref: any) => {
  return <input value={props.value} ref={ref} onChange={props.onChange} />;
});

const UseRefPage = () => {
  const input1Ref = useRef(null);
  const [input1Val, setInput1Val] = useState("Bad ref input 1");
  const input2Ref = useRef<HTMLInputElement | null>(null);
  const [input2Val, setInput2Val] = useState("Good ref input 2");

  return (
    <div>
      <div>Open Your Console</div>
      {/* This component will throw errors */}
      <Input1
        ref={input1Ref}
        value={input1Val}
        onChange={(ev: any) => {
          setInput1Val(ev.target.value);
        }}
      />
      {/* This component will not throw errors cuz it a proper function*/}
      <Input2
        ref={input2Ref}
        value={input2Val}
        onChange={(ev: any) => {
          setInput2Val(ev.target.value);
        }}
      />
      <div
        style={{ color: "green" }}
        onClick={() => {
          if (input2Ref.current) {
            input2Ref.current.focus();
          }
        }}
      >
        Focus Input 2
      </div>
    </div>
  );
};

export default UseRefPage;
