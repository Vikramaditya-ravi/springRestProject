import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCourse from "./components/AllCourse";
import AddCourse from "./components/AddCourse";

function App() {
  // const notify = () => {
  //   toast.error("done", {
  //     position: "top-center",
  //   });
  // };

  return (
    <Router>
      <div className=" text-center">
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/view-courses" Component={AllCourse} exact />

                <Route path="/add-courses" Component={AddCourse} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
