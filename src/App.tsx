import { sub } from "./2operations";
import { add } from "./1operations";
import { mul } from "./1operations";
import { div } from "./1operations"; // unused

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
