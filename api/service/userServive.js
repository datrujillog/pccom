const userRepository = require("../repository/userRepository");

class UserService {
    static #instance;

    constructor() {
        if (!UserService.#instance) {

            UserService.#instance = this;
        }

        return UserService.#instance;
    }

    async createUser(data) {
        try {
            // Lógica para crear un usuario

            const user = await userRepository.createUsers(data);

            return {
                success: true,
                user: user
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }

    async getAllUsers() {

        try {

            const users = await userRepository.getAllUsers();

            return {
                success: true,
                users
            };

        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }

    async getUserById(id) {

        try {

            const user = await userRepository.getUserById(id);

            return {
                success: true,
                user
            };

        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }

    async updateUser(id, data) {

        try {

            const user = await userRepository.updateUser(id, data);

            return {
                success: true,
                user
            };

        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }

    async deleteUser(id) {

        try {

            const user = await userRepository.deleteUser(id);

            return {
                success: true,
                user
            };

        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }

}

module.exports = new UserService();