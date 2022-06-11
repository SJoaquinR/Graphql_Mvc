import User from '../classes/user.classes.js';
import crypto from 'crypto';

const users = [];

const UserController = {
    getUsers() {
        return users;
    },
    
    createUser({input}) {
        const id = crypto.randomBytes(5).toString('hex');
        const user = new User(id, input);
        users.push(user);
        return user;    
    },

    updateUser({input}) {
        const user = users.find(user => user.id === input.id);
        if (!user) {
            throw new Error('User not found');
        }
        user.name = input.name;
        user.email = input.email;
        return user;
    },

    deleteUser({input}) {
        const user = users.find(user => user.id === input.id);
        if (!user) {
            throw new Error('User not found');
        }
        users.splice(users.indexOf(user), 1);
        return users;
    } 
};

export default UserController;