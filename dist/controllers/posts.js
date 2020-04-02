"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
const apiPath = `https://jsonplaceholder.typicode.com/posts`;
// get all posts
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(apiPath);
    res.json(response.data);
}));
// get posts by id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${apiPath}/${req.params.id}`);
    res.json(response.data);
}));
// create posts
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(apiPath, req.body);
    res.json(response.data);
}));
// update post by id
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.put(`${apiPath}/${req.params.id}`, {
        id: +req.params.id,
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body
    });
    res.json(response.data);
}));
// delete posts by id
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.delete(`${apiPath}/${req.params.id}`);
    res.json(response.data);
}));
module.exports = router;
