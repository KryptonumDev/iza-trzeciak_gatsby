import React from "react";
import Markdown from "./Markdown";

const Heading = ({ level = 'h2', children, ...props }) => {
  return (
    <Markdown
      components={{
        'p': level,
      }}
      {...props}
    >
      {children}
    </Markdown>
  );
}

export default Heading;