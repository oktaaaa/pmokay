const mongoose = require("mongoose");

const User = mongoose.model("User", {
	nipen: { 
        type: String, 
        required: true 
    },
	namaLengkap: { 
        type: String, 
        required: true 
    },
	email: { 
        type: String, 
        required: true 
    },
	password: { 
        type: String, 
        required: true 
	}
});

module.exports = {User}
