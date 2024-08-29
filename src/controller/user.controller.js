const Users = require("../schema/user.schema");

const AddNewUser = async (req, res) => {
    const { firstname, lastname, email, number } = req.body;
    const user = new Users({
        firstname, lastname, email, number
    })
    try {
        const userRegister = await user.save();
        if (userRegister._id)
            return res.status(201).json({ message: "User Register Successfully", data: userRegister });

    } catch (error) {
        return res.status(409).json({
            error: error.message
        })
    }
};

const GetUserDetails = async (req, res) => {
    const { email } = req.query;
    try {
        const userDetails = await Users.findOne({ email: email });
        if (userDetails?._id && userDetails.active == true)
            return res.status(200).json({
                message: "User details fetched Successfully!!!",
                date: userDetails,
            });
        else
            return res.status(200).json({
                message: "User not found!!"
            })

    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
};

const GetAllUserDetails = async (req, res) => {
    try {
        const userDetails = await Users.find();
            return res.status(200).json({
                message: "User details fetched Successfully!!!",
                date: userDetails,
            });

    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
};

const UpdateUserDetails = async (req, res) => {
    const { email } = req.query;
    const { firstname, lastname, number } = req.body;

    try {
        const userDetails = await Users.findOne({ email: email });
        if (firstname)
            userDetails.firstname = firstname;

        if (lastname)
            userDetails.lastname = lastname;

        if (number) {
            const contact = await Users.findOne({ number: number });
            if (contact?._id)
                userDetails.number = number;
            else
                return res.status(401).json({
                    message: "This number is already register!!"
                })

        }
        if (userDetails?._id) {
            const userUpdateDetailes = await userDetails.save();
            return res
                .status(201)
                .json({ message: "User details updated Successfully!!", data: userUpdateDetailes });
        }
        else {
            return res.status(200).json({
                message: "User not found!!"
            })
        }
    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
};

const SoftDeleteUser = async (req, res) => {
    const { email } = req.query;
    try {
        const userDetails = await Users.findOne({ email: email });
        if (userDetails?._id) {
            userDetails.active = false;
            const userUpdateDetailes = await userDetails.save();
            return res.status(201).json({ message: "User Account soft deleted", data: userUpdateDetailes });
        }
    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
};

module.exports = {
    userRegistrations: AddNewUser,
    getAllUserDetails: GetAllUserDetails,
    getUserDetails: GetUserDetails,
    updateUserDetails: UpdateUserDetails,
    SoftDeleteUser: SoftDeleteUser,
};
