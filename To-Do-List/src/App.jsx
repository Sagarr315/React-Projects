import Footer from "./components/Footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import StudentForm from "./components/studentForm";

function App() {
  return (
    <>
      <Header />
      <StudentForm/>
      <Footer/>
    </>
  );
}
export default App;
