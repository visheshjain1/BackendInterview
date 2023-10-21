const { Interview } = require('../Model/interview');

//Signup 
//Controller

module.exports.getAll = async (req, res) => {
  try {
    const userId = req.body.userId; // Assuming you're passing the user ID as a parameter
    const interviews = await Interview.find({ userId:userId });
    return res.status(200).send({
      message: "Interviews retrieved successfully",
      data: interviews,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error retrieving interviews",
      error: error.message,
    });
  }
};

module.exports.deleteId = async (req, res) => {
    
  try {
    const userId = req.body.id;
    // Use Mongoose to find and delete the interview by ID
    const deletedInterview = await Interview.findByIdAndRemove(req.body.id);

    if (!deletedInterview) {
      return res.status(404).send({
        message: "Interview not found",
      });
    }

    return res.status(200).send({
      message: "Interview deleted successfully",
      data: deletedInterview,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error deleting interview",
      error: error.message,
    });
  }
}


module.exports.add = async (req, res) => {
  try {
    const { userId, name, status, feedback, rating } = req.body;
    const newInterview = new Interview({ userId, name, status, feedback, rating });
    const savedInterview = await newInterview.save();

    return res.status(201).send({
      message: "Interview added successfully",
      data: savedInterview,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error adding the interview",
      error: error.message,
    });
  }
};

module.exports.edit = async (req, res) => {
    try {
      const { id, name, status, feedback, rating } = req.body;
      // Use Mongoose to find the interview by ID and update it
      const updatedInterview = await Interview.findByIdAndUpdate(
        id,
        { name, status, feedback, rating },
        { new: true } // This option returns the updated document
      );
  
      if (!updatedInterview) {
        return res.status(404).send({
          message: "Interview not found",
        });
      }
  
      return res.status(200).send({
        message: "Interview updated successfully",
        data: updatedInterview,
      });
    } catch (error) {
      return res.status(500).send({
        message: "Error updating the interview",
        error: error.message,
      });
    }
  };

  