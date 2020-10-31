Here I explore the foundations of Node.js using Express and TypeScript. It contains an API to create, delete, update, list, and get data about code repositories. The REST API produces the following outcome:

### Application routes

- **`POST /repositories`**: This route receives a body containing `title`, `url`, and `stack` in a request. It creates a repository record structured as follows: `{ id: "uuid", title: 'Node foundations', url: 'http://github.com/...', stack: ["Node.js", "..."], likes: 0 }`;

- **`GET /repositories`**: This route lists all repositories;

- **`GET /repositories/:id`**: This route shows the `id` repository;

- **`PUT /repositories/:id`**: This route changes the attributes `title`, `url` and `stack` of the `id` repository;

- **`POST /repositories/:id/like`**: This route increases the number of likes of the `id` repository;

- **`DELETE /repositories/:id`**: This route deletes the `id` repository;

The routes can be tested using Insomnia (see Insomnia.json).
