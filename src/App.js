import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';
import CardWithProjects from './Components/CardWithProjects/CardWithProjects';

function App() {
  return (
    <main className="App">
      <div className="card">
      <ProfilePicture />
      <Header />
      <CardWithProjects />
      <Footer />
      </div>
    </main>
  );
}

export default App;
