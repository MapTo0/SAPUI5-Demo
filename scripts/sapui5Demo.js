function generateHeader() {
    var header = new sap.ui.commons.ApplicationHeader("appHeader");

    header.setLogoSrc("https://sapui5.hana.ondemand.com/sdk/docs/api/images/logo_txtonly_244x55.png");
    header.setLogoText("Welcome to SAPUI5 ~ ");
    header.setDisplayWelcome(true);
    header.setUserName("Super Mario");
    header.setDisplayLogoff(false);

    //here comes the magic
    header.placeAt("content");
}

function generateCard() {

    var oBadge = new sap.suite.ui.commons.BusinessCard({
        firstTitle: new sap.ui.commons.Link({
            id: "title",
            text: "Martin Hristov",
            tooltip: "front-end developer",
            href: "http://goo.gl/mg61Db",
            target: "http://goo.gl/mg61Db"
        }),
        iconPath: "https://media.licdn.com/media/p/7/005/01f/041/3b6732e.jpg",
        secondTitle: "IT enthusiast",
        imageTooltip: "Martin Hristov",
        width: "300px",
    });

    var oContent = new sap.ui.commons.layout.MatrixLayout({
        widths: ["100px", "100px"]
    });
    oContent.createRow(new sap.ui.commons.TextView({
        text: "Phone:"
    }), new sap.ui.commons.TextView({
        text: "+359 899 179 582"
    }));
    oBadge.setContent(oContent);

    oBadge.placeAt("content");
}

function rateMe() {
    var aValues = [1, 3, 6, 4, 3]; //Existing Rating values

    //Helper function to compute the average rating and to update the controls

    function setRatingValue() {
        var val = 0;
        for (var idx in aValues) {
            val = val + aValues[idx];
        }
        val = Math.round(val * 100 / aValues.length) / 100;
        oRating.setAverageValue(val);
        oRating.setValue(sap.ui.commons.RatingIndicator.NoValue);
        alert("Thanks for voting !");
    };
    var oRating = new sap.ui.commons.RatingIndicator("myRating", {
        id: "rate",
        maxValue: 6,
        visualMode: sap.ui.commons.RatingIndicatorVisualMode.Continuous
    });
    oRating.attachChange(function() {
        aValues.push(oRating.getValue());
        setRatingValue();
    });

    oRating.placeAt("content");
}

function lorem() {
    var text = new sap.ui.commons.TextArea({
        id: "text-area",
        editable: false,
        width: "500px",
        height: "130px"

    });
    text.setValue("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    text.setTooltip("This is a lorem");
    text.placeAt("content");
}


function createGallery() {
    //Create the Carousel control
    var oCarousel = new sap.ui.commons.Carousel('gallery');
    oCarousel.setWidth("100%");
    oCarousel.setOrientation("horizontal");

    oCarousel.addContent(new sap.ui.commons.Image("IMG1", {
        src: "http://2.bp.blogspot.com/-0ddHdI3cqN4/TwCdpOaB15I/AAAAAAAAAI4/n1GeLQyyEt4/s1600/New+cool+cars+wallpapers.jpg",
        alt: "Ferrary",
        width: "200px",
        height: "150px"
    }));

    oCarousel.addContent(new sap.ui.commons.Image("IMG2", {
        src: "http://4.bp.blogspot.com/-9WjlouNtAG4/Tv2VKY4M-7I/AAAAAAAAABo/iOpggJMwfv0/s1600/hd_car_wallpapers.jpg",
        alt: "some car",
        width: "100%",
        height: "100%"
    }));

    oCarousel.addContent(new sap.ui.commons.Image("IMG3", {
        src: "http://1.bp.blogspot.com/-ekDwZA8Kto0/Tv2VMtIF97I/AAAAAAAAABw/FRy9vpngFLc/s1600/hd_car_wallpapers+3.jpg",
        alt: "sample image",
        width: "100%",
        height: "100%"
    }));

    oCarousel.addContent(new sap.ui.commons.Image("IMG4", {
        src: "http://1.bp.blogspot.com/-gp6pRqhHlk8/Tv2VPLi3ZZI/AAAAAAAAACA/eM4Nl2mw8Qs/s1600/hd_car_wallpapers++2.jpg",
        alt: "sample image",
        width: "100%",
        height: "100%"
    }));

    oCarousel.addContent(new sap.ui.commons.Image("IMG5", {
        src: "http://1.bp.blogspot.com/-WjX90QlHTS4/Tv2VQ_G1F5I/AAAAAAAAACI/2OUzOpIhQ3s/s1600/hd_car_wallpapers++4.jpg",
        alt: "sample image",
        width: "100%",
        height: "100%"
    }));

    oCarousel.addContent(new sap.ui.commons.Image("IMG6", {
        src: "http://2.bp.blogspot.com/-m4TcyHQuXcs/Tv2VNuZUkgI/AAAAAAAAAB4/AhxM1eFKihI/s1600/hd_car_wallpapers++1.jpg",
        alt: "sample image",
        width: "100%",
        height: "100%"
    }));

    oCarousel.placeAt("content");
}
generateHeader();
generateCard();
rateMe();
lorem();
createGallery();