import { config } from 'dotenv';
config();

import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

const otpstore = new Map();

const randomeOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SELF_EMAIL,
        pass: process.env.APPPASSWORD
    }
});

app.post('/sendotp', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, message: "Email required!" });
    }
    const otp = randomeOtp();
    const expAt = Date.now() + 5 * 60 * 1000; // otp valid 5 minutes
    otpstore.set(email, { otp, expAt });

    const mailOption = {
        from: process.env.SELF_EMAIL,
        to: email,
        subject: "please verify your device",
        html: `<div style="font-family: Arial, sans-serif; line-height:1.6; color:#2F3338;">
            <p>Hey manikandan,</p>
            <p>A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.</p>
            <p><strong>Verification code:</strong>
            <span style="font-size:1.5cm;">${otp}</span> </p>
            <p>if you did not attempt to sign in to your account, your password may be compromised. visit <a href="https://yourapp.com/setings/security">your security settings</a> to update your password.</p>
            <p>for extra protection, enable <a href ="http://yourapp.com/2fa">two-factor authentication</a></p>
            <p>
                if you enable two-factor authentication, make sure you keep access to one or more recovery methods.
                see <a href = "https://yourapp.com/2fa/recovery">account recovery help</a>
            </p>
            <p>Thanks, <br/> The YourApp Team</p>
        </div>`,
    };

    try {
        await transporter.sendMail(mailOption);
        console.log(`OTP ${otp} sent to ${email}`);
        res.status(200).json({ success: true, message: "OTP sent Successfully" });
    } catch (error) {
        console.error("Nodemailer error:", error);
        res.status(500).json({ success: false, message: "failed to send email" });
    }
});

app.post('/verifyotp', (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ success: false, message: "Email and OTP are required" });
    }

    // basic otp validation
    if (!/^\d{6}$/.test(otp)) {
        return res.status(400).json({ success: false, message: "OTP must be 6 digit number" });
    }

    const storeData = otpstore.get(email);

    if (!storeData) {
        return res.status(400).json({ success: false, message: "No OTP found for this email" });
    }

    const { otp: storedOtp, expAt } = storeData;

    if (Date.now() > expAt) {
        otpstore.delete(email);
        return res.status(400).json({ success: false, message: "OTP has expired!" });
    }

    if (storedOtp === otp) {
        otpstore.delete(email);
        return res.status(200).json({ success: true, message: "OTP verified successfully" });
    } else {
        return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
