"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const services_1 = require("../../services");
const updateSubscription = async (req, res) => {
    const result = await services_1.AuthService.updateSubscription(req);
    if (!result) {
        throw helpers_1.HttpError.set(404);
    }
    res.status(201).json({ code: 201, data: result });
};
exports.default = updateSubscription;
//# sourceMappingURL=updateSubscription.js.map