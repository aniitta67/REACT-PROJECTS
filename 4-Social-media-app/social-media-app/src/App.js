import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
     
    </Routes>
    </BrowserRouter>

  );
}
export default App;
