interface User{
    name: string,
    email: string,
    phone: string,
    website: string
}

interface Post {
    userId:number,
    id: number,
    title: string,
    body: string,
}

export const getPosts = async (): Promise<Post[]> => {
    try {
        const data: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!data.ok) {
            throw new Error(`Ошибка запроса: ${data.status} - ${data.statusText}`);
        }
        return await data.json();
    } catch (err) {
        console.error(err);
        throw err; // Прокидываем ошибку для обработки в вызывающем коде
    }
}

export const getPostById = async (id: number): Promise<Post> => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await data.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getUserById = async (id: number): Promise<User> => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await data.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const deletePostById = async (id: number): Promise<{}> => {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        return await data.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

