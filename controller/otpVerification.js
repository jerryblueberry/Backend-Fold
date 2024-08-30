const asyncHandler = require('express-async-handler');

// OTP verification
const codeVerification = asyncHandler(async (req, res) => {
    try {
        const { code } = req.body;
        
        if (code.length !== 6 || code[5] === '7') {
            return res.status(400).json({ message: 'Verification Error' });
        }
        res.status(200).json({ success: "OTP Verification Completed" });
    } catch (error) {
        console.error("Internal Server Error", error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = { codeVerification };
