import { Switch, Route } from 'react-router';


import NotesPage from './pages/notes-page';


import Navigation from './components/navigation/navigation';
import Theme from './components/theme/theme';

import NotesProvider from './contexts/NotesProvider';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />

      <Theme>
        <Switch>
          

          <Route path="/">
            <NotesProvider>
              <NotesPage />
            </NotesProvider>
          </Route>

          <Route path="/Comments">
            
          </Route>

          
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
