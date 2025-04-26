import { test, expect } from '@playwright/test';

var userid;

test('Get users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('Create user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'Kumar',
            job: 'trainer',
        },
        headers: {
            'Accept': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
    });

    console.log(await response.json());
    expect(response.status()).toBe(201);

    var responseBody = await response.json();
    expect(responseBody.name).toBe('Kumar');

    userid = responseBody.id;
});

test('Update user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/' + userid, {
        data: {
            name: 'Kumar',
            job: 'Engineer',
        },
        headers: {
            'Accept': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('Delete user', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userid, {
        headers: {
            'Accept': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
    });

    expect(response.status()).toBe(204);
});
