var digit = "0123456789";
var OTP = "";
for (var i = 0; i <= 6; i++) {
  OTP += digit(Math.floor(Math.random() * 10));
}
console.log(OTP);
