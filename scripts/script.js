const STORAGE_LANGUAGE_KEY = "gold-coral-language";
const ASSET_VERSION = "20260609-2";
let currentLanguage = localStorage.getItem(STORAGE_LANGUAGE_KEY) || "en";

const translations = {
    en: {
        nav: {
            home: "Home",
            services: "Services",
            about: "About Us",
            app: "App",
            access: "Access",
            contact: "Contact"
        },
        home: {
            eyebrow: "Luxury Dominican Experience",
            status: "Website under construction · We are preparing the full experience",
            title: "We take care of everything so you can simply enjoy",
            body: "Personalized services for your daily life, your family and your special moments. From premium assistance to event planning and curated experiences with a discreet, elegant and close approach.",
            primary: "View services",
            secondary: "Request information",
            secondaryHref: "mailto:info@goldcoral.vip?subject=Initial%20Gold%20Coral%20Inquiry&body=Hello%20Gold%20Coral%20team%2C%0A%0AI%20would%20like%20to%20receive%20more%20information%20about%20your%20services.%0A%0AThank%20you.",
            label: "Signature service",
            cardTitle: "Premium assistance tailored to you",
            cardBody: "We coordinate personal, family or leisure needs with flawless execution and the level of care expected by a VIP client.",
            metricOne: "Personalized attention",
            metricTwo: "Full-service management"
        },
        services: {
            eyebrow: "Services",
            title: "Experiences and assistance tailored to you",
            intro: "Feel free to choose the service that best fits your needs, with refined, discreet and professional attention in every detail.",
            cards: [
                {
                    tag: "Tailored",
                    title: "Gold Line (bespoke)",
                    body: "Premium personalized service covering any client need such as arrangements, travel, events, chauffeur or personal assistance, always focused on total comfort and exclusivity.",
                    pointOne: "Flexible attention fully adapted to your pace.",
                    pointTwo: "Reliable support for everyday requests or special occasions."
                },
                {
                    tag: "Family trust",
                    title: "Family Line (school transport)",
                    body: "Pick-up and transfer service for children to school and activities, with optional extra care and follow-up for complete peace of mind.",
                    pointOne: "Comfortable, punctual and safe routines.",
                    pointTwo: "More peace of mind for families with demanding schedules."
                },
                {
                    tag: "Daily wellbeing",
                    title: "Home Line (cleaning, chef)",
                    body: "Household services designed to simplify daily life: cleaning, private cooking, meal preparation, home organization and essential home support.",
                    pointOne: "Practical support with a refined service standard.",
                    pointTwo: "More free time to focus on what matters."
                },
                {
                    tag: "Celebrations",
                    title: "Party Line (events)",
                    body: "Complete event and celebration planning, including decoration, catering, entertainment, music and everything needed to enjoy without worrying.",
                    pointOne: "Elegant production from start to finish.",
                    pointTwo: "Memorable experiences designed to impress."
                },
                {
                    tag: "Escapes and plans",
                    title: "Travel Line (experiences)",
                    body: "Planning of getaways and activities for families or groups, with curated experiences, VIP excursions, transport and personalized options.",
                    pointOne: "Comfortable, exclusive and well-resolved itineraries.",
                    pointTwo: "Premium details so every outing feels elevated."
                }
            ]
        },
        about: {
            eyebrow: "About us",
            title: "We turn time, organization and detail into real peace of mind",
            p1: "We are a comprehensive service created to help with everything you need, from household support and family transport to events, travel and personalized assistance.",
            p2: "We adapt to each client to offer comfortable, flexible and worry-free solutions. Our purpose is to make life easier through tailored service, trust and attention to detail.",
            p3: "We believe time is the most valuable asset, and that is why we take care of everything else.",
            mapEyebrow: "Dominican Republic",
            mapTitle: "Dominican essence, elevated",
            mapBody: "<span translate='no' class='notranslate'>Gold Coral</span> connects luxury, warmth and experience with the spirit of the Caribbean, allowing Punta Cana to stand out as a destination and reference point.",
            globeTag: "Punta Cana"
        },
        downloads: {
            eyebrow: "App",
            title: "Install the Gold Coral app",
            intro: "Take Gold Coral with you. Our home-services app connects clients with trusted providers, available on iPhone, Android and desktop.",
            lead: "Open it in your browser or install it as an app to keep it one tap away — no app store needed.",
            open: "Open the app",
            androidTitle: "Android (Chrome)",
            android: "Open <span translate='no'>goldcoral.netlify.app</span>, tap the ⋮ menu and choose “Add to Home screen” or “Install app”.",
            iosTitle: "iPhone / iPad (Safari)",
            ios: "Open <span translate='no'>goldcoral.netlify.app</span>, tap the Share button and choose “Add to Home Screen”.",
            desktopTitle: "Desktop (Chrome/Edge)",
            desktop: "Open <span translate='no'>goldcoral.netlify.app</span> and click the install ⊕ icon in the address bar."
        },
        contact: {
            eyebrow: "Contact",
            title: "Let's talk about the experience you need",
            intro: "Tell us what kind of service you are looking for and we will prepare a thoughtful, clear and tailored response. <span translate='no' class='notranslate'>Gold Coral</span> works with discreet, personalized, detail-oriented care.",
            lead: "Write to us to request information, resolve questions or start designing a bespoke experience with us.",
            pointOne: "Personalized assistance",
            pointTwo: "Professional response",
            pointThree: "Premium care",
            button: "Write to info@goldcoral.vip",
            buttonHref: "mailto:info@goldcoral.vip?subject=Gold%20Coral%20Experience%20Request&body=Hello%20Gold%20Coral%20team%2C%0A%0AI%20would%20like%20to%20receive%20information%20about%20your%20services.%20I%20am%20interested%20in%3A%0A-%20Service%20of%20interest%3A%0A-%20Approximate%20date%3A%0A-%20City%20or%20area%3A%0A-%20Additional%20details%3A%0A%0AThank%20you."
        },
        footer: {
            brand: "Luxury Dominican Experience",
            home: "Instagram",
            services: "TikTok",
            copy: "© 2026 <span translate='no' class='notranslate'>Gold Coral</span>. Premium, discreet and personalized attention."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            about: "Sobre Nosotros",
            app: "App",
            access: "Acceso",
            contact: "Contacto"
        },
        home: {
            eyebrow: "Luxury Dominican Experience",
            status: "Web en construcción · Estamos preparando la experiencia completa",
            title: "Nos ocupamos de todo para que tú solo disfrutes",
            body: "Servicios personalizados para tu día a día, tu familia y tus momentos especiales. Desde asistencia premium hasta organización de eventos y experiencias con un trato discreto, elegante y cercano.",
            primary: "Ver servicios",
            secondary: "Solicitar información",
            secondaryHref: "mailto:info@goldcoral.vip?subject=Consulta%20inicial%20Gold%20Coral&body=Hola%20equipo%20de%20Gold%20Coral%2C%0A%0AMe%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios.%0A%0AGracias.",
            label: "Servicio signature",
            cardTitle: "Asistencia premium con atención a medida",
            cardBody: "Coordinamos necesidades personales, familiares o de ocio con una ejecución impecable y el cuidado que espera un cliente VIP.",
            metricOne: "Atención personalizada",
            metricTwo: "Gestión integral"
        },
        services: {
            eyebrow: "Servicios",
            title: "Experiencias y asistencia pensadas a tu medida",
            intro: "Siente la libertad de escoger el servicio que más se adapte a tus necesidades, con una atención cuidada, discreta y profesional en cada detalle.",
            cards: [
                {
                    tag: "Personalizado",
                    title: "Línea Gold (a medida)",
                    body: "Servicio premium personalizado que cubre cualquier necesidad del cliente como gestiones, viajes, eventos, chófer o asistente personal, enfocado en comodidad total y exclusividad.",
                    pointOne: "Atención flexible y completamente adaptada a tu ritmo.",
                    pointTwo: "Soporte confiable para peticiones diarias o momentos especiales."
                },
                {
                    tag: "Confianza familiar",
                    title: "Línea Family (transporte escolar)",
                    body: "Servicio de recogida y traslado de niños al colegio y actividades, con opción de cuidado adicional y seguimiento para dar tranquilidad a los padres.",
                    pointOne: "Rutinas cómodas, puntuales y seguras.",
                    pointTwo: "Más tranquilidad para familias con agendas exigentes."
                },
                {
                    tag: "Bienestar diario",
                    title: "Línea Hogar (limpieza, chef)",
                    body: "Servicios domésticos para facilitar el día a día: limpieza, cocina a domicilio, preparación de comidas, organización del hogar y tareas básicas.",
                    pointOne: "Apoyo práctico con estándar de servicio cuidado.",
                    pointTwo: "Más tiempo libre para enfocarte en lo importante."
                },
                {
                    tag: "Celebraciones",
                    title: "Línea Party (fiestas)",
                    body: "Organización completa de eventos y celebraciones, incluyendo decoración, catering, animación, música y todo lo necesario para disfrutar sin preocuparse.",
                    pointOne: "Producción elegante y sin estrés de principio a fin.",
                    pointTwo: "Experiencias memorables diseñadas para impresionar."
                },
                {
                    tag: "Escapadas y planes",
                    title: "Línea Travel (experiencias)",
                    body: "Planificación de escapadas y actividades para familias o grupos, con experiencias organizadas, excursiones VIP, transporte y opciones personalizadas.",
                    pointOne: "Itinerarios cómodos, exclusivos y bien resueltos.",
                    pointTwo: "Detalles premium para que cada salida se viva mejor."
                }
            ]
        },
        about: {
            eyebrow: "Sobre nosotros",
            title: "Convertimos tiempo, organización y detalle en tranquilidad real",
            p1: "Somos un servicio integral pensado para ayudarte en todo lo que necesites, desde tareas del hogar y transporte familiar hasta eventos, viajes o asistencia personalizada.",
            p2: "Nos adaptamos a cada cliente para ofrecer soluciones cómodas, flexibles y sin preocupaciones. Nacemos con el objetivo de hacer la vida más fácil a nuestros clientes, ofreciendo servicios personalizados, confianza y atención al detalle.",
            p3: "Creemos que el tiempo es lo más valioso, y por eso nos encargamos de todo lo demás.",
            mapEyebrow: "República Dominicana",
            mapTitle: "Presencia con esencia dominicana",
            mapBody: "<span translate='no' class='notranslate'>Gold Coral</span> conecta lujo, calidez y experiencia con el espíritu del Caribe, dejando que Punta Cana destaque como punto de referencia.",
            globeTag: "Punta Cana"
        },
        downloads: {
            eyebrow: "App",
            title: "Instala la app de Gold Coral",
            intro: "Lleva Gold Coral en tu móvil. Nuestra app de servicios del hogar conecta a clientes con proveedores de confianza, disponible en iPhone, Android y escritorio.",
            lead: "Ábrela en el navegador o instálala como app para tenerla a un toque, sin pasar por la tienda de aplicaciones.",
            open: "Abrir la app",
            androidTitle: "Android (Chrome)",
            android: "Abre <span translate='no'>goldcoral.netlify.app</span>, toca el menú ⋮ y elige «Añadir a pantalla de inicio» o «Instalar app».",
            iosTitle: "iPhone / iPad (Safari)",
            ios: "Abre <span translate='no'>goldcoral.netlify.app</span>, pulsa el botón Compartir y elige «Añadir a pantalla de inicio».",
            desktopTitle: "Escritorio (Chrome/Edge)",
            desktop: "Abre <span translate='no'>goldcoral.netlify.app</span> y pulsa el icono de instalar ⊕ de la barra de direcciones."
        },
        contact: {
            eyebrow: "Contacto",
            title: "Hablemos de la experiencia que necesitas",
            intro: "Cuéntanos qué tipo de servicio buscas y prepararemos una respuesta cuidada, clara y adaptada a tu situación. <span translate='no' class='notranslate'>Gold Coral</span> trabaja con atención discreta, personalizada y orientada al detalle.",
            lead: "Escríbenos para solicitar información, resolver dudas o empezar a diseñar una experiencia a medida contigo.",
            pointOne: "Asistencia personalizada",
            pointTwo: "Respuesta profesional",
            pointThree: "Atención premium",
            button: "Escribir a info@goldcoral.vip",
            buttonHref: "mailto:info@goldcoral.vip?subject=Solicitud%20de%20experiencia%20Gold%20Coral&body=Hola%20equipo%20de%20Gold%20Coral%2C%0A%0AMe%20gustaría%20recibir%20información%20sobre%20sus%20servicios.%20Estoy%20interesado%2Fa%20en%3A%0A-%20Servicio%20que%20me%20interesa%3A%0A-%20Fecha%20aproximada%3A%0A-%20Ciudad%20o%20zona%3A%0A-%20Detalles%20adicionales%3A%0A%0AGracias."
        },
        footer: {
            brand: "Luxury Dominican Experience",
            home: "Instagram",
            services: "TikTok",
            copy: "© 2026 <span translate='no' class='notranslate'>Gold Coral</span>. Atención premium, discreta y personalizada."
        }
    }
};

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function setHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = value;
    }
}

function setAttribute(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attribute, value);
    }
}

function applyLanguage(language) {
    const t = translations[language] || translations.en;
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("#header-placeholder .lang-toggle button").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === language);
    });

    setText("#header-placeholder .nav-link-home", t.nav.home);
    setText("#header-placeholder .nav-link-services", t.nav.services);
    setText("#header-placeholder .nav-link-about", t.nav.about);
    setText("#header-placeholder .nav-link-app", t.nav.app);
    setText("#header-placeholder .nav-link-access", t.nav.access);
    setText("#header-placeholder .nav-cta", t.nav.contact);

    setText("#home .eyebrow", t.home.eyebrow);
    setText("#home .site-status", t.home.status);
    setText("#home h2", t.home.title);
    setText("#home .home-copy p", t.home.body);
    setText("#home .home-primary", t.home.primary);
    setText("#home .home-secondary", t.home.secondary);
    setAttribute("#home .home-secondary", "href", t.home.secondaryHref);
    setText("#home .highlight-label", t.home.label);
    setText("#home .highlight-card h3", t.home.cardTitle);
    setText("#home .highlight-card p", t.home.cardBody);
    setText("#home .highlight-metrics div:nth-child(1) span", t.home.metricOne);
    setText("#home .highlight-metrics div:nth-child(2) span", t.home.metricTwo);

    setText("#servicios .section-intro .eyebrow", t.services.eyebrow);
    setText("#servicios .section-intro h1", t.services.title);
    setText("#servicios .section-intro p", t.services.intro);

    t.services.cards.forEach((card, index) => {
        const base = `#servicios .service-card:nth-child(${index + 1})`;
        setText(`${base} .service-tag`, card.tag);
        setText(`${base} h2`, card.title);
        setText(`${base} p`, card.body);
        setText(`${base} .service-points li:nth-child(1)`, card.pointOne);
        setText(`${base} .service-points li:nth-child(2)`, card.pointTwo);
    });

    setText("#about-us .about-copy .eyebrow", t.about.eyebrow);
    setText("#about-us .about-copy h2", t.about.title);
    setText("#about-us .about-copy p:nth-of-type(1)", t.about.p1);
    setText("#about-us .about-copy p:nth-of-type(2)", t.about.p2);
    setText("#about-us .about-copy p:nth-of-type(3)", t.about.p3);
    setText("#about-us .about-map-panel .eyebrow", t.about.mapEyebrow);
    setText("#about-us .about-map-panel h3", t.about.mapTitle);
    setHTML("#about-us .about-map-panel p", t.about.mapBody);
    setText("#about-us .globe-tag", t.about.globeTag);

    setText("#descargas .downloads-intro .eyebrow", t.downloads.eyebrow);
    setText("#descargas .downloads-intro h2", t.downloads.title);
    setText("#descargas .downloads-intro p", t.downloads.intro);
    setText("#descargas .downloads-lead", t.downloads.lead);
    setText("#descargas .downloads-open-label", t.downloads.open);
    setText("#descargas .dl-android-t", t.downloads.androidTitle);
    setHTML("#descargas .dl-android", t.downloads.android);
    setText("#descargas .dl-ios-t", t.downloads.iosTitle);
    setHTML("#descargas .dl-ios", t.downloads.ios);
    setText("#descargas .dl-desktop-t", t.downloads.desktopTitle);
    setHTML("#descargas .dl-desktop", t.downloads.desktop);

    setText("#contacto .contact-intro .eyebrow", t.contact.eyebrow);
    setText("#contacto .contact-intro h2", t.contact.title);
    setHTML("#contacto .contact-intro p", t.contact.intro);
    setText("#contacto .contact-lead", t.contact.lead);
    setText("#contacto .contact-points span:nth-child(1)", t.contact.pointOne);
    setText("#contacto .contact-points span:nth-child(2)", t.contact.pointTwo);
    setText("#contacto .contact-points span:nth-child(3)", t.contact.pointThree);
    setText("#contacto .contact-mail", t.contact.button);
    setAttribute("#contacto .contact-mail", "href", t.contact.buttonHref);

    setText("#footer .footer-brand", t.footer.brand);
    setText("#footer .footer-links a:nth-child(1)", t.footer.home);
    setText("#footer .footer-links a:nth-child(2)", t.footer.services);
    setText("#footer .footer-links a:nth-child(3)", t.footer.about);
    setText("#footer .footer-links a:nth-child(4)", t.footer.contact);
    setHTML("#footer .footer-bottom p", t.footer.copy);
}

function setupLanguageSelector(root = document) {
    const toggle = root.querySelector(".lang-toggle") || document.querySelector(".lang-toggle");

    if (!toggle || toggle.dataset.bound === "true") {
        return;
    }

    toggle.dataset.bound = "true";

    toggle.querySelectorAll("button[data-lang]").forEach((button) => {
        button.addEventListener("click", () => {
            currentLanguage = button.dataset.lang;
            localStorage.setItem(STORAGE_LANGUAGE_KEY, currentLanguage);
            applyLanguage(currentLanguage);
        });
    });
}

function setupHeaderMenu(root = document) {
    const nav = root.querySelector(".site-header") || document.querySelector(".site-header");
    const toggle = root.querySelector(".nav-toggle") || document.querySelector(".nav-toggle");
    const menu = root.querySelector(".nav-menu") || document.querySelector(".nav-menu");

    if (!nav || !toggle || !menu || toggle.dataset.bound === "true") {
        return;
    }

    toggle.dataset.bound = "true";

    const updateScrolled = () => {
        nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    const closeMenu = () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
    };

    const openMenu = () => {
        menu.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close menu");
    };

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.contains("is-open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 860) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open menu");
        }
    });
}

function loadSection(filePath, targetId, callback) {
    fetch(`${filePath}?v=${ASSET_VERSION}`)
        .then((response) => response.text())
        .then((data) => {
            const target = document.getElementById(targetId);

            if (!target) {
                return;
            }

            target.innerHTML = data;
            target.classList.add("scroll-reveal");

            if (callback) {
                callback(target);
            }

            setupScrollReveal(target);
            setupLanguageSelector(target);
            applyLanguage(currentLanguage);
        });
}

function setupScrollReveal(root = document) {
    const revealItems = [
        root,
        ...root.querySelectorAll(".section-intro, .services-carousel, .about-copy, .about-panel, .contact-card, .site-footer, .highlight-card")
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealItems.forEach((item) => {
        if (!(item instanceof HTMLElement)) {
            return;
        }

        item.classList.add("reveal-item");
        observer.observe(item);
    });
}

function setupServicesCarousel(sectionRoot) {
    const track = sectionRoot.querySelector("#services-track");
    const prevButton = sectionRoot.querySelector(".service-arrow-prev");
    const nextButton = sectionRoot.querySelector(".service-arrow-next");
    const cards = Array.from(sectionRoot.querySelectorAll(".service-card"));
    let activeIndex = 0;

    if (!track || !prevButton || !nextButton || !cards.length) {
        return;
    }

    const wrapIndex = (index) => (index + cards.length) % cards.length;

    const renderCarousel = () => {
        cards.forEach((card, index) => {
            const rawOffset = index - activeIndex;
            let offset = rawOffset;

            if (offset > cards.length / 2) {
                offset -= cards.length;
            }

            if (offset < -cards.length / 2) {
                offset += cards.length;
            }

            card.dataset.position = String(offset);
            card.setAttribute("aria-hidden", Math.abs(offset) > 2 ? "true" : "false");
        });
    };

    prevButton.addEventListener("click", () => {
        activeIndex = wrapIndex(activeIndex - 1);
        renderCarousel();
    });

    nextButton.addEventListener("click", () => {
        activeIndex = wrapIndex(activeIndex + 1);
        renderCarousel();
    });

    renderCarousel();
}

function setupHomeCarousel(sectionRoot) {
    sectionRoot.querySelector(".home-carousel-progress");
}

function setupDominicanGlobe(sectionRoot) {
    const globeContainer = sectionRoot.querySelector("#globe-map");

    if (!globeContainer || typeof Globe === "undefined") {
        return;
    }

    const darkGlobeTexture = "//unpkg.com/three-globe/example/img/earth-dark.jpg";
    const puntaCana = {
        lat: 18.5601,
        lng: -68.3725,
        size: 0.35,
        color: "#ffe8a3",
        maxR: 4,
        propagationSpeed: 1.2,
        repeatPeriod: 1200
    };

    globeContainer.innerHTML = "";

    const world = Globe()(globeContainer)
        .width(globeContainer.clientWidth || 420)
        .height(300)
        .globeImageUrl(darkGlobeTexture)
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#d4af37")
        .atmosphereAltitude(0.16)
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .pointsData([puntaCana])
        .pointAltitude(0.02)
        .pointRadius("size")
        .pointColor("color")
        .pointResolution(24)
        .pointsMerge(true)
        .ringsData([puntaCana])
        .ringColor(() => "#ffe8a3")
        .ringMaxRadius("maxR")
        .ringPropagationSpeed("propagationSpeed")
        .ringRepeatPeriod("repeatPeriod");

    world.pointOfView(
        { lat: 18.7357, lng: -70.1627, altitude: 0.5 },
        1500
    );

    const controls = world.controls();
    controls.autoRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
}

loadSection("sections/header.html", "header-placeholder", setupHeaderMenu);
loadSection("sections/home.html", "home", setupHomeCarousel);
loadSection("sections/servicios.html", "servicios", setupServicesCarousel);
loadSection("sections/about-us.html", "about-us", setupDominicanGlobe);
loadSection("sections/descargas.html", "descargas");
loadSection("sections/contacto.html", "contacto");
loadSection("sections/footer.html", "footer");
