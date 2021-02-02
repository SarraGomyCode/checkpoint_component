import ProfilePhoto from "./component/profile/ProfilPhoto";
import Adresse from "./component/profile/Add";
import Name from "./component/profile/FullName";
import './App.css';

function App() {
  return (
    <div>
      {/* Profilphoto */}
      <ProfilePhoto/>
      {/* FullName */}
      <Name/>
       {/* Adresse */}
      <Adresse/>
    </div>
  );
}

export default App;
