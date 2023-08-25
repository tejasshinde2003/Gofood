const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shindetejas354:tejas2712@cluster0.xterwsm.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
    } catch (error) {
            


    }
};

module.exports = mongoDB;
 