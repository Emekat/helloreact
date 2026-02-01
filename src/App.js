import Employee from "./components/Employee";



function App() {
  const showEmployees = true;
  return (
    <div className="App">
      <main>
        {showEmployees ? (
          <>
        <Employee name="Alice" />
        <Employee name="Bob" />
        <Employee name="Charlie" />
        <Employee name="Diana" />
        <Employee name="Ethan" /> 
        </>):
        <h3>No employees to show</h3>
        }
      </main>
    </div>
  );
}

export default App;
