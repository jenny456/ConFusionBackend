const  mongoose=require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation : {
        type : String,
    },
    abbr: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },   
    featured: {
        type: Boolean,
        required: true
    }
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;