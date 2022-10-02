import "./App.css";
import Routes from "./routes/Routes.jsx";
import TopNav from './components/dashboard/TopNavBar/TopNav'
// import RouteNav from './components/dashboard/TopNavBar/RouteNav'


function App() {
  return (
    <div className="App">
      <TopNav />
      <RouteNav/>
      <Routes />{" "}
   
    </div>
  );
}

export default App;
