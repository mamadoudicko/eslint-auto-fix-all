import { add, mul } from "./1operations";
import { sub } from "./2operations";

export const App = () => {
  const a = 1;
  const b = 2;
  return (
    <>
      <div>{add(a, b)}</div>
      <div>{mul(a, b)}</div>
      <div>{sub(a, b)}</div>
    </>
  );
};

//@mamadoudicko_
