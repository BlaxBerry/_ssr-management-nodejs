## Blog and Users Management

### Directory
```js
|- model  // set database
|- public  // static resource
    |- images
    |- upload
    |- css
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
|- index.js  // mian JS file
```

---

### Tech Stack
- Node.js

- Express.js

- MongeDB

- art-template(express-art-template)

---
localhost/admin/login
![](./public/images/01.png)

---
localhost/admin/users
![](./public/images/02.png)

---
localhost/admin/articles
![](./public/images/03.png)

---
localhost/admin/edit/user
![](./public/images/06.png)