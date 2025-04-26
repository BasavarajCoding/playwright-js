# Test info

- Name: Get users
- Location: C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:4:6

# Error details

```
Error: apiRequestContext.get: Hostname/IP does not match certificate's altnames: Host: reques.in. is not in the cert's altnames: DNS:*.24sellergears.com, DNS:*.alevae.co, DNS:*.asadosellegado.com, DNS:*.autodiscover.asadosellegado.com, DNS:*.ayu-cell12.net, DNS:*.bitpoolfarm.com, DNS:*.bookandcourse.co, DNS:*.camaras-de-seguridad.online, DNS:*.campcreekliving.com, DNS:*.com.hkford.com, DNS:*.cpanel.asadosellegado.com, DNS:*.dr.hkford.com, DNS:*.erothota.com, DNS:*.fastpass.live, DNS:*.find-myself.online, DNS:*.gironacity.net, DNS:*.highly-grand-shelter.org, DNS:*.hkford.com, DNS:*.ideassimples.xyz, DNS:*.k5181.com, DNS:*.kt797.net, DNS:*.loiiiiipop99.com, DNS:*.m.hkford.com, DNS:*.mail.ttmethod.com, DNS:*.mathtutorinmiami.com, DNS:*.netspor166.live, DNS:*.pasundaytoday.com, DNS:*.pontosnatroca.com, DNS:*.profresearch.net, DNS:*.random.pontosnatroca.com, DNS:*.rentenrechner.online, DNS:*.scinvesting.com, DNS:*.selflove.softglowmusic.com, DNS:*.shopify.vishu.store, DNS:*.sillyslimes.com, DNS:*.softglowmusic.com, DNS:*.sso.suroten.com, DNS:*.star-line.online, DNS:*.suroten.com, DNS:*.ttmethod.com, DNS:*.used-cars-81693.com, DNS:*.users.hkford.com, DNS:*.vishu.store, DNS:*.ww1.hkford.com, DNS:*.ww25.netspor166.live, DNS:*.ww25.pontosnatroca.com, DNS:*.ww25.scinvesting.com, DNS:*.ww38.hkford.com, DNS:*.ww38.loiiiiipop99.com, DNS:*.ww38.netspor166.live, DNS:*.ww38.pontosnatroca.com, DNS:*.www.sillyslimes.com, DNS:*.yjbao94.com, DNS:*.your-dream.store, DNS:*.zaion.store, DNS:24sellergears.com, DNS:alevae.co, DNS:asadosellegado.com, DNS:ayu-cell12.net, DNS:bitpoolfarm.com, DNS:bookandcourse.co, DNS:camaras-de-seguridad.online, DNS:campcreekliving.com, DNS:erothota.com, DNS:fastpass.live, DNS:find-myself.online, DNS:gironacity.net, DNS:highly-grand-shelter.org, DNS:hkford.com, DNS:ideassimples.xyz, DNS:k5181.com, DNS:kt797.net, DNS:loiiiiipop99.com, DNS:mathtutorinmiami.com, DNS:netspor166.live, DNS:pasundaytoday.com, DNS:pontosnatroca.com, DNS:profresearch.net, DNS:rentenrechner.online, DNS:scinvesting.com, DNS:sillyslimes.com, DNS:softglowmusic.com, DNS:star-line.online, DNS:suroten.com, DNS:ttmethod.com, DNS:used-cars-81693.com, DNS:vishu.store, DNS:yjbao94.com, DNS:your-dream.store, DNS:zaion.store
Call log:
  - → GET https://reques.in/api/users?page=2
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.25 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

    at C:\Basavaraj\PlaywrightAutomationRS\tests\APITest.spec.js:6:35
```

# Test source

```ts
   1 | import {test,expect} from '@playwright/test'
   2 |
   3 |
   4 | test.only('Get users',async ({request})=>{
   5 |
>  6 |     const response= await request.get('https://reques.in/api/users?page=2')
     |                                   ^ Error: apiRequestContext.get: Hostname/IP does not match certificate's altnames: Host: reques.in. is not in the cert's altnames: DNS:*.24sellergears.com, DNS:*.alevae.co, DNS:*.asadosellegado.com, DNS:*.autodiscover.asadosellegado.com, DNS:*.ayu-cell12.net, DNS:*.bitpoolfarm.com, DNS:*.bookandcourse.co, DNS:*.camaras-de-seguridad.online, DNS:*.campcreekliving.com, DNS:*.com.hkford.com, DNS:*.cpanel.asadosellegado.com, DNS:*.dr.hkford.com, DNS:*.erothota.com, DNS:*.fastpass.live, DNS:*.find-myself.online, DNS:*.gironacity.net, DNS:*.highly-grand-shelter.org, DNS:*.hkford.com, DNS:*.ideassimples.xyz, DNS:*.k5181.com, DNS:*.kt797.net, DNS:*.loiiiiipop99.com, DNS:*.m.hkford.com, DNS:*.mail.ttmethod.com, DNS:*.mathtutorinmiami.com, DNS:*.netspor166.live, DNS:*.pasundaytoday.com, DNS:*.pontosnatroca.com, DNS:*.profresearch.net, DNS:*.random.pontosnatroca.com, DNS:*.rentenrechner.online, DNS:*.scinvesting.com, DNS:*.selflove.softglowmusic.com, DNS:*.shopify.vishu.store, DNS:*.sillyslimes.com, DNS:*.softglowmusic.com, DNS:*.sso.suroten.com, DNS:*.star-line.online, DNS:*.suroten.com, DNS:*.ttmethod.com, DNS:*.used-cars-81693.com, DNS:*.users.hkford.com, DNS:*.vishu.store, DNS:*.ww1.hkford.com, DNS:*.ww25.netspor166.live, DNS:*.ww25.pontosnatroca.com, DNS:*.ww25.scinvesting.com, DNS:*.ww38.hkford.com, DNS:*.ww38.loiiiiipop99.com, DNS:*.ww38.netspor166.live, DNS:*.ww38.pontosnatroca.com, DNS:*.www.sillyslimes.com, DNS:*.yjbao94.com, DNS:*.your-dream.store, DNS:*.zaion.store, DNS:24sellergears.com, DNS:alevae.co, DNS:asadosellegado.com, DNS:ayu-cell12.net, DNS:bitpoolfarm.com, DNS:bookandcourse.co, DNS:camaras-de-seguridad.online, DNS:campcreekliving.com, DNS:erothota.com, DNS:fastpass.live, DNS:find-myself.online, DNS:gironacity.net, DNS:highly-grand-shelter.org, DNS:hkford.com, DNS:ideassimples.xyz, DNS:k5181.com, DNS:kt797.net, DNS:loiiiiipop99.com, DNS:mathtutorinmiami.com, DNS:netspor166.live, DNS:pasundaytoday.com, DNS:pontosnatroca.com, DNS:profresearch.net, DNS:rentenrechner.online, DNS:scinvesting.com, DNS:sillyslimes.com, DNS:softglowmusic.com, DNS:star-line.online, DNS:suroten.com, DNS:ttmethod.com, DNS:used-cars-81693.com, DNS:vishu.store, DNS:yjbao94.com, DNS:your-dream.store, DNS:zaion.store
   7 |    console.log(await response.json());
   8 |    expect(response.status()).toBe(200)
   9 |
  10 | })
  11 |
  12 | test('Create user', async ({request})=>{
  13 |
  14 |
  15 | })
  16 |
  17 | test('Update user', async ({request})=>{
  18 |
  19 |
  20 | })
  21 |
  22 |
  23 | test('Delete user', async ({request})=>{
  24 |
  25 |     
  26 | })
```