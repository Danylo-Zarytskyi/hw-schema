import Ajv from 'ajv';

const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        a: {type: "integer"},
        b: {type: "string"},
        c: {type: "number"},
        bam: {
            type: 'array',
            minItems: 1,
            maxItems: 3,
            items: {
                type: 'number',
            }
            
        },
    }
}


const data = {
    a: 10,
    b: "20",
    c: 10.20,
    bam: [
        {"item1":  10},
        {"item2":  20},
        {"item3":  30}
    ]
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
