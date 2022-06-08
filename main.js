/* En funktion der viser den specifikke emne valg i vi tilbyder siden */
function showHideSmed(){
    document.getElementById("Smedarbejde").style.display = "block";
    document.getElementById("Hydraulik").style.display = "none";
    document.getElementById("Syn").style.display = "none";
    document.getElementById("Custom").style.display = "none";
    
    document.getElementById("offersText").innerHTML = "Hos TRÆKSMEDEN ApS bearbejder vi mange forskellige typer af projekter, her indgår smedearbejde. Vi går meget ind for at tingene skal være målt og opsat korrekt. Vi udfører arbejdet på alle de måder der er nødvendige i forhold til projektet.<br><br> Har du brug for noget svejsning eller generelt smedearbejde klaret? Så kig gerne videre på siden og henvend dig til vores kontakt funktion.";
    document.getElementById("offersText").style.paddingTop = "20px";
    document.getElementById("offerHeadText").innerHTML ="Smedarbejde";
}
function showHideHyd(){
    document.getElementById("Smedarbejde").style.display = "none";
    document.getElementById("Hydraulik").style.display = "block";
    document.getElementById("Syn").style.display = "none";
    document.getElementById("Custom").style.display = "none";

    document.getElementById("offersText").innerHTML = "Hos TRÆKSMEDEN ApS udfører vi reparationer på hydraulikker, såsom slanger der skal skiftes, stempler der skal ordnes og generelt elektronik som indgår i hydraulikken.<br><br> Har din vogn brug for et tjek? Så kig gerne videre på siden og henvend dig til vores kontakt funktion.";
    document.getElementById("offersText").style.paddingTop = "20px";
    document.getElementById("offerHeadText").innerHTML ="Hydraulik"
}
function showHideSyn(){
    document.getElementById("Smedarbejde").style.display = "none";
    document.getElementById("Hydraulik").style.display = "none";
    document.getElementById("Syn").style.display = "block";
    document.getElementById("Custom").style.display = "none";

    document.getElementById("offersText").innerHTML = "Hos TRÆKSMEDEN ApS fremfører vi syn og generelle årstjek på kraner, lifte, wire/krog hejs samt el for at få dem til at være i stand til at udføre efter loven.<br><br> Har du behov for at få et eftersyn på dine kraner, lifte m.m.? Så kig gerne videre på siden og henvend dig til vores kontakt funktion.";
    document.getElementById("offersText").style.paddingTop = "20px";
    document.getElementById("offerHeadText").innerHTML ="Syn"
}
function showHideCus(){
    document.getElementById("Smedarbejde").style.display = "none";
    document.getElementById("Hydraulik").style.display = "none";
    document.getElementById("Syn").style.display = "none";
    document.getElementById("Custom").style.display = "block";

    document.getElementById("offersText").innerHTML = "Hos TRÆKSMEDEN ApS fremfører vi syn og generelle årstjek på kraner, lifte, wire/krog hejs samt el for at få dem til at være i stand til at udføre efter loven.<br><br> Har du behov for at få et eftersyn på dine kraner, lifte m.m.? Så kig gerne videre på siden og henvend dig til vores kontakt funktion.";
    document.getElementById("offersText").style.paddingTop = "20px";
    document.getElementById("offerHeadText").innerHTML ="Custom"
}
/* Alert knap til hvis man ikke har udfyldt boksnene - vi tog i brug af https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert */
function alertButton(){
    var fname = document.forms["contactForm"]["first-name"].value;
    var lname = document.forms["contactForm"]["last-name"].value;
    var add = document.forms["contactForm"]["address"].value;
    var hmember = document.forms["contactForm"]["house-number"].value;
    var city = document.forms["contactForm"]["city"].value;
    var zcode = document.forms["contactForm"]["zip-code"].value;
    var email = document.forms["contactForm"]["e-mail"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var msg = document.forms["contactForm"]["message"].value;

    if(fname == "" || lname == "" || add == "" || hmember == "" || city == "" || zcode == "" || email == "" || phone == "" || msg == "") {
        alert("Felterne skal udfyldes");
        return false
    } else {
        alert("Din besked er blevet sendt!")
    } 
}







/* Desktop Navbar functions */
/* Vi har benyttet informationerne fra dette link omkring hvordan vi kan benytte Javascript til at dirigere rundt til links igennem siderne.
https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html */
function navbarForside(){
    window.location.href = "index.html";
}
function navbarVitilbyder(){
    window.location.href = "vi_tilbyder.html";
}
function navbarOmOs(){
    window.location.href = "om_os.html";
}
function navbarKontaktOs(){
    window.location.href = "kontakt_os.html";
}
function navbarUdlejning(){
    window.location.href = "udlejning.html";
}

/* Mobile Navbar functions */
function mobileNav() {
    var x = document.getElementById("mobileNavbarLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* Contact Button Elements */
function kontaktOs(){
    window.location.href = "kontakt_os.html";
}
function formular(){
    /* Ide benyttet fra Geeksforgeeks.org omkring redirecting til anden urls element id
    https://www.geeksforgeeks.org/how-to-redirect-to-a-particular-section-of-a-page-using-html-or-jquery/*/
    window.location.href = "kontakt_os.html#contactForm";
}

/* For at skifte tilstanden mellem ledig eller ikke ledig */
/* ideen er bygget med fra inspiration - https://www.w3schools.com/js/tryit.asp?filename=tryjs_lightbulb */
function changeImage() {
    var gen = document.getElementById('GeneratorOption').value;
    var var1 = document.getElementById('VarmeBlæsere1Option').value;
    var bor1 = document.getElementById('boremaskine1Option').value;
    var var2 = document.getElementById('VarmeBlæsere2Option').value;
    var bor3 = document.getElementById('boremaskine3Option').value;
    var bor2 = document.getElementById('boremaskine2Option').value;
    var pla = document.getElementById('pladevibratorerOption').value;
    var pla1 = document.getElementById('pladevibratorer1Option').value;
    var pla2 = document.getElementById('pladevibratorer2Option').value;
    
    var imgGen = document.getElementById('generatorImg');
    var imgVB1 = document.getElementById('Varmeblæsere1Img');
    var imgBM1 = document.getElementById('Boremaskine1Img');
    var imgVB2 = document.getElementById('Varmeblæsere2Img');
    var imgBM3 = document.getElementById('Boremaskine3Img');
    var imgBM2 = document.getElementById('Boremaskine2Img');
    var imgPla = document.getElementById('PladevibratorerImg');
    var imgPV1 = document.getElementById('Pladevibratorer1Img');
    var imgPV2 = document.getElementById('pladevibratorer2Img');

    
    /* Generator */
    if (gen == 'Ledig') {
        imgGen.src = 'gallery/udlejning/Generator.png';
        console.log("Generator er ledig");
    } else if(gen == 'IkkeLedig') {
        imgGen.src = 'gallery/udlejning/Generator_ikke_ledig.png' ;
        console.log("Generator er ikke ledig");
    }

    /* VarmeBlæsere1 */
    if (var1 == 'Ledig') {
        imgVB1.src = 'gallery/udlejning/Varmeblæsere_1.png';
        console.log("Varmeblæsere 9kw er ledig");
    } else if(var1 == 'IkkeLedig') {
        imgVB1.src = 'gallery/udlejning/Varmeblæsere_1_ikke_ledig.png' ;
        console.log("Varmeblæsere 9kw er ikke ledig");
    }

    /* boremaskine1 */
    if (bor1 == 'Ledig') {
        imgBM1.src = 'gallery/udlejning/Boremaskine_1.png';
        console.log("boremaskine Bosch er ledig");
    } else if(bor1 == 'IkkeLedig') {
        imgBM1.src = 'gallery/udlejning/Boremaskine_1_ikke_ledig.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

    /* Varmeblæsere2 */
    if (var2 == 'Ledig') {
        imgVB2.src = 'gallery/udlejning/Varmeblæsere_2.png';
        console.log("boremaskine Bosch er ledig");
    } else if(var2 == 'IkkeLedig') {
        imgVB2.src = 'gallery/udlejning/Varmeblæsere_2_ikke_ledig.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

    /* boremaskine3 */
    if (bor3 == 'Ledig') {
        imgBM3.src = 'gallery/udlejning/Boremaskine_3.png';
        console.log("boremaskine Bosch er ledig");
    } else if(bor3 == 'IkkeLedig') {
        imgBM3.src = 'gallery/udlejning/Boremaskine_3_ikke_ledig.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

    /* boremaskine2 */
    if (bor2 == 'Ledig') {
        imgBM2.src = 'gallery/udlejning/Boremaskine_2.png';
        console.log("boremaskine Bosch er ledig");
    } else if(bor2 == 'IkkeLedig') {
        imgBM2.src = 'gallery/udlejning/Boremaskine_2_ikke_ledig.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

    /* Pladevibratorer */
    if (pla == 'Ledig') {
        imgPla.src = 'gallery/udlejning/Pladevibratorer.png';
        console.log("boremaskine Bosch er ledig");
    } else if(pla == 'IkkeLedig') {
        imgPla.src = 'gallery/udlejning/Pladevibratorer_ikke_ledig.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

    /* PladeVibratorer1 */
    if (pla1 == 'Ledig') {
        imgPV1.src = 'gallery/udlejning/Pladevibratorer-1.png';
        console.log("boremaskine Bosch er ledig");
    } else if(pla1 == 'IkkeLedig') {
        imgPV1.src = 'gallery/udlejning/Pladevibratorer_-1.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

    /* Pladevibratorer2 */
    if (pla2 == 'Ledig') {
        imgPV2.src = 'gallery/udlejning/Pladevibratorer-2.png';
        console.log("boremaskine Bosch er ledig");
    } else if(pla2 == 'IkkeLedig') {
        imgPV2.src = 'gallery/udlejning/Pladevibratorer_2_ikke_ledig.png' ;
        console.log("boremaskine Bosch er ikke ledig");
    }

}