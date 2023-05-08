import { useState } from 'react';
import { marked } from 'marked';

// Set options
marked.use({
  async: false,
  pedantic: false,
  gfm: true,
  breaks: true,
});

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React and Typescript logos](https://miro.medium.com/v2/resize:fit:700/1*NIQhzeOwp7vi7DiycOqVjw.png)
`;

export default function App() {
  const [markdown, setMarkdown] = useState(defaultText);

  return (
    <div className="App">
      <h1 className="title is-2 has-text-link has-text-centered mt-3">
        Markdown Previewer
      </h1>
      <h2 className="subtitle is-5 has-text-link has-text-centered mt-2">
        Type your markdown text in the editor and see it rendered live!
      </h2>
      <div className="columns">
        <div className="column is-half">
          <div className="message is-link my-6 mx-1">
            <div className="message-header">
              <h2 className="subtitle has-text-light">Editor</h2>
            </div>
            <div className="message-body">
              <textarea
                id="editor"
                className="textarea has-background-light"
                rows={30}
                onChange={(event) => {
                  setMarkdown(event.target.value);
                }}
                value={markdown}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="message is-link my-6 mx-1">
            <div className="message-header">
              <h2 className="subtitle has-text-light">Preview</h2>
            </div>
            <div className="message-body">
              <div
                id="preview"
                className="content"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
