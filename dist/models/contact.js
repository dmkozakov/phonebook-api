"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const helpers_1 = require("../helpers");
const contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        required: [true, 'Set email for contact'],
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
}, { timestamps: true, versionKey: false });
contactSchema.post('save', { errorHandler: true }, helpers_1.handleMongooseError);
const Contact = (0, mongoose_1.model)('contact', contactSchema);
exports.default = Contact;
//# sourceMappingURL=contact.js.map