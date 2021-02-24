import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { ComponentTwoComponent } from "./component-two/component-two.component";
import { TransferSignalService } from "./transfer-signal.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  bootstrap: [AppComponent],
  providers: [TransferSignalService]
})
export class AppModule {}
