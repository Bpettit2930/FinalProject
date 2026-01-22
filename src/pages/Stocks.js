import { Link } from "react-router-dom";

export default function Stocks() {
  return (
    <>
      <h1>Stocks</h1>{" "}
      <ul>
        <li>Apple: -$2534.86</li>
        <li>Google: $145.87</li>
        <li>Red Hat: $2734.45</li>
        <li>IBM: -$41.15</li>
        <li>Microsoft: $324.59</li>
      </ul>
      Click here to go back to the lounge, if you can still afford our drinks.
    </>
  );
}
