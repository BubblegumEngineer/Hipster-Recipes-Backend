import express from "express";
const router=express.Router()

router.post("/signUp", userSignUp)
router.post("/login", userLogin)
router.get("/user/:id", getUser)

module.exports=router