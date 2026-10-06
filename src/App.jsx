import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ToDoList from "./components/ToDoList";
import LuckySpinner from "./components/LuckySpinner";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <LuckySpinner />
      <ToDoList />
      <Footer />
    </>
  );
}

export default App;
