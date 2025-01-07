import './App.css';
import Navigation from './components/Navigation.js';
import Main from './components/Main.js';

function App() {
  return (
    <div>
      <div className="App">
        <Navigation />

        <section id="daily-task" style={{ marginTop: "80px" }}>
          <h1>Daily Task</h1>
          <p>Content for daily tasks goes here.</p>
        </section>
{/* 
        <section id="monthly-task">
          <h1>Monthly Task</h1>
          <p>Content for monthly tasks goes here.</p>
        </section> */}

        <Main />
      </div>
    </div>
    
  );
}

export default App;
