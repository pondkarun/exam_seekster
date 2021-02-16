const models = require("../models/index"); //connect db get data model
const util = require("../util/index"); //connect db  query string
const query = require("../querys/index");
const uuidv4 = require("uuid");
const messages = require('../messages/index');
const md5 = require('md5');
const config = require('../config');
const result = require('../middleware/result');
const jwt = require('jsonwebtoken');

/* เข้าสู่ระบบ */
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;


        const findUser = await models.sys_user.findOne({
            where: {
                email: email,
                password: md5(password),
                is_use: 1
            },
        });

        if (!findUser) {
            const error = new Error(messages.errorUserNot);
            error.statusCode = 402;
            throw error;
        }

        const model = {
            id: findUser.id,
            email: findUser.email,
            f_name: findUser.f_name,
            l_name: findUser.l_name
        }

        //สร้าง token
        const token = await jwt.sign(model, config.JWT_SECRET, { expiresIn: "3h" }); //หมดเวลา 3 ชม.
        //decode วันหมดอายุ
        const expires_in = jwt.decode(token);

        result(res, {
            access_token: token,
            expires_in: expires_in.exp
        })

    } catch (error) {
        next(error);
    }
};

/* สมัครสมาชิก */
exports.register = async (req, res, next) => {
    try {
        const { email, password, f_name, l_name } = req.body;

        const findEmail = await models.sys_user.findOne({
            where: {
                email: email
            },
        });

        if (findEmail) {
            const error = new Error(messages.errorRegister);
            error.statusCode = 402;
            throw error;
        }

        let id = uuidv4.v4();
        await models.sys_user.create({
            id: id,
            email: email,
            password: md5(password),
            f_name: f_name,
            l_name: l_name,
        });

        result(res, id, 201)

    } catch (error) {
        next(error);
    }
};