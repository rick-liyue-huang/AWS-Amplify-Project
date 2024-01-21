import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiteFooter } from './components/Common/SiteFooter';
import { SiteNav } from './components/Common/SiteNav';
import { HomeComponent } from './components/home/HomeComponent';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { ContactPage } from './components/contacts/Contact';

function App() {
  return (
    <div className='App'>
      <SiteNav />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/about' element={<div>About</div>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
