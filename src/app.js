/* eslint-disable */
import "bootstrap";
import "./style.css";

/* import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */

let pronoun = ["the", "our"];
let adj = ["greatt", "big", "small", "huge"];
let noun = ["jogger", "racoon", "dancer", "killer"];
let diffDomain = [".com", ".net", ".org", ".cl"];
window.onload = function() {
  let newDomain;
  for (let itemP of pronoun) {
    for (let itemA of adj) {
      for (let itemN of noun) {
        for (let itemD of diffDomain) {
          newDomain = itemP + itemA + itemN + itemD;
          console.log(newDomain);
        }
      }
    }
  }
};
