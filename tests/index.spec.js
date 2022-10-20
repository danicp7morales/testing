
import app from '../src/app';
import request from 'supertest'



describe('GET /task, describe ', () => {

    test('should respond with a 200 status code',async () => {
      const response = await request(app).get('/tasks').send();
      expect(response.statusCode).toBe(200);//toBe es como desir un triple ===

      
      //console.log(response)
    } )

    test('should respond with an array',async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe('POST /tasks', () => {
    
    describe('given a title and description', () =>{
       
        const newTask = {
            title: 'Test Task',
            description: 'Test Description'
        }


        test('should respond with a 200 status code ', async () => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.statusCode).toBe(200);
         });
     
         test('should have a content-type: application/json in the header ', async () => {
             const response = await request(app).post('/tasks').send(newTask)
             expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
          });
     
         test('should respond with an task id', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
         });
     
    })



});

describe('When title and description is missing', ()=>{
    test('shoul respond with a 400 status code', async () => {
        const fields = [
           {},
           {title:'task at'},
           {description: 'Test Description'}
        ]
        
        for (const body of fields ){
            const response = await request(app).post('/tasks').send(body);
            expect(response.statusCode).toBe(400);
        }


        

    })
/*
    test('shoul respond with a 400 status code', async () => {
        const response = await request(app).post('/tasks').send({description:''});
        expect(response.statusCode).toBe(400);

    })

    test('shoul respond with a 400 status code', async () => {
        const response = await request(app).post('/tasks').send({});
        expect(response.statusCode).toBe(400);

    })*/
} )

/*
describe('POST /tasks',  () => {

    test('should respond with a 200 status code ', async () => {
       const response = await request(app).post('/tasks').send()
       expect(response.statusCode).toBe(200);
    });

    test('should have a content-type: application/json in the header ', async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
     });

    test('should respond with an task id', async () => {
       const response = await request(app).post('/tasks').send({
        title: 'test task',
        description: 'test description'
       });
       expect(response.body.id).toBeDefined();
    });


});
*/


