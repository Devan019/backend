const mongoose = require("mongoose")

const connection =  async() =>{
    await mongoose.connect("mongodb+srv://newUserDevan:aa-DK5_jDL.PWgU@cluster0.ettpzze.mongodb.net/amazon");
}

connection()
.then(()=>{
    console.log("db connect")
})
.catch((err)=>{
    console.log(err)
})

const bookSchema = mongoose.Schema({
    from : String,
    to : String,
    msg : String,
    _created_at : Date
})

const Book = new mongoose.model("Book" , bookSchema);

module.exports = Book