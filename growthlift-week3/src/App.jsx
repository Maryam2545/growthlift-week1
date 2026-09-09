import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import QuoteBox from "./components/QuoteBox";
import SkillsList from "./components/SkillsList";
import InternList from "./components/InternList";

function App() {
  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        <h1>React useEffect, Lists & Keys</h1>

        <h2>Props Example</h2>

        <Card
          title="React"
          description="JS library for UIs"
          color="#7A89FA"
        />

        <Card
          title="Vite"
          description="Fast build tool"
          color="#00C864"
        />

        <Card
          title="Tailwind"
          description="Utility-first CSS"
          color="#00B4D8"
        />

        <h2>useEffect Example</h2>

        <Counter />

        <h2>Toggle Example</h2>

        <Toggle />

        <QuoteBox />

        <SkillsList />

        <InternList />
      </div>
    </>
  );
}

export default App;