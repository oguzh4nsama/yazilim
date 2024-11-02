//soru 1
export const userValidation = (Str) => {
    console.log(Str);

    if (Str.length >= 4 && Str.length <= 25 &&
        (/[a-zA-Z]/).test(Str.slice(0, 1)) &&
        (/^\w/).test(Str) &&
        (/[a-zA-Z0-9]/).test(Str.slice(-1))) {
        return true;
    }
    else {
        return false;
    }
}














//ÖRNEK 4; girilen değerin son değerinin harf ve sayı olması kontrolü. 
//----------------------------------------------------------------------------
//--(/[a-zA-Z0-9]/).test(Str.slice(-1))--
/* export const userValidation = (Str) => {
    console.log(Str);

    if (Str.length >= 4 && Str.length <= 25 &&
        (/[a-zA-Z]/).test(Str.slice(0, 1)) &&
        (/^\w/).test(Str) &&
        (/[a-zA-Z0-9]/).test(Str.slice(-1))) {
        return true;
    } else {
        return false;
    }
}*/

//ÖRNEK; ÜÇ;    girilen değerin harf ve sayı dışı cizim kontrolü.
//-------------------------------------------------------------------------------
//--(/^\w/).test(Str)--
/*export const userValidation = (Str) => {
    console.log(Str);

    if (Str.length >= 4 && Str.length <= 25 &&(/[a-zA-Z]/).test(Str.slice(0,1))&&(/^\w/).test(Str)) {
        return true;
    } else {
        return false;
    }
} */

//ÖRNEK İKİ;    girilen değerin ilk harfini kontrol eden kod.
//-------------------------------------------------------------------------------
//--(/[a-zA-Z]/).test--
/* export const userValidation = (Str) => {
    console.log(Str);

    if (Str.length >= 4 && Str.length <= 25 &&(/[a-zA-Z]/).test(Str.slice(0,1))) {
        return true;
    } else {
        return false;
    }
} */

//ÖRNEK BİR;    4-25 arası tuş giriminde fazla olup olmama durumu
//-------------------------------------------------------------------------------
// length kullanımı.
// userValidation kullanımı
/*
    export const userValidation = (Str) => {
            console.log(Str);

            if (Str.length >= 4 && Str.length <= 25) {
            return true;
        } else {
             return false;
        }
} */

//-------------------------------------------------------------------------------