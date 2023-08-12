import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Navbar/Navbar-components/Profile/Profile';
import Music from './components/Navbar/Navbar-components/Music/Music';
import Settings from './components/Navbar/Navbar-components/Settings/Settings';
import DialogsContainer from './components/Navbar/Navbar-components/Dialogs/DialogsContainer';
import UsersContainer from './components/Navbar/Navbar-components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        {/*state={props.store.getState()}*/}
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
