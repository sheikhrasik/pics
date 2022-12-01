import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("Have you selected the right", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
