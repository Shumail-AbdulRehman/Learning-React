import { useState, useCallback, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 

    if (numberAllowed) {
      str += '0123456789'; 
    }
    if (charAllowed) {
      str += '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'; 
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char); 
    }

    setPassword(pass); 
  }, [length, numberAllowed, charAllowed]); 

  useEffect(()=>
  {
    generatePassword()
  },[length,numberAllowed,charAllowed])

  let passwordRef=useRef(null)
  let copyToClipboard=()=>
  {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  return (
    <>
      <div>
        Password Generator
        <br />        
        <input
          type="text"
          placeholder="Enter value"
          value={password}
          class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={passwordRef}
        />
        <button onClick={copyToClipboard}>Copy</button>
        <br />
        <button onClick={generatePassword} className='border px-5' >Generate Password</button>
      </div>
      <div>
        <input type="range"
         min={6}
         max={20}
         className='cursor-pointer'
         value={length}
         onChange={(e)=> {setLength(e.target.value)}}
         />
         <label>length:{length}</label>

      </div>
      <div>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>
        {
          setNumberAllowed((prev)=> !prev)
        }
        }
        />
        <label>Numbers Allowed</label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='characterAllowed'
        onChange={()=>
        {
          setCharAllowed((prev)=> !prev)
        }
        }

        />
        <label>Characters Allowed</label>
      </div>
    </>
  );
}

export default App;
