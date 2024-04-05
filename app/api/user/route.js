// GET route to get the user details from the database using the email and password

import { connectToDB } from '@utils/database'
import User from '@models/User'

export const GET = async (req, res) => {

    try {
        await connectToDB();
        const users = await User.find({})
        if (user) {
            return new Response(JSON.stringify(users), {
                status: 200
            })
        } else{
            return new Response(JSON.stringify({ message: 'Users not found' }), {
                status: 404
            })
        }
} catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to get users' }), {
        status: 500
    })
}

}