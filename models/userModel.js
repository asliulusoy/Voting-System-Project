import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name area is required."],
        unique: true,
        maxlength: 20,
    },
    stuid: {
        type: Number,
        required: true,
        unique: true,
         validate: {
            validator: function(value) {
                // Check if it's a number and has exactly 9 digits
                return Number.isInteger(value) && value.toString().length === 9;
            },
            message: "Student ID must be a number with exactly 9 digits."
        }
    },
    /*
    projectno: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 2
    },
    */
    email: {
        type: String,
        required: [true, "Email area is required"],
        unique: true,
        match: [/^\w+([-]?\w+)*@bilgiedu\.net$/, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        required: [true, "Password area is required"],
        minLength: [4, "At least 4 characters"]
    },
    votedProjects: {
        type: [Number], // Assuming project numbers are integers
        default: [],
      },
},
    {
        timestamps: true,
    }
);

userSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 12, (err, hash) => {
        user.password = hash;
        next();
    });
});

const User = mongoose.model("User", userSchema);

export default User;