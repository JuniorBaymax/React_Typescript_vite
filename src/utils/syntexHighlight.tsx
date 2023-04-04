// third-party
import { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ==============================|| CODE HIGHLIGHTER ||============================== //

interface SyntaxHighlightProps {
  children: React.ReactNode | any;
}

const SyntaxHighlight: FC<SyntaxHighlightProps> = ({ children, ...others }) => {
  return (
    <SyntaxHighlighter language='javascript' showLineNumbers style={a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlight;
