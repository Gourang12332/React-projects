import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
let name = "Gourang";
function App() {
  return (
    <>
    <Navbar Title='Textutils' abouttext={"About"} />  
    {/* if we write like this then it will consider Title and abouttext to be null and default will not work */}
    <div className="container">
    <Textform/>
    </div>
    </>
  );
}

export default App;
