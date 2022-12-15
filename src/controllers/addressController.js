const addressModel = require("../models/addressModel")  // --> importing the internModel module



// ==> POST api : to create a college

module.exports.createaddress = async function (req, res) {
    try {
        let data = req.body  
        if (Object.keys(data).length === 0) 
            return res.status(400).send({ status: false, message: "please enter the data" });

        const {place, street, pin  } = data  


       

        // if (!isValid(name))  // --> name should be provided in the body
        //     return res.status(400).send({ status: false, message: "Please enter the college name. ⚠️" })
        // if (!data.name.match(nameRegex))  // --> name should be provided in right format
        //     return res.status(400).send({ status: false, message: "name should contain alphabets only. ⚠️" })

        // if (!isValid(fullName))  // --> fullName of the college should be provided in the body
        //     return res.status(400).send({ status: false, message: "Please enter the fullName of the college. ⚠️" })
        // if (!data.fullName.match(nameRegex))  // --> fullName should be provided in right format
        //     return res.status(400).send({ status: false, message: "fullName can't be alphanumeric. ⚠️" })

        // if (!isValid(logoLink))  // --> logoLink should be provided in the request body
        //     return res.status(400).send({ status: false, message: "Please enter the logoLink. ⚠️" })
        // if (!logoLink.match(linkRegex))  // --> logoLink should be provided in right format
        //     return res.status(400).send({ status: false, message: "Please enter a valid URL. ⚠️" })

        // let college = await userModel.findOne({ name: name })  // --> to check if that college name is already present in the database
        // if (college)  // --> if college name already exists in the database
        //     return res.status(400).send({ status: false, message: "This name is already used. ⚠️" })

        // if that college doesn't exist in the database
        let addressCreated = await addressModel.create(data)  
        return res.status(201).send({ message:"address created sucessfully", status: true, data: addressCreated })  // --> to get the response
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}