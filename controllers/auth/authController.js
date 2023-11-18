import firebaseApp from "../../firebase/firebaseApp.js";
import { auth } from "../../firebase/firebaseApp.js";
import { agent } from "../../models/deliveryAgentModel.js";
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';



export const googleLogin = async (req, res) => {
    try {
        const token = req.body.credential;

        const credential = GoogleAuthProvider.credential(token);

        const userCredential = await signInWithCredential(credential);

        const user = userCredential.user;

        const existingUser = await agent.findOne({
            where : {
                email : user.email 
            }
        })

        if(existingUser){
            return res.status(403).json({message : 'User Already Exists'});
        }

        const newAgent = new agent({
            username : user.displayName,
            email : user.email,
            phone : user.phoneNumber,
        });

        await newAgent.save();

        return res.status(201).json({message : 'Logined Successfully' , newAgent});

    } catch (error) {
        console.log(error);
    }
}
