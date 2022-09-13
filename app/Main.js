import React from 'react';
import ReactDOM from 'react-dom/client';

function ExampleComponent() {
  return (
    <div>
      <h1>The sky is blue!!!</h1>
      <p>The sky</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<ExampleComponent />);

if (module.hot) {
  module.hot.accept();
}
