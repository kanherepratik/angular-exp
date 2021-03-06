import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HeroService } from "./hero.service";
import { AppComponent } from "./app.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

@NgModule({
  declarations: [AppComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
