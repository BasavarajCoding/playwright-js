# Test info

- Name: Create user
- Location: C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:13:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Kumar"
Received: undefined
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
  13 | test.only('Create user', async ({ request }) => {
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
  25 |     console.log(response.json());
  26 |   
  27 |     expect(response.status()).toBe(201);
> 28 |     expect(response.name).toBe('Kumar');
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |    
  30 |     var res = response.json()
  31 |     userid=res.id
  32 |   });
  33 |
  34 | test('Update user', async ({request})=>{
  35 |
  36 |
  37 | })
  38 |
  39 |
  40 | test('Delete user', async ({request})=>{
  41 |
  42 |     
  43 | })
```