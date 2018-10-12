import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import HelloWorld from "./components/HelloWorld";
import AnotherComponent from "./components/AnotherComponent";

export const routes = [
  { path: "", component: Home },
  { path: "/home", component: Home },
  { path: "/helloworld", component: HelloWorld },
  { path: "/another", component: AnotherComponent }
];

/*export const routes = [
  { path: '', component: Home },
  { path: '/home', component: Home },
  {
    path: '/user', component: User, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, name: 'userDetail' },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]
  }
];
*/
