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