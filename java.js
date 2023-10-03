// const ay = parseInt(prompt("lütfen ay girin (1-12)"));
// const gün = parseInt(prompt("lütfen gün girin (1-31)"));
// if ( ay < 1 || ay > 12 || gün < 1 || gün > 31){
//     console.log("geçersiz giriş");
// }else {
//     let mevsim;
//     if (( ay===12 && gün>=21 ) || (ay === 1) || ( ay===2 && gün<=20) ){
//         mevsim="kiş"
//     }else if(( ay>=3 && ay<=5 ) || ( ay===2 && gün>=21) ){
//         mevsim = "ilkbahar"
//     } else if ((ay>=6 && ay<=8) || ( ay===9 && gün<=21) ){
//         mevsim = "yaz"
//     } else{
//         mevsim ="sonbahar"
//     }
//     console.log(mevsim);
// }

const yil = parseInt(prompt("lütfen yıl bilgisi giriniz"))
if ( (yil%4==0) && (yil%100!==0) ){
    console.log("girilen yıl artık yıldır");
} else if ( yil%400==0 ){
    console.log("girilen yıl artık yıldır");
} else {
    console.log("girilen yıl artık yıl değildir");
}

