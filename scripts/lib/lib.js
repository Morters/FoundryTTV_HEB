function checkRtl( character ) {
    var RTL = ['ץ','ת','צ','מ','נ','ה','ב','ס','ז','ף','ך','ל','ח','ח','י','ע','כ','ג','ד','ש','פ','ם','ן','ו','ט','א','ר','ק'];
    return RTL.indexOf( character ) > -1;
};

var divs = document.getElementsByTagName( 'div' );

for ( var index = 0; index < divs.length; index++ ) {
    if( checkRtl( divs[index].textContent[0] ) ) {
        divs[index].className = 'rtl';
    } else {
        divs[index].className = 'ltr';
    };
};
