function balikkata(stri) {
 var kat = stri.split("").reverse().join("");
 if (kat === stri) {
     return true;
 } else {
     return false
 }
    }
console.log(balikkata('madam'));
console.log(balikkata('kursi'));
console.log(balikkata('step on no pets'));
console.log(balikkata('kajian'));