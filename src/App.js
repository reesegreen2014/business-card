import logo from './logo.svg';
import './App.css';
import About from './Components/About/About';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';

function App() {
  return (
    <main className="App">
      <div className="card">
      <ProfilePicture />
      <Header />
      <ContactInfo />
      <About />
      <Footer />
      </div>
    </main>
  );
}

export default App;
