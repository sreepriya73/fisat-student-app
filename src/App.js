import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import SearchStudent from './component/SearchStudent';
import DeleteStudent from './component/DeleteStudent';
import ViewStudent from './component/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
      <Route path='/search' element={<SearchStudent/>}/>
      <Route path='/delete' element={<DeleteStudent/>}/>
      <Route path='/view' element={<ViewStudent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
