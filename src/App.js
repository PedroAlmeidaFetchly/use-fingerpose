import useFingerpose from "./hooks/useFingerpose";

function App() {
  const { loading } = useFingerpose();

  console.log(loading);
  return (
    <div>
      <h1>useFingerpose</h1>
    </div>
  );
}

export default App;
