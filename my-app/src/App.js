import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import { SiteFooter } from './components/Common/SiteFooter';
import { SiteNav } from './components/Common/SiteNav';
import { HomePage } from './components/home/HomePage';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { ContactPage } from './components/contacts/Contact';
import { ValidatePage } from './components/auth/ValidatePage';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
// import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus);
  }

  return (
    <div>
      <SiteNav
        isAuthenticated={isAuthenticated}
        updateAuthStatus={updateAuthStatus}
      />
      <Routes>
        <Route
          path='*'
          element={<HomePage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path='/'
          exact={true}
          element={<HomePage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path='/login'
          element={<LoginPage updateAuthStatus={updateAuthStatus} />}
        />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/validate' element={<ValidatePage />} />
        <Route
          path='/contacts'
          element={<ContactPage isAuthenticated={isAuthenticated} />}
        />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
