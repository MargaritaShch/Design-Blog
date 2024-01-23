interface User{
    name: String,
    email: String,
    phone: String,
    website: String
}

interface Post {
    userId: Number,
    id: Number,
    title: String,
    body: String,
}

export const getPosts = async (): Promise<Array<Post>> => {
    try {
        const data: Response<Array<Post>> = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!data.ok) {
            throw new Error(`Ошибка запроса: ${data.status} - ${data.statusText}`);
        }
        return await data.json();
    } catch (err) {
        console.error(err);
    }
}

export const getPostById = async (id): Promise<Post> => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await data.json();
    } catch (err) {
        console.error(err);
    }
}

export const getUserById = async (id): Promise<User> => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await data.json();
    } catch (err) {
        console.error(err);
    }
}

export const deletePostById = async (id): Promise<{}> => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        return await data.json();
    } catch (err) {
        console.error(err);
    }
}

