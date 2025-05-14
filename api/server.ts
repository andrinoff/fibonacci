import type { VercelRequest, VercelResponse } from '@vercel/node';
import fibonacci from '../main'


export default async function handler(req: VercelRequest, res: VercelResponse) {

    let n = req.body
    console.log(n)
    if (!n || n === null){
        return res.status(404)
    }
    else {
        var answer = fibonacci(parseInt(n))
        return res.status(300).json({"message": answer})
    }
}