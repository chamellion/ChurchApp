const mongoose = require('mongoose');
require('dotenv').config()

const regex = process.env.REGEX

const databaseSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'Please supply a name, name cannot be empty'],
        trim: true
    },
    address: {
        type : String,
        required: [true, 'Church members must have an address'],
        trim: true
    },
    phoneNumber: {
      type : Number,
      required : [true, 'How do we reach this church member, you too think about it'],
      validate: {
          validator: function (number) {
              return /\d{11}/.test(number);
          },
          message : props => `${props.value} is not a valid number`
      }
    },
    sex: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    emailAddress:{
        type: String,
        unique: true,
        validate: {
            validator: function (email) {
                return regex.test(email)
            },
            message: props=> `${props.value} is not a valid email`
        }
    },
    isWorker: {
        type: Boolean,
        required: true
    }
})

let Registry = mongoose.model('Registry', databaseSchema);

module.exports = Registry;
