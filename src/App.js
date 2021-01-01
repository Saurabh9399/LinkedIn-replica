import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed"
import { selectUser } from './features/userSlice';

function App() {
  const user = userSelector(selectUser);


  return (
    <div className="app">
     <Header/>
      {!user ? (
        <Login/>
      ): (
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          
        </div>
      )
      }

     <div className="app__body">
       <Sidebar/>
       <Feed/>

     </div>

    </div>
  );
}

export default App;
