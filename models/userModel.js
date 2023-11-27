import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    stuid: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 9
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        required: true,
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