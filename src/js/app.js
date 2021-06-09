import "./utilities/ready"
import LazyLoad from "vanilla-lazyload"
// import "./components/Menubar"
// import "./components/MenubarItem"
// import "./components/MenuItem"
// import "./components/PopupMenu"
// import {TreeLinks} from "./components/TreeLinks"
// import { MobileMenu } from "./components/MobileMenu"

const lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

ready(function () {
  const applyButton = document.querySelector('.menu-item')
  applyButton.addEventListener('click', function (event) {
    gtag('event', "sign_up", { 'value': 1 });
  }, false);

  

});