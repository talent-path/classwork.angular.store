## Introduction ##

Up until this point, most of the instruction in this code along has been focused towards making individual parts of our website to work. In this section, we'll be taking a step back and focusing on the "bigger picture" of building a website

One of the main ways we are able to architect out our pages is through angular's ``routing``. This will let us make use of the website url and alter what shows up on our page at different times. Something to note is that navigating through the url bar on your browser will restart your application and lose data in your browser's ``localStorage``. If you want data to persist, it will have to be stored in ``sessionStorage`` or ``cookies``. This will come in to play with our cart's ability to persist.

## Refactoring from Components to Pages ##

* in your components folder, add a folder named ``pages`` and generate a ``shop``,``checkout``, and ``home`` components into that folder.


* in your ``app.component.ts`` take the content that was contained within the ``page`` div and add it to the ``shop`` page, dont forget to take the css as well!
* add in a ``<router-outlet>`` tag to replace the page you just made.
    * this tag represents other components, depending on the url provided. We'll see how to use this shortly.

```html
<div class="title">
    <p>{{title.toUpperCase()}}</p>
</div>
<router-outlet></router-outlet>
```

* Navigate to ``app-routing.module.ts``

In this file, you'll see a const variable ``routes`` of type ``Routes[]``. This is where we will store all the url paths for our application. Each Route will have a ``path`` and a ``component``

* Add the following routes as shown:

```Typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShopComponent } from './components/pages/shop/shop.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'/shop', component:ShopComponent},
                        {path:'/checkout', component:CheckoutComponent}
                ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

* Now navigate to your website. You'll see that instead of the page we had built, ``localhost:4200`` navigates to a page that has the default text for the ``home component``

![blank page](./assets/blankhome.png)

* Navigate to ``localhost:4200/shop`` and you'll see that the page we made earlier now lives at that route.

![shop page](./assets/localshop.png)