import { Request, Response} from 'express';
import { uuid } from 'uuidv4';

interface Repository{
    id: string,
    title: string,
    url: string,
    stack: [],
    likes: number
}

const repositories : Repository[] = [];

export default {
    create(request:Request, response:Response){
        try {
            const { title, url, stack } = request.body;

            const repository: Repository = {
                id: uuid(),
                title,
                url,
                stack,
                likes: 0
            };
            repositories.push(repository);

            return response.status(201).json(repository);

        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    list(request:Request, response:Response){
        return response.status(200).json(repositories);
    },

    update(request:Request, response:Response){
        try {
            const { id } = request.params;
            const { title, url, stack } = request.body;
            const index = repositories.findIndex(item => item.id === id);
            if (index > -1 ) {
                repositories[index] = {
                    id,
                    title,
                    url,
                    stack,
                    likes : repositories[index].likes
                }
                return response.status(200).json(repositories[index]);
            }
            else
                return response.status(404).send();
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    show(request:Request, response:Response){
        try {
            const { id } = request.params;
            const result = repositories.find(item => id === item.id);
            console.log(typeof result);
            if (result)
                return response.status(200).json(result);
            else
                return response.status(404).send();
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    remove(request:Request, response:Response){
        try {
            const { id } = request.params;  
            const itemToBeRemove = repositories.find(item => id === item.id)!;
            if (itemToBeRemove){
                repositories.splice(repositories.indexOf(itemToBeRemove), 1);
                return response.status(204).send();
            } else
                return response.status(404).send();

        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    like(request:Request, response:Response){
        try {
            const { id } = request.params;
            const index = repositories.findIndex(item => item.id === id);
            if (index > -1 ) {
                repositories[index] = {
                    id,
                    title: repositories[index].title,
                    url: repositories[index].url,
                    stack: repositories[index].stack,
                    likes : repositories[index].likes + 1,
                }
                return response.status(200).json(repositories[index]);
            }
            else
                return response.status(404).send();
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}
