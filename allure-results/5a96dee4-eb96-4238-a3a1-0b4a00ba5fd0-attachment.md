# Test info

- Name: Delete user
- Location: C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:56:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 401
    at C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:59:31
```

# Test source

```ts
   1 | import {test,expect} from '@playwright/test'
   2 |
   3 | var userid;
   4 |
   5 | test('Get users',async ({request})=>{
   6 |
   7 |     const response= await request.get('https://reqres.in/api/users?page=2')
   8 |    console.log(await response.json());
   9 |    expect(response.status()).toBe(200)
  10 |
  11 | })
  12 |
  13 | test('Create user', async ({ request }) => {
  14 |     const response = await request.post('https://reqres.in/api/users', {
  15 |       data: {
  16 |         name: 'Kumar',
  17 |         job: 'trainer',
  18 |       },
  19 |       headers: {
  20 |         'Accept': 'application/json',
  21 |         'x-api-key': 'reqres-free-v1'
  22 |       },
  23 |     });
  24 |   
  25 |     console.log(await response.json());
  26 |     expect(response.status()).toBe(201);
  27 |     
  28 |     var responseBody = await response.json()
  29 |     expect(responseBody.name).toBe('Kumar');
  30 |
  31 |     userid=responseBody.id
  32 |   });
  33 |
  34 | test('Update user', async ({request})=>{
  35 |
  36 |     const response = await request.put('https://reqres.in/api/users/' + userid, {
  37 |     data:{
  38 |         name: 'Kumar',
  39 |         job: 'Engineer',
  40 |     },
  41 |     headers: {
  42 |       'Accept': 'application/json',
  43 |       'x-api-key': 'reqres-free-v1'
  44 |     },
  45 |
  46 |     });
  47 |     console.log(await response.json());
  48 |     expect(response.status()).toBe(200);
  49 |
  50 |
  51 |
  52 |
  53 | })
  54 |
  55 |
  56 | test('Delete user', async ({request})=>{
  57 |
  58 |     const response=await request.delete('https://reqres.in/api/users/' + userid)
> 59 |     expect(response.status()).toBe(204);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  60 |
  61 |
  62 |     
  63 | })
```