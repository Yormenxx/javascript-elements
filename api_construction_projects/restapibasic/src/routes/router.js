const {Router} =require("express");
const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "root dir",
        status: 200
        })
    })



module.exports=router;