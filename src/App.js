import Header from './components/Header'
import BlogArea from './components/Blog'
import SigninForm from './components/SigninForm';
import { BrowserRouter, Switch } from 'react-router-dom'
function App() {
  return (
    <>
    <Switch>
        <BrowserRouter>
        </BrowserRouter>
    </Switch>
      <Header />
      <br />
      <BlogArea />
      <SigninForm />
    </>
  );
}

export default App;
