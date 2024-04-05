// this is the login api route that checks whether the username and password match from the mongoose database

import {connectToDB} from '@utils/database'
import User from '@models/User'

export const POST = async (req) => {
    const {email, password} = await req.json();

    try {
        await connectToDB();
        const user = await User.findOne({email: email, password: password})
        if (user) {
            return new Response(JSON.stringify(user),{
                status:200
            })
        } else {
            return new Response("User not found",{status: 404})
        }

    } catch (error){
        return new Response("Failed to login",{status: 500})
    }

}