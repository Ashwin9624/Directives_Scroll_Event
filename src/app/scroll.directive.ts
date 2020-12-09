import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[scroll]"
})
export class ScrollDirective {
  constructor() {}

  @HostListener("window:scroll")
  onWindowScroll() {
    alert("You are Scrolling!");
  }
}
