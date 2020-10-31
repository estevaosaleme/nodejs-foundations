import { Request, Response, NextFunction} from 'express';

function logRequests(request: Request, response: Response, next: NextFunction){
    const { method, url } = request;
    const log = `[${method.toUpperCase()}] ${url}`;
    console.log(log);

    return next();
}

export default logRequests;