const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let userData = req.body;

    const { title, name, phone, email, password, address } = req.body;

    if (!title) {
      return res
        .status(400)
        .send({ status: false, message: "title is required" });
    }

    if (!["Mr", "Mrs", "Miss"].includes(title)) {
      return res
        .status(400)
        .send({ status: false, message: "It can be Mr , Mrs,Miss" });
    }
    if (!name) {
      return res
        .status(400)
        .send({ status: false, message: "name is required" });
    }
    if (!phone) {
      return res
        .status(400)
        .send({ status: false, message: "phone number is required" });
    }

   
    let checkPhone = await userModel.findOne({ phone: phone });
    if (checkPhone) {
      return res
        .status(400)
        .send({ status: false, message: "phone no already exists" });
    }

    if (!email) {
      return res
        .status(400)
        .send({ status: false, message: "email is required" });
    }
    

    let checkEmail = await userModel.findOne({ email: email });
    if (checkEmail) {
      return res
        .status(400)
        .send({ status: false, message: "email is already exist" });
    }

    if (!password) {
      return res
        .status(400)
        .send({ status: false, message: "password is required" });
    }

    
    if (!address.pincode) {
        return res
          .status(400)
          .send({
            status: false,
            message: "Pincode requirements didn't match",
          });
      }

    let savedData = await userModel.create(userData);
    return res
      .status(201)
      .send({ status: true, message: "succesfully created", data: savedData });
  } catch (err) {
    return res.status(500).send({ status: false, error: err.message });
  }
};

module.exports = {createUser}
