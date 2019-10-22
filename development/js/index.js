document.addEventListener("DOMContentLoaded", function () {
    var app = new Vue({
        el: '#vue-container',
        data: {
            currentYear: new Date().getFullYear(),
            languagesAvailable: ['pl', 'en'],
            language: 'pl',
            aboutUs: ['O nas', 'About us'],
            offer: ['Oferta', 'Offer'],
            summer: ["Lato", "Summer"],
            autumn: ["Jesień", "Autumn"],
            winter: ["Zima", "Winter"],
            spring: ["Wiosna", "Spring"],
            elegant: ["Eleganckie", "Elegant"],
            designed: ["Stylowe", "Designed"],
            comfortable: ["Komfortowe", "Comfortable"],
            convenient: ["Wygodne", "Convenient"],
            storeOutlet: ['Sklep Outlet', 'Outlet Store'],
            address: ['Informacje kontakowe', 'Contact Info'],
            cooperation: [`WSPÓŁPRACA, dzięki której naszymi głównymi odbiorcami są hurtownie, sieci handlowe oraz uznane na świecie marki obuwnicze.
                        Jesteśmy w stanie przygotować obuwie dopasowane do wymagań oraz porzeb naszych klientów.
                        Jesteśmy otwarci na nowe wyzwania oraz proponujemy atrakcyjne warunki współpracy.`,
                `COOPERATION, thanks to which our main customers are wholesalers, retail chains and internationally recognized footwear brands.
                                                 We are able to prepare footwear tailored to the requirements and needs of our customers.
                                                 We are open to new challenges and we offer attractive terms of cooperation.`
            ],
            history: [`HISTORIA Firmy "AGA" zaczyna się w 1994 roku, gdzie zaczyna się projektowanie oraz produckaj
                        najwyższej jakości obuwia
                        damskiego z wysokogatunkowych skór. Używamy najwyższej jakości komponentów z całej Europy między
                        innymi pochodzenia Polskiego, Tureckiego, Hiszpańskiego oraz Włoskiego.
                        Nasze obuwie cechuje komfort użytkowania, zróżnicowane wzornictwo ale przede wszystkim wysoka
                        jakość wykonania.`,
                `HISTORY of "AGA" begins in 1994, where design and production begin
                                         top quality footwear
                                         women's high-quality leathers. We use the highest quality components from all over Europe between
                                         other Polish, Turkish, Spanish and Italian origin.
                                         Our footwear is characterized by comfort of use, diverse designs but above all high
                                         production quality.`
            ],
            design: [`DESIGN, solidne wykonanie oraz przystępna cena produktów, pozwoliły zdobyć naszej marce
            uznanie konsumentów na rynku Polskim oraz Europejskim (Węgry, Czechy, Słowacja, Rosja,
            Litwa, Ukraina, Niemcy, Holandia.)`, `DESIGN, solid workmanship and affordable price of products have allowed us to win our brand
                         recognition of consumers on the Polish and European market (Hungary, Czech Republic, Slovakia, Russia,
                         Lithuania, Ukraine, Germany, the Netherlands.)`],
            contact: ['Kontakt', 'Contact'],
            message: 'Hello Vue!'
        },
        created() {
            language = 'pl';
        },
        methods: {
            translate: function (word) {
                if (this.language === 'pl') {
                    return word[0];
                } else if (this.language === 'en') {
                    return word[1];
                }
            }
        }
    });
    var storeOutlet = $('#store-outlet');
    AOS.init();
    navigation();
    gallery();
    

    function gallery() {
        var galleryBtns = $('#about-us .collection-title.section-title span');
        var seasons = ["summer", "autumn", "winter", "spring"];

        seasons["summer"] = storeOutlet.find('.summer');
        seasons["autumn"] = storeOutlet.find('.autumn');
        seasons["winter"] = storeOutlet.find('.winter');
        seasons["spring"] = storeOutlet.find('.spring');
        galleryBtns.on('click', event =>{
            var season = event.target.parentElement.className.replace('Btn','');
            for( let i = 0; i< galleryBtns.length; i++) {
                galleryBtns[i].children[0].classList.remove('season-active');
            }
            event.target.className += "season-active";

            switch(season) {
                case "summer" :
                seasons["summer"].find('.gallery').css('opacity','1');
                seasons["autumn"].find('.gallery').css('opacity','0');
                seasons["winter"].find('.gallery').css('opacity','0');
                seasons["spring"].find('.gallery').css('opacity','0');
                break;
                case "autumn" :
                seasons["summer"].find('.gallery').css('opacity','0');
                seasons["autumn"].find('.gallery').css('opacity','1');
                seasons["winter"].find('.gallery').css('opacity','0');
                seasons["spring"].find('.gallery').css('opacity','0');
                break;
                case "winter" :
                seasons["summer"].find('.gallery').css('opacity','0');
                seasons["autumn"].find('.gallery').css('opacity','0');
                seasons["winter"].find('.gallery').css('opacity','1');
                seasons["spring"].find('.gallery').css('opacity','0');
                break;
                case "spring" :
                seasons["summer"].find('.gallery').css('opacity','0');
                seasons["autumn"].find('.gallery').css('opacity','0');
                seasons["winter"].find('.gallery').css('opacity','0');
                seasons["spring"].find('.gallery').css('opacity','1');
                break;
            }
        });
    }
    function initMap() {
        // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
    // $('.carousel').carousel({
    //     interval: 5000
    // });
    function navigation() {
        $("#about-us-nav").click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#about-us").offset().top
            }, 2000);
        });
        $("#offer-nav").click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: storeOutlet.offset().top
            }, 2000);
        });
        $("#contact-nav").click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#contact").offset().top
            }, 2000);
        });
    }



});