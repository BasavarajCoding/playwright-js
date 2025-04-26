# Test info

- Name: Create user
- Location: C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:13:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
    at C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:28:27
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
  13 | test.only('Create user', async ({request})=>{
  14 |
  15 |     const response=await request.post('https://reqres.in/api/users', {
  16 |         data:{
  17 |             "name" : "Kumar",
  18 |             "job" : "trainer"
  19 |         },
  20 |         headers:
  21 |         {
  22 |             "Accept" : "application/json"
  23 |         }
  24 |     })
  25 |
  26 | console.log(await response.json());
  27 |
> 28 | expect(response.status()).toBe(201);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |
  30 | var res = await response.json();
  31 | userid=res.id
  32 |
  33 |
  34 |
  35 |     
  36 |
  37 | })
  38 |
  39 | test('Update user', async ({request})=>{
  40 |
  41 |
  42 | })
  43 |
  44 |
  45 | test('Delete user', async ({request})=>{
  46 |
  47 |     
  48 | })
```