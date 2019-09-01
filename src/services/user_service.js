const fs = require('fs')
const { join } = require('path')
const filePath = join(__dirname, '../data/users.json')

class UserService {
    getUsers() {
        const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : []

        try {
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    saveUser(users) {
        fs.writeFileSync(filePath, JSON.stringify(users), null, '\t')
    }

    getUser(id) {
        const users = this.getUsers()
        return users.filter(user => user.id === id)[0]
    }

    createUser(user) {
        const users = this.getUsers()
        users.push(user)
        this.saveUser(users)

        return user
    }

    updateUser(id, user) {
        const users = this.getUsers()
        this.saveUser(users.map(data => {
            if(data.id === id) {
                return {
                    ...data,
                    ...user
                }
            }

            return data
        }))

        return user
    }

    deleteUser(id) {
        const users = this.getUsers()
        this.saveUser(users.filter(user => user.id !== id))
    }
}

module.exports = UserService
module.exports.userService = new UserService()