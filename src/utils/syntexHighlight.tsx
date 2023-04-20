// Importing FC type from react
import { FC } from 'react';
// Importing the SyntaxHighlighter component and the a11yDark style from react-syntax-highlighter
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Declaring an interface for the props that the SyntaxHighlight component receives
interface SyntaxHighlightProps {
  children: React.ReactNode | any;
}

// Defining the SyntaxHighlight component with props of type SyntaxHighlightProps
const SyntaxHighlight: FC<SyntaxHighlightProps> = ({ children, ...others }) => {
  // The component returns a SyntaxHighlighter component from react-syntax-highlighter with a11yDark style, line numbers enabled and the given props
  return (
    <SyntaxHighlighter language='javascript' showLineNumbers style={a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  );
};

// Exporting the SyntaxHighlight component as the default export
export default SyntaxHighlight;
