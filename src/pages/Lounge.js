import { Link } from "react-router-dom";

export default function Lounge() {
  return (
    <main>
      <h1>Welcome to the New and Improved Head First Lounge</h1>
      <p>
        <img
          src="http://wickedlysmart.com/hfhtmlcss/chapter5/lounge/images/drinks.gif"
          alt="Drinks"
        />
      </p>
      <p style={{ backgroundColor: "red", border: "5px solid gray" }}>
        Join us any evening for refreshing{" "}
        <Link to="beverages/elixir">elixirs</Link>, conversation and maybe a
        game or two of <em>Dance Dance Revolution</em>. Wireless access is
        always provided; BYOWS (Bring Your Own Web Server).
      </p>
      <h2>Directions</h2>
      <p>
        You'll find us right in the center of downtown Webville. If you need
        help finding us, check out our{" "}
        <Link to="about/directions">detailed directions</Link>. Come join us!
      </p>
      <h2>Stocks</h2>
      <p>
        If you want to see if you can afford our{" "}
        <a
          onMouseOver={(e) => (e.target.innerText = "very expensive")}
          onMouseOut={(e) => (e.target.innerText = "bahut mahanga")}
          style={{ backgroundColor: "gold", padding: "5px" }}
          href="https://translate.google.com/?sl=en&tl=hi&text=very%20expensive&op=translate"
          target="translation"
        >
          bahut mahanga
        </a>{" "}
        drinks, you can check out how your <Link to="stocks">stocks</Link> are
        doing!
      </p>
    </main>
  );
}
