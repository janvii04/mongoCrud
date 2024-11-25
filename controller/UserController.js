const User = require("../models/user");

module.exports = {
  // add new user

  store: (req, res, next) => {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });

    user
      .save()

      .then((response) => {
        res.json({
          message: "user Added successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "An error occured while adding an user",
        });
      });
  },

  // update an user

  update: (req, res, next) => {
    let userID = req.body.userID;

    let updateData = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    };
    User.findByIdAndUpdate(userID, { $set: updateData }, { new: true })

      /*findOneAndUpdate: This method, as the name suggests, finds a document, updates it,
        and returns the updated document. By default, it returns the document before the update.
        If you want the document after the update, set the new option to true.*/

      .then(() => {
        res.json({
          message: "user Updated Successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "An error occured while updating",
        });
      });
  },

  list: (req, res, next) => {
    User.find()
      .then((response) => {
        res.json({
          response,
        });
      })
      .catch((error) => {
        res.json({
          message: "An error occured in index",
        });
      });
  },

  // show single user

  show: (req, res, next) => {
    let userID = req.body.userID;
    User.findById(userID)
      .then((response) => {
        res.json({
          response,
        });
      })
      .catch((error) => {
        res.json({
          message: "An error occured in show",
        });
      });
  },

  // Delete an user

  destroy: (req, res, next) => {
    let userID = req.body.userID;
    User.findOneAndDelete(userID)
      .then(() => {
        res.json({
          message: "user deleted successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "An error occured while deleting",
        });
      });
  },
};
