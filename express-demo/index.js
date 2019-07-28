const express = require('express')
const Joi = require('joi')

const app = express();

app.use(express.json())


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}

app.get('/', (request, response) => {
    response.send('bella pe te!')
})

app.get('/api/courses', (request, response) => {
    response.send(courses);
})

app.get('/api/courses/:id', (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course) return response.status(404).send("Not found perdio");
    response.send(course);
});

app.post('/api/courses', (request, response) => {

    const { error } = validateCourse(request.body);
    if(error) return response.status(400).send(error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: request.body.name
    };
    courses.push(course);
    response.send(course);
})

app.put('/api/courses/:id', (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course) return response.status(404).send("Not found perdio");

    const { error } = validateCourse(request.body);
    if(error){
        response.status(400).send(error.details[0].message)
        return;
    }

    course.name = request.body.name;
    courses.push(course);
    response.send(course);
})

app.delete('/api/courses/:id', (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course) return response.status(404).send("Not found perdio");

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    response.status(204).send(course);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
})