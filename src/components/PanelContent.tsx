import React, { useEffect } from "react";
import { SyntaxHighlighter } from "storybook/internal/components";

import PrettierPluginHtml from "prettier/plugins/html";
import Prettier from "prettier/standalone";

interface PanelContentProps {
  code: string;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
}

export const PanelContent: React.FC<PanelContentProps> = ({
  code,
  showLineNumbers = false,
  wrapLines = false,
}) => {
  const [formattedCode, setFormattedCode] = React.useState(code);

  useEffect(() => {
    Prettier.format(code, {
      parser: "html",
      plugins: [PrettierPluginHtml],
    }).then((formatted) => {
      setFormattedCode(formatted);
    });
  }, [code]);

  return (
    <SyntaxHighlighter
      language="html"
      copyable
      padded
      format={true}
      showLineNumbers={showLineNumbers}
      wrapLongLines={wrapLines}
    >
      {formattedCode}
    </SyntaxHighlighter>
  );
};
