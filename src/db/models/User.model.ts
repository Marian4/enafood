import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    addresses: {
        required: true,
        type: [{street: {
            type: String,
            required: true
        },
        neighborhood: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: false
        },
        number: {
            type: Number,
            required: true
        },
        zip_code: {
            type: Number,
            required: true
        },}]
    },
    age: {
        required: true,
        type: Number
    },
    created_at: {
        required: true,
        type: Date,
        default: new Date()
    },
    updated_at: {
        required: true,
        type: Date,
        default: new Date()
    }
})

export default mongoose.model('User', UserSchema)
