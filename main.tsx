import * as React from "npm:react";
import { renderToReadableStream } from "npm:react-dom/server";


const App: React.FC = () => {
  return (
    <html>
      <head>
        <title>React 18 with deno sample</title>
      </head>
      <body>
        <h1>hello world</h1>
      </body>
    </html>
  );
};

Deno.serve(
  { port: 3000 },
  async () => {
    const stream = await renderToReadableStream(<App />);
    return new Response(stream, {
      headers: {
        "Content-Type": "text/html",
        "x-content-type-options": "nosniff"
      },
    });
  },
);
