const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    if (file.originalname && file.mimetype == "text/plain")
      cb(null, file.originalname);
    else
        throw new Error("file should be text!!");
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
