import useFingerpose from "./hooks/useFingerpose";

function App() {
  const { loading, error } = useFingerpose();

  console.log(loading, error);
  return (
    <div>
      <h1>useFingerpose</h1>
    </div>
  );
}

export default App;
