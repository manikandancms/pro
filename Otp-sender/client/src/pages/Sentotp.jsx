import {useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Sentotp = () => {
    const [email, setEmail] = useState('')
    const navigate =  useNavigate();
    const SendHandle = async () =>{
        try {
            const res = await axios.post('http://localhost:8000/sendotp', {email});
    console.log(res.data);
    
            if (res.data.success){
                navigate ('/verify', {state : {email}})
            }else{
                alert("failed to send otp:" + res.data.message)
            }

        }catch(error){
            console.log("Error:" + error)
        }
    }

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-12 bg-gray-700 h-screen">
      <div className="max-w-md w-full p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Login with OTP
        </h2>
        <p className="text-center mb-4">
          Enter your email to receive an OTP
        </p>
        <div className="space-y-4">
          <input
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button onClick={SendHandle} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
            Send OTP
          </button>
        </div>
        <p className="text-center mt-4 text-sm">
          Back to{" "}
          <a href="/home" className="text-blue-500 hover:underline">
            Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sentotp;