import Header from './components/Header'
import BlogArea from './components/Blog'
import SigninForm from './components/SigninForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
    <Switch>
        <BrowserRouter>
        <Route exact path="/">
          {/*  Home Page Component here. */}
        </Route>
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
