import React from "react";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";

const LinkRenderer = ({ href, children }) => {
  const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));
  return (
    isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="link">
        {children}
      </a>
    ) : (
      <Link to={href} className="link">{children}</Link>
    )
  );
};

const ListRenderer = ({ children }) => (
  <li><span>{children}</span></li>
)

const Markdown = ({ children, components, ...props }) => {
  return (
    <ReactMarkdown
      components={{
        a: LinkRenderer,
        li: ListRenderer,
        ol: ({ children }) => <ol className="orderedList">{children}</ol>,
        ul: ({ children }) => <ul className="unorderedList">{children}</ul>,
        ...components
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}
 
export default Markdown;