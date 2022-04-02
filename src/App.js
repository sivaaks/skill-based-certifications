import { Route,BrowserRouter,Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import ViewCertImg from './ViewCertImg';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<PageLayout page="view"/>}></Route>
          <Route exact path='/:id' element={<ViewCertImg/>}></Route>
          <Route exact path='/add' element={<PageLayout page="add"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
