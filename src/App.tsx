import './App.css';

function App() {
  return (
    <>
      <h1>Vite + React + Typescript </h1>
      <div className="card">
        <p>
          This is a boilerplate repository that I use to setup my react project
          quickly.
        </p>
      </div>
      <p className="read-the-docs">
        This repo is configured with prettier and eslint.Github Action are
        confguired using Husky and lint-staged. <br />
        This enfore prettier and eslint on commit.
      </p>
      <p className="read-the-docs">
        If you are using this repository, please give it a star on github. Feel
        free to suggest more configuration via raising a PR.
      </p>
    </>
  );
}

export default App;
