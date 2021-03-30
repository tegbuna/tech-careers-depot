const mongoose =require('mongoose');


const careerSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
   description: {
       type: String
   },
   ceatedAt: {
       type: Date,
       default: Date.now
   }
});

module.exports = mongoose.model ('Career', careerSchema);