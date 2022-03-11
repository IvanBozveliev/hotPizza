const Feedback = require('../models/Feedback');

const getAllComments = async () => {
    let comments = await Feedback.find();

    if(comments){
        console.log(comments)
        comments = comments.sort((a,b) => new Date(b.date ) - new Date(a.date))
    }
    return comments
}

const createComment = (data) => {
    
    let currentDate = new Date().toString().slice(0, 24);
    data.date = currentDate;

    let comment = new Feedback({...data})
    return comment.save();
}

const getOneComment =(id) => {
    let comment = Feedback.findById(id).lean();
    return comment;
}

function deleteOneComment(id) {
    return Feedback.deleteOne({ _id: id })
 }

module.exports = {
    getAllComments,
    createComment,
    getOneComment,
    deleteOneComment
}