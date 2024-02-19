import Ajv from 'ajv';

const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        postId: {type: "integer"},
        id: {type: "integer"},
        name: {type: "string"},
        email: {type: "string"},
        body: {type: "string"}
    }
}


const data = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
