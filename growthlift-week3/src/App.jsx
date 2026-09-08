import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>React Props & State</h1>

      <h2>Props Example</h2>

      <Card
        title="React"
        description="JS library for UIs"
        color="#7A89FA"
      />

      <Card
        title="Vite"
        description="Fast build tool for modern web development"
        color="#00C864"
      />

      <Card
        title="Tailwind"
        description="Utility-first CSS"
        color="#00B4D8"
      />

      <h2>State Example</h2>

      <Counter />

      <h2>Toggle Example</h2>

      <Toggle />
    </div>
  );
}

export default App;