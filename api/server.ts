import type { VercelRequest, VercelResponse } from '@vercel/node';
import fibonacci from '../main'


export default async function handler(req: VercelRequest, res: VercelResponse) {

    let n = req.body
    if (!n || n === null){
        return res.status(404)
    }
    else {
        fibonacci(n)
        return res.status(500).json({"message": n})
    }
}