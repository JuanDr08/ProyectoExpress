const { validationResult } = require('express-validator')
const UserService = require('../services/userService.cjs')
const { ObjectId, Binary } = require('mongodb')
const multer = require('multer');

module.exports = class UserController {

    async registerUser(req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const userService = new UserService()
        delete req.body.password
        let { nick, passwordHash, email, phone, birth_day, sex } = req.body
        let query = [
            {
                $match: {
                    $or: [
                        phone ? { phone: phone } : { email: email },
                    ],
                    provider: 'ruraqmaki'
                }
            }
        ]
        let isUserResgistered = await userService.agregate(query)

        if (isUserResgistered.length) return res.status(409).json({ status: 409, message: 'El usuario ya existe' })

        let data = {
            cedula: 'Not assigned',
            names: 'Not assigned',
            surnames: 'Not assigned',
            email: email ? email : 'Not assigned',
            photo: 'https://unavatar.io/microlink/microlink.io',
            provider: 'ruraqmaki',
            nick: nick,
            phone: phone ? phone : 'Not assigned',
            role: 'Usuario Estandar',
            password: passwordHash,
            birth_day: birth_day ? birth_day : 'Not assigned',
            sex: sex ? sex : 'Not assigned'
        }

        await userService.createUser(data)

        return res.status(201).json({ code: 201, message: 'Usuario creado satisfactoriamente' })

    }

    async editUserData(req, res) {
        console.log('usuario editado desde controller');
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const userService = new UserService()

        const file = req.file;

        try {
            let imageDataUrl = undefined
            // console.log(req.user)
            let userId = req.user ? req.user[0]._id : '66fc4e1ecea28adf2f935a77'
            let user = await userService.getUserById(userId)
            for (let field of Object.keys(req.body)) {
                if (user[field] == req.body[field]) continue
                await userService.updateFieldsWithSet(userId, field, req.body[field])
            }
            
            if (file) {
                if ( !(user['photo'] instanceof Binary) || !file.buffer.equals(user['photo'].buffer)) {
                    imageDataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`
                    await userService.updateFieldsWithSet(userId, 'photo', file.buffer)
                    await userService.updateFieldsWithSet(userId, 'mimetyoe', file.mimetype)
                } else imageDataUrl = `data:${user.mimetype};base64,${user['photo'].buffer.toString('base64')}`
            }
            
            res.json({ message: 'Datos modificados', name: req.body, imageDataUrl: imageDataUrl ? imageDataUrl : undefined });
        } catch (err) {
            res.status(500).json({status: 500, message: 'Error inesperado en la edicion de los datos de usuario'})
        }

    }

    async createFieldOfArraysAndPushObjectIdItems(req, res, fieldName) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const userService = new UserService()

        let userId = req.user ? req.user[0]._id : '66fce2a0da531255789f1fff'
        let query = await userService.updateFieldFromUser(userId, fieldName, [ObjectId.createFromHexString(req.params.id)])

        if (query.modifiedCount) return res.status(200).json({ status: 200, message: 'Documento agregado con exito' })
        else if (query.modifiedCount == 0) return res.status(304).json({ status: 304, message: `Usuario encontrado, pero el id que desea registrar ya existe dentro del campo ${fieldName}` })
        else if (query.matchedCount == 0) return res.status(404).json({ status: 404, message: 'No se encontro el documento del usuario' })
        else return res.status(500).json({ status: 500, message: query })

    }

    

    async removeProductsFromFieldsList(req, res, field) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const userService = new UserService()

        let userId = req.user ? req.user[0]._id : '66fce2a0da531255789f1fff'

        let query = await userService.removeMultipleElementsFromField(userId, field, [ObjectId.createFromHexString(req.params.id)])

        if (query.modifiedCount) return res.status(200).json({ status: 200, message: 'Documento eliminado con exito' })
        else if (query.modifiedCount == 0) return res.status(304).json({ status: 304, message: `Usuario encontrado, pero el id que desea eliminar no existe dentro del campo ${field}` })
        else if (query.matchedCount == 0) return res.status(404).json({ status: 404, message: 'No se encontro el documento del usuario' })
        else return res.status(500).json({ status: 500, message: query })

    }

    async getAllItemsFromAField(req, res, field) {

        try {
            const userService = new UserService()
            // 66fcd36332175b17183a6acb
            let userId = req.user ? req.user[0]._id : '66fce2a0da531255789f1fff'

            let data = await userService.getAllFromFIeld(userId, field)
            if (!data) return res.status(404).json({ status: 400, message: 'Usuario no econtrado' })
            if (!Object.keys(data).length) return res.status(404).json({ status: 404, message: `El usuario no presenta contenido en ${field}` })

            return res.status(200).json({ status: 200, data: data })
        } catch (err) {
            return res.status(500).json({ status: 500, message: err })
        }

    }

    async checkForAnIdOnFavoriteUserList(req, res) {

        const userService = new UserService()

        let userId = req.user ? req.user[0]._id : '66fce2a0da531255789f1fff'
        let favoriteList = await userService.getAllFromFIeld(userId, 'favoritos')
        if (!Object.keys(favoriteList).length) return res.status(404).json({ status: 404, message: 'El usuario no presenta favoritos en su lista' })

        let existsParamId = favoriteList.favoritos.some(id => id.equals(ObjectId.createFromHexString(req.params.id)) )
        if (existsParamId) return res.status(200).json({ status: 200, exists: true })
        else if (!existsParamId) return res.status(404).json({ status: 200, exists: false })

    }

    async getAllProductDetailseFromField(req, res, coleccion, campoLocal) {
        try {
            
            const userService = new UserService()
            
            // 66fcd36332175b17183a6acb
            let userId = req.user ? req.user[0]._id : '66fce2a0da531255789f1fff'
            let userExists = await userService.getUserById(userId)
            if (!userExists) return res.status(404).json({ status: 400, message: 'Usuario no econtrado' })
            let aux = `${campoLocal}.0`

            let agg = [
                {
                    $match: {
                        _id: ObjectId.createFromHexString(`${userId}`)
                    }
                },
                {
                    $lookup: {
                        from: coleccion,
                        localField: campoLocal,
                        foreignField: "_id",
                        as: campoLocal
                    }
                },
                {
                    $project: {
                        [campoLocal]: 1
                    }
                },
                {
                    $match: {
                        [aux]: { $exists: true }
                    }
                }
            ]

            let aggDetails = await userService.agregate(agg)
            
            if (!aggDetails.length) return res.status(404).json({ status: 404, message: `El usuario no presenta contenido en ${campoLocal}` })

            return res.status(200).json({ status: 200, data: aggDetails })

        } catch (err) {
            return res.status(500).json({ status: 500, message: err })
        }

    }

}