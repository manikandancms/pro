import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Varifyotp = () => {
    const location = useLocation();
    const email = location.state?.email || '';
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('Check your email for the OTP');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!email) {
            setMessage('Email not found, please go back and enter your email');
            return;
        }

        if (!otp) {
            setMessage('Please enter the OTP');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post('http://localhost:8000/verifyotp', { email, otp });

            if (res.data.success) {
                setMessage('✅ OTP verified Successfully');
                // Clear OTP input on success
                setOtp('');
            } else {
                setMessage(res.data.message || 'OTP verification failed');
                // Clear OTP input on failure to prompt re-entry
                setOtp('');
            }
        } catch (error) {
            console.log('Error:' + error);
            setMessage(`Network error: Please try again`);
            // Clear OTP input on error
            setOtp('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
            <p className="capitalize opacity-70 mb-2">{message}</p>
            <div className="space-y-4 w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    disabled={loading}
                    aria-label="Enter OTP code"
                    className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
                />
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    aria-label="Verify OTP code"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Verifying...
                        </span>
                    ) : (
                        'Verify OTP'
                    )}
                </button>
            </div>
            <p className="text-center mt-4 text-sm">
                Back to{' '}
                <a href="https://pro-e-com.netlify.app/" className="text-blue-500 hover:underline">
                    Login
                </a>
            </p>
        </div>
    );
};

export default Varifyotp;