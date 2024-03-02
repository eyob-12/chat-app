import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const {data} = await axios.post(url, {username,password});
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="bg-gray-800 h-screen flex items-center">
      <div>
         <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
           <input value={username}
                  onChange={ev => setUsername(ev.target.value)}
                  type="text" placeholder="username"
                  className="block w-full rounded-lg bg-gray-700 mt-2 p-2 focus:border-white focus:bg-teal-800 focus:outline-none dark:text-white font-bold" />
           <input value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  type="password"
                  placeholder="password"
                  className="block w-full rounded-lg bg-gray-700 mt-2 p-2 focus:border-white focus:bg-teal-800 focus:outline-none dark:text-white font-bold" />
           <button className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg mt-2">
             {isLoginOrRegister === 'register' ? 'SIGN UP' : 'SIGN IN'}
           </button>
           <div className="text-center mt-2">
             {isLoginOrRegister === 'register' && (
               <div className="text-white">
                 Already a member?
                 <button className="ml-1 text-sky-500 border-b-4 border-sky-500" onClick={() => setIsLoginOrRegister('login')}>
                 SIGN IN
                 </button>
               </div>
             )}
             {isLoginOrRegister === 'login' && (
               <div className="text-white">
                 Dont have an account?
                 <button className="ml-1 text-sky-500 border-b-4 border-sky-500" onClick={() => setIsLoginOrRegister('register')}>
                 SIGN UP
                 </button>
               </div>
             )}
           </div>
         </form>
      </div>
    </div>
  );
}
