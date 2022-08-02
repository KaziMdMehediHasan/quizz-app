import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Quiz />
    </Layout>
  );
}

export default App;
