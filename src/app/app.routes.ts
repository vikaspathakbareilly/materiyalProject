import { Routes } from '@angular/router';

export const routes: Routes = [{

    path:"", loadComponent:()=>import("./home/home.component").then(m=>m.HomeComponent)
},

{path:"about-us", loadComponent:()=>import("./about-us/about-us.component").then(m=>m.AboutUsComponent)}
];
