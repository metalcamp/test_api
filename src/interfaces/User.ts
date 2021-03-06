import { Post } from './Post';

export interface User {
    id: string,
    name: string,
    surname: string,
    dateOfBirth: string,
    createdOn: string,
    posts?: Post[]
}

export interface CreateUserRequest {
    name: string,
    surname: string,
    dateOfBirth: string
}

export interface UpdateUserRequest {
    name?: string,
    surname?: string,
    dateOfBirth?: string
}
