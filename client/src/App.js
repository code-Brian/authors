import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {Main} from './views/Main'
import {AuthorNew} from './views/AuthorNew'
import {AuthorForm} from './components/AuthorForm'
import {AuthorDetails} from './components/AuthorDetails'
import {AuthorUpdate} from './components/AuthorUpdate'
import {AuthorEdit} from './views/AuthorEdit'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default/>
          <Route element={<AuthorNew/>} path="/authors/new"/>
          <Route element={<AuthorDetails/>} path="/authors/:id" />
          <Route element={<AuthorEdit/>} path="/authors/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
