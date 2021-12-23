import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { LayoutComponent } from "./_shared/components/_layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: StartComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
