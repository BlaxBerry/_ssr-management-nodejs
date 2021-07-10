## Blog and Users Management

**SSR**(Server Side Rendering) Blogs and Users' Infomation Management

### Directory

```js
|- model  // set database
    |-connect.js // connect to Mongodb
    |- user.js // add user
|- public  // static resource
    |- images
    |- upload
    |- css
    |- js
        |- common.js // handel login form
|- route  // routes
    |- home.js  //
    |- admin.js  // user management routes
|- views  // templates
    |- common
        |- header.art  // top nav
        |- aside.art   // left nav
        |- layout/art  // HTML bone
    |- admin
        |- login.art
        |- users.art  // users list page
        |- articles.art  // articles  page
        |- add-user.art  // add
        |- add-article.art  // add
        |- edit-user.art  // edit
        |- edit-article.art  //edit
        |- error.art // login error page
|- index.js  // mian JS file
```

---

### Tech Stack

- Node.js

- Express.js

- MongeDB

- art-template(express-art-template)

- bcrypt

- session(express-session)

---

## Start
```bash
npm install 

nodemon index.js
```

**SSR Server running at localhost:80**


localhost/admin/login
![](./public/images/01.png)
**Super User**: 
- email: andy@qq.com 
- password: 123456

```js
// created the first user(init Super User)
/*
 function createTextUser() {
   User.create({
     username: "Andy",
     email: "andy@qq.com",
     password: "123456",
     identity: "admin",
     status: 0,
   })
     .then(() => {console.log("new user is created")})
     .catch(() => {console.log("falied to create a new user")})
 }
 createTextUser();
 */

// created the first user by bcrypt
async function createTextUser() {
  // bcrypt
  const bcrypt = require("bcrypt");
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash("123456", salt);
  User.create({
    username: "Andy",
    email: "andy@qq.com",
    password: pass,
    identity: "admin",
    status: 0,
  })
    .then(() => {console.log("new user is created")})
    .catch(() => {console.log("falied to create a new user")});
}
createTextUser();
```

---

localhost/admin/users
![](./public/images/02.png)

---

localhost/admin/articles
![](./public/images/03.png)

---

localhost/admin/edit/user
![](./public/images/06.png)
