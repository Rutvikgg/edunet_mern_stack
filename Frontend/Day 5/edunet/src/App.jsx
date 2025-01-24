import Hero from "./Hero";
import data from "./assets/data.json";

const App = () => {
  return (
    <div>
      Rutvik
      <Hero obj={data} />
    </div>
  );
};

export default App;
