//! moment.js locale configuration
//! locale : kazakh (kk)
//! author : Arystanbek-kkwiki : https://github.com/Arystanbek-kkwiki

(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var kk = moment.defineLocale('uz', {
        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays : 'Жексенбі_Дүйсенбі_Сенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі'.split('_'),
        weekdaysShort : 'Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен'.split('_'),
        weekdaysMin : 'Жс_Дс_Сс_Ср_Бс_Жм_Сн'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Бүгін сағат] LT [да]',
            nextDay : '[Ертең] LT [да]',
            nextWeek : 'dddd [күні сағат] LT [да]',
            lastDay : '[Кеше сағат] LT [да]',
            lastWeek : '[Өткен] dddd [күні сағат] LT [да]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s бұрын',
            past : '%s кейін',
            s : 'бірнеше секунт',
            m : 'бір минут',
            mm : '%d минут',
            h : 'бір сағат',
            hh : '%d сағат',
            d : 'бир күн',
            dd : '%d күн',
            M : 'бір ай',
            MM : '%d ай',
            y : 'бір жыл',
            yy : '%d жыл'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return kk;

}));
