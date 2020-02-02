import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProgressbarModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
