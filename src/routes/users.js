const { userService } = require('../services/user_service')

const userRouter = (app) => {
    app.route('/users')
    .get((req, res) => {
        const users = userService.getUsers()
        res.status(200).send(users)
    })
    .post((req, res) => {
        const user = userService.createUser(req.body)
        res.status(201).send(user)
    })
    
    app.route('/users/:id')
    .get((req, res) => {
        const user = userService.getUser(req.params.id)
        res.send(user)
    })
    .put((req, res) => {
        const user = userService.updateUser(req.params.id, req.body)
        res.status(200).send(user)
    })
    .delete((req, res) => {
        userService.deleteUser(req.params.id)
        res.status(200).send("OK")
    })
}

module.exports = userRouter