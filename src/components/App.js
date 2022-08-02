import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Quiz /> */}
      <Result />
    </Layout>
  );
}

export default App;
