import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
      <>
        <Navbar titleName="TextUtils" />
        <div className="container my-3">
          <TextForm heading="Converter of Text" />
        </div>
      </>
  );
}

export default App;
