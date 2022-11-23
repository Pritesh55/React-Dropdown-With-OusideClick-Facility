import React, {forwardRef} from "react";
import withClickOutside from "./withClickOutside";

const Home = forwardRef(({ open, setOpen }, ref) => {
  console.log(open);

  return (
    <section ref={ref}>
      <h1>Feels good to be home!</h1>

      <button className="secondary" onClick={() => setOpen(!open)}>
        Dropdown Toggle
      </button>

      {open && (
        <ul>
          <li>One</li>
          <li>Two</li>
        </ul>
      )}
    </section>
  );
});

export default withClickOutside(Home);
