import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";
import{ logout,  
        register,
        login, 
       // special,       
       // updateUser,
        //deleteUser
        getMyProfile } 
        from "../controllers/user.js"


const router =express.Router();

router.get("/logout",logout);

router.post("/new",register);
router.post("/login",login);

//dynamic routing
//router.get("/userid/special",special);


/*router.get("/userid/:id",userDetails);

router.put("/userid/:id",updateUser);

router.delete("/userid/:id",deleteUser);

//for these three lines you can write this code this preferable

router
        .route("/userid/:id")
        .get(userDetails)
        .put(updateUser)
        .delete(deleteUser);*/
//router.route("/userid/:id").get(getMyProfile);
router.get("/me",isAuthenticated,getMyProfile)
        



export default router;