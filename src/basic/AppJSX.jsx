import logo from '../logo.svg';
import './App.css';

function AppJSX() {

  const name = 'son';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`hello ${name}`}</h1>
      <p>{name}</p>

      <ul>
        {
          list.map((item) => {
            return <li>{item}</li>
          })
        }
      </ul>

    </>
    
    // <div className="AppJSX">
    //   <header className="AppJSX-header">
    //     <img src={logo} className="AppJSX-logo" alt="logo" />
    //     <p>
    //       Edit dsf <code>src/AppJSX.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="AppJSX-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default AppJSX;
