const mongoose = require('mongoose')

const Files = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

Files.virtual("url").get(function(){
const url = process.env.URL || 'http://localhost:3000'

return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('Files', Files)

