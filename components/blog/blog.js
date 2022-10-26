import Image from "next/image";
import React from "react";

const blog = () => {
  return (
    <div>
      <div>
        <h3>LETEST NEWS</h3>
        <h1>From Our Blog</h1>
      </div>
      <div>
        <div>
          <Image />
          <h2>2020 Interior Design Trends</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <button>continue reading</button>
        </div>
      </div>
    </div>
  );
};

export default blog;
