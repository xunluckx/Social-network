import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Navbar/Navbar-components/Profile/Profile';
import Dialogs from './components/Navbar/Navbar-components/Dialogs/Dialogs';
import News from './components/Navbar/Navbar-components/News/News';
import Music from './components/Navbar/Navbar-components/Music/Music';
import Settings from './components/Navbar/Navbar-components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
