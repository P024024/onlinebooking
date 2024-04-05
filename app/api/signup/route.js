// this route is used to create a new user in the mongodb databse using the user model

import {connectToDB} from '@utils/database'
import User from '@models/User'

export const POST = async (req) => {
    const {username, email, password} = await req.json();

    try {
        await connectToDB();
        const newUser = new User({
            username: username, 
            email: email,
            password:password,
        })

        await newUser.save()

        return new Response(JSON.stringify(newUser),{
            status:201
        })
    } catch (error){
        return new Response("Failed to create a new User",{status: 500})
    }
}

