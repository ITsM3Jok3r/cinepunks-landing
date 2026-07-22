document.getElementById("year").textContent = new Date().getFullYear();

const TRANSLATIONS = {
  it: {
    "meta.title": "CinePunks — Il tuo universo cinematografico",
    "meta.description": "CinePunks sincronizza la tua libreria Trakt, il calendario delle uscite e le tue liste in un'unica app veloce e senza pensieri.",
    "nav.features": "Funzionalità",
    "nav.screenshots": "Screenshot",
    "nav.faq": "FAQ",
    "nav.contact": "Contatti",
    "nav.cta": "Scarica ora",
    "nav.ios": "iOS",
    "nav.android": "Android — presto",
    "hero.eyebrow": "Traccia · Scopri · Rivivi",
    "hero.title": "Ogni film.<br>Ogni serie.<br>Un solo universo.",
    "hero.sub": "CinePunks sincronizza la tua libreria Trakt, il calendario delle uscite e le tue liste in un'unica app veloce e senza pensieri.",
    "hero.appstore": "Scarica su App Store",
    "hero.googleplay": "Google Play — presto",
    "features.eyebrow": "Funzionalità",
    "features.title": "Tutto quello che serve, niente di superfluo",
    "feature1.title": "Sync con Trakt",
    "feature1.desc": "Il tuo profilo Trakt sempre aggiornato: watchlist, cronologia e valutazioni incluse.",
    "feature2.title": "Calendario episodi",
    "feature2.desc": "Non perdere una puntata: uscite di film e serie organizzate giorno per giorno.",
    "feature3.title": "Liste e collezioni",
    "feature3.desc": "Crea, condividi e scopri collezioni curate dalla community.",
    "feature4.title": "Continua a guardare",
    "feature4.desc": "Riprendi da dove hai lasciato, episodio dopo episodio, senza cercare.",
    "feature5.title": "Social",
    "feature5.desc": "Segui amici, leggi recensioni e scopri cosa sta guardando la community.",
    "feature6.title": "Multi-lingua & tema",
    "feature6.desc": "Italiano, English, Español, Français, Deutsch. Tema chiaro o scuro a scelta.",
    "screenshots.eyebrow": "Screenshot",
    "screenshots.title": "Un'app, ogni schermata al posto giusto",
    "screenshots.home": "Tendenze, prossime uscite e i più amati, tutto in home",
    "screenshots.discover": "Esplora film e serie tra i più discussi del momento",
    "screenshots.lists": "Organizza preferiti e watchlist in liste personali",
    "screenshots.details": "Vota, salva e segna un film come visto",
    "screenshots.stats": "Monitora il tempo di visione e gli episodi guardati",
    "screenshots.episodes": "Segna stagioni ed episodi visti, uno per uno",
    "screenshots.releases": "Non perderti le uscite della settimana",
    "screenshots.importexport": "Importa ed esporta le tue liste da altri servizi",
    "faq.eyebrow": "FAQ",
    "faq.title": "Domande frequenti",
    "faq1.q": "Cos'è CinePunks?",
    "faq1.a": "Un'app per tracciare film e serie TV che segui, con calendario uscite, liste personali e collezioni condivise con la community.",
    "faq2.q": "Serve un account Trakt?",
    "faq2.a": "Sì, CinePunks usa Trakt per sincronizzare cronologia, watchlist e valutazioni tra tutti i tuoi dispositivi.",
    "faq3.q": "È gratis?",
    "faq3.a": "L'app è gratuita. I dettagli su eventuali funzionalità aggiuntive saranno comunicati al lancio.",
    "faq4.q": "Su quali piattaforme è disponibile?",
    "faq4.a": "iOS disponibile ora su App Store. Android in arrivo su Google Play.",
    "faq5.q": "I miei dati sono al sicuro?",
    "faq5.a": "Sì. CinePunks non richiede credenziali proprie: l'accesso avviene tramite l'autenticazione ufficiale Trakt, e nessun dato sensibile viene salvato in chiaro sul dispositivo.",
    "faq6.q": "Come segnalo un problema o richiedo una funzionalità?",
    "faq6.a": "Scrivi all'indirizzo indicato nella sezione Contatti qui sotto.",
    "contact.eyebrow": "Contatti",
    "contact.title": "Domande, feedback, collaborazioni",
    "contact.sub": "Scrivici, rispondiamo il prima possibile.",
    "contact.support": "Supporto",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.privacy": "Privacy",
    "footer.terms": "Termini"
  },
  en: {
    "meta.title": "CinePunks — Your cinematic universe",
    "meta.description": "CinePunks syncs your Trakt library, release calendar and lists into one fast, effortless app.",
    "nav.features": "Features",
    "nav.screenshots": "Screenshots",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Get the app",
    "nav.ios": "iOS",
    "nav.android": "Android — coming soon",
    "hero.eyebrow": "Track · Discover · Relive",
    "hero.title": "Every movie.<br>Every show.<br>One universe.",
    "hero.sub": "CinePunks syncs your Trakt library, release calendar and lists into one fast, effortless app.",
    "hero.appstore": "Download on the App Store",
    "hero.googleplay": "Google Play — coming soon",
    "features.eyebrow": "Features",
    "features.title": "Everything you need, nothing you don't",
    "feature1.title": "Trakt sync",
    "feature1.desc": "Your Trakt profile always up to date: watchlist, history and ratings included.",
    "feature2.title": "Episode calendar",
    "feature2.desc": "Never miss an episode: movie and show releases organized day by day.",
    "feature3.title": "Lists & collections",
    "feature3.desc": "Create, share and discover collections curated by the community.",
    "feature4.title": "Continue watching",
    "feature4.desc": "Pick up right where you left off, episode after episode, no searching needed.",
    "feature5.title": "Social",
    "feature5.desc": "Follow friends, read reviews and see what the community is watching.",
    "feature6.title": "Multi-language & theme",
    "feature6.desc": "Italiano, English, Español, Français, Deutsch. Light or dark theme, your choice.",
    "screenshots.eyebrow": "Screenshots",
    "screenshots.title": "One app, every screen in its place",
    "screenshots.home": "Trending picks, upcoming releases and top favorites at a glance",
    "screenshots.discover": "Explore the most talked-about movies and shows",
    "screenshots.lists": "Organize favorites and watchlist into personal lists",
    "screenshots.details": "Rate, save and mark a movie as watched",
    "screenshots.stats": "Track your watch time and episodes completed",
    "screenshots.episodes": "Check off seasons and episodes as you watch",
    "screenshots.releases": "Never miss this week's releases",
    "screenshots.importexport": "Import and export your lists from other services",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq1.q": "What is CinePunks?",
    "faq1.a": "An app to track the movies and shows you follow, with a release calendar, personal lists and collections shared with the community.",
    "faq2.q": "Do I need a Trakt account?",
    "faq2.a": "Yes, CinePunks uses Trakt to sync history, watchlist and ratings across all your devices.",
    "faq3.q": "Is it free?",
    "faq3.a": "The app is free. Details on any additional features will be shared at launch.",
    "faq4.q": "Which platforms is it available on?",
    "faq4.a": "iOS is available now on the App Store. Android is coming soon on Google Play.",
    "faq5.q": "Is my data safe?",
    "faq5.a": "Yes. CinePunks doesn't require its own credentials: sign-in happens through official Trakt authentication, and no sensitive data is ever stored in plain text on the device.",
    "faq6.q": "How do I report a problem or request a feature?",
    "faq6.a": "Write to the address in the Contact section below.",
    "contact.eyebrow": "Contact",
    "contact.title": "Questions, feedback, collaborations",
    "contact.sub": "Write to us, we'll get back to you as soon as possible.",
    "contact.support": "Support",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms"
  },
  es: {
    "meta.title": "CinePunks — Tu universo cinematográfico",
    "meta.description": "CinePunks sincroniza tu biblioteca de Trakt, el calendario de estrenos y tus listas en una sola app rápida y sin complicaciones.",
    "nav.features": "Funciones",
    "nav.screenshots": "Capturas",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.cta": "Descargar",
    "nav.ios": "iOS",
    "nav.android": "Android — próximamente",
    "hero.eyebrow": "Sigue · Descubre · Revive",
    "hero.title": "Cada película.<br>Cada serie.<br>Un solo universo.",
    "hero.sub": "CinePunks sincroniza tu biblioteca de Trakt, el calendario de estrenos y tus listas en una sola app rápida y sin complicaciones.",
    "hero.appstore": "Descargar en App Store",
    "hero.googleplay": "Google Play — próximamente",
    "features.eyebrow": "Funciones",
    "features.title": "Todo lo que necesitas, nada de más",
    "feature1.title": "Sincronización con Trakt",
    "feature1.desc": "Tu perfil de Trakt siempre actualizado: watchlist, historial y valoraciones incluidas.",
    "feature2.title": "Calendario de episodios",
    "feature2.desc": "No te pierdas ningún episodio: estrenos de películas y series organizados día a día.",
    "feature3.title": "Listas y colecciones",
    "feature3.desc": "Crea, comparte y descubre colecciones seleccionadas por la comunidad.",
    "feature4.title": "Continuar viendo",
    "feature4.desc": "Retoma justo donde lo dejaste, episodio tras episodio, sin buscar.",
    "feature5.title": "Social",
    "feature5.desc": "Sigue a tus amigos, lee reseñas y descubre qué está viendo la comunidad.",
    "feature6.title": "Multi-idioma y tema",
    "feature6.desc": "Italiano, English, Español, Français, Deutsch. Tema claro u oscuro a elección.",
    "screenshots.eyebrow": "Capturas",
    "screenshots.title": "Una app, cada pantalla en su lugar",
    "screenshots.home": "Tendencias, próximos estrenos y favoritos, todo en la home",
    "screenshots.discover": "Explora las películas y series más comentadas",
    "screenshots.lists": "Organiza favoritos y watchlist en listas personales",
    "screenshots.details": "Valora, guarda y marca una película como vista",
    "screenshots.stats": "Controla tu tiempo de visionado y episodios vistos",
    "screenshots.episodes": "Marca temporadas y episodios vistos, uno a uno",
    "screenshots.releases": "No te pierdas los estrenos de la semana",
    "screenshots.importexport": "Importa y exporta tus listas desde otros servicios",
    "faq.eyebrow": "FAQ",
    "faq.title": "Preguntas frecuentes",
    "faq1.q": "¿Qué es CinePunks?",
    "faq1.a": "Una app para seguir las películas y series que te interesan, con calendario de estrenos, listas personales y colecciones compartidas con la comunidad.",
    "faq2.q": "¿Necesito una cuenta de Trakt?",
    "faq2.a": "Sí, CinePunks usa Trakt para sincronizar historial, watchlist y valoraciones en todos tus dispositivos.",
    "faq3.q": "¿Es gratis?",
    "faq3.a": "La app es gratuita. Los detalles sobre funciones adicionales se comunicarán en el lanzamiento.",
    "faq4.q": "¿En qué plataformas está disponible?",
    "faq4.a": "iOS ya disponible en App Store. Android próximamente en Google Play.",
    "faq5.q": "¿Mis datos están seguros?",
    "faq5.a": "Sí. CinePunks no requiere credenciales propias: el acceso se realiza mediante la autenticación oficial de Trakt, y ningún dato sensible se guarda en texto plano en el dispositivo.",
    "faq6.q": "¿Cómo reporto un problema o solicito una función?",
    "faq6.a": "Escribe a la dirección indicada en la sección de Contacto más abajo.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Preguntas, comentarios, colaboraciones",
    "contact.sub": "Escríbenos, te responderemos lo antes posible.",
    "contact.support": "Soporte",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos"
  },
  fr: {
    "meta.title": "CinePunks — Votre univers cinématographique",
    "meta.description": "CinePunks synchronise votre bibliothèque Trakt, le calendrier des sorties et vos listes dans une seule app rapide et sans effort.",
    "nav.features": "Fonctionnalités",
    "nav.screenshots": "Captures",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Télécharger",
    "nav.ios": "iOS",
    "nav.android": "Android — bientôt",
    "hero.eyebrow": "Suivez · Découvrez · Revivez",
    "hero.title": "Chaque film.<br>Chaque série.<br>Un seul univers.",
    "hero.sub": "CinePunks synchronise votre bibliothèque Trakt, le calendrier des sorties et vos listes dans une seule app rapide et sans effort.",
    "hero.appstore": "Télécharger sur l'App Store",
    "hero.googleplay": "Google Play — bientôt",
    "features.eyebrow": "Fonctionnalités",
    "features.title": "Tout ce qu'il faut, rien de superflu",
    "feature1.title": "Synchronisation Trakt",
    "feature1.desc": "Votre profil Trakt toujours à jour : watchlist, historique et notes inclus.",
    "feature2.title": "Calendrier des épisodes",
    "feature2.desc": "Ne manquez aucun épisode : sorties de films et séries organisées jour par jour.",
    "feature3.title": "Listes et collections",
    "feature3.desc": "Créez, partagez et découvrez des collections sélectionnées par la communauté.",
    "feature4.title": "Continuer à regarder",
    "feature4.desc": "Reprenez là où vous vous étiez arrêté, épisode après épisode, sans chercher.",
    "feature5.title": "Social",
    "feature5.desc": "Suivez vos amis, lisez des critiques et découvrez ce que regarde la communauté.",
    "feature6.title": "Multilingue & thème",
    "feature6.desc": "Italiano, English, Español, Français, Deutsch. Thème clair ou sombre au choix.",
    "screenshots.eyebrow": "Captures",
    "screenshots.title": "Une app, chaque écran à sa place",
    "screenshots.home": "Tendances, prochaines sorties et favoris, en un coup d'œil",
    "screenshots.discover": "Explorez les films et séries dont tout le monde parle",
    "screenshots.lists": "Organisez favoris et watchlist dans des listes personnelles",
    "screenshots.details": "Notez, enregistrez et marquez un film comme vu",
    "screenshots.stats": "Suivez votre temps de visionnage et vos épisodes vus",
    "screenshots.episodes": "Cochez saisons et épisodes au fil du visionnage",
    "screenshots.releases": "Ne manquez aucune sortie de la semaine",
    "screenshots.importexport": "Importez et exportez vos listes depuis d'autres services",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq1.q": "Qu'est-ce que CinePunks ?",
    "faq1.a": "Une app pour suivre les films et séries que vous aimez, avec calendrier des sorties, listes personnelles et collections partagées avec la communauté.",
    "faq2.q": "Faut-il un compte Trakt ?",
    "faq2.a": "Oui, CinePunks utilise Trakt pour synchroniser historique, watchlist et notes sur tous vos appareils.",
    "faq3.q": "Est-ce gratuit ?",
    "faq3.a": "L'app est gratuite. Les détails sur d'éventuelles fonctionnalités supplémentaires seront communiqués au lancement.",
    "faq4.q": "Sur quelles plateformes est-elle disponible ?",
    "faq4.a": "iOS disponible dès maintenant sur l'App Store. Android bientôt sur Google Play.",
    "faq5.q": "Mes données sont-elles en sécurité ?",
    "faq5.a": "Oui. CinePunks ne demande pas d'identifiants propres : la connexion se fait via l'authentification officielle Trakt, et aucune donnée sensible n'est jamais stockée en clair sur l'appareil.",
    "faq6.q": "Comment signaler un problème ou demander une fonctionnalité ?",
    "faq6.a": "Écrivez à l'adresse indiquée dans la section Contact ci-dessous.",
    "contact.eyebrow": "Contact",
    "contact.title": "Questions, retours, collaborations",
    "contact.sub": "Écrivez-nous, nous répondrons au plus vite.",
    "contact.support": "Support",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions"
  },
  de: {
    "meta.title": "CinePunks — Dein filmisches Universum",
    "meta.description": "CinePunks synchronisiert deine Trakt-Bibliothek, den Release-Kalender und deine Listen in einer schnellen, mühelosen App.",
    "nav.features": "Funktionen",
    "nav.screenshots": "Screenshots",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "nav.cta": "App laden",
    "nav.ios": "iOS",
    "nav.android": "Android — bald verfügbar",
    "hero.eyebrow": "Verfolgen · Entdecken · Erleben",
    "hero.title": "Jeder Film.<br>Jede Serie.<br>Ein Universum.",
    "hero.sub": "CinePunks synchronisiert deine Trakt-Bibliothek, den Release-Kalender und deine Listen in einer schnellen, mühelosen App.",
    "hero.appstore": "Im App Store laden",
    "hero.googleplay": "Google Play — bald verfügbar",
    "features.eyebrow": "Funktionen",
    "features.title": "Alles, was du brauchst, nichts Überflüssiges",
    "feature1.title": "Trakt-Sync",
    "feature1.desc": "Dein Trakt-Profil immer aktuell: Watchlist, Verlauf und Bewertungen inklusive.",
    "feature2.title": "Episoden-Kalender",
    "feature2.desc": "Verpasse keine Folge: Film- und Serienstarts tagesgenau organisiert.",
    "feature3.title": "Listen & Sammlungen",
    "feature3.desc": "Erstelle, teile und entdecke Sammlungen aus der Community.",
    "feature4.title": "Weiterschauen",
    "feature4.desc": "Mach genau da weiter, wo du aufgehört hast, Folge für Folge, ohne Suchen.",
    "feature5.title": "Social",
    "feature5.desc": "Folge Freunden, lies Rezensionen und entdecke, was die Community schaut.",
    "feature6.title": "Mehrsprachig & Theme",
    "feature6.desc": "Italiano, English, Español, Français, Deutsch. Helles oder dunkles Theme nach Wahl.",
    "screenshots.eyebrow": "Screenshots",
    "screenshots.title": "Eine App, jeder Bildschirm am richtigen Platz",
    "screenshots.home": "Trends, kommende Neuerscheinungen und Favoriten auf einen Blick",
    "screenshots.discover": "Entdecke die meistdiskutierten Filme und Serien",
    "screenshots.lists": "Organisiere Favoriten und Watchlist in persönlichen Listen",
    "screenshots.details": "Bewerte, speichere und markiere einen Film als gesehen",
    "screenshots.stats": "Behalte Sehzeit und gesehene Episoden im Blick",
    "screenshots.episodes": "Hake Staffeln und Episoden beim Schauen ab",
    "screenshots.releases": "Verpasse keine Neuerscheinung der Woche",
    "screenshots.importexport": "Importiere und exportiere deine Listen aus anderen Diensten",
    "faq.eyebrow": "FAQ",
    "faq.title": "Häufige Fragen",
    "faq1.q": "Was ist CinePunks?",
    "faq1.a": "Eine App, um Filme und Serien zu verfolgen, mit Release-Kalender, persönlichen Listen und Sammlungen, die mit der Community geteilt werden.",
    "faq2.q": "Brauche ich ein Trakt-Konto?",
    "faq2.a": "Ja, CinePunks nutzt Trakt, um Verlauf, Watchlist und Bewertungen geräteübergreifend zu synchronisieren.",
    "faq3.q": "Ist die App kostenlos?",
    "faq3.a": "Die App ist kostenlos. Details zu möglichen Zusatzfunktionen werden zum Launch bekannt gegeben.",
    "faq4.q": "Auf welchen Plattformen ist sie verfügbar?",
    "faq4.a": "iOS ist jetzt im App Store verfügbar. Android folgt bald bei Google Play.",
    "faq5.q": "Sind meine Daten sicher?",
    "faq5.a": "Ja. CinePunks verlangt keine eigenen Zugangsdaten: Die Anmeldung erfolgt über die offizielle Trakt-Authentifizierung, sensible Daten werden nie im Klartext auf dem Gerät gespeichert.",
    "faq6.q": "Wie melde ich ein Problem oder wünsche mir eine Funktion?",
    "faq6.a": "Schreib an die Adresse im Kontakt-Bereich weiter unten.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Fragen, Feedback, Kooperationen",
    "contact.sub": "Schreib uns, wir antworten so schnell wie möglich.",
    "contact.support": "Support",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB"
  }
};

const LANG_LABELS = { it: "IT", en: "EN", es: "ES", fr: "FR", de: "DE" };
const LEGAL_BASE = "legal/";
const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
const STORAGE_KEY = "cinepunks.landing.lang";

function legalHref(page, lang) {
  const suffix = lang === "it" ? "" : "-en";
  return `${LEGAL_BASE}${page}${suffix}.html`;
}

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browserLang = (navigator.language || "it").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : "it";
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.it;

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];
  document.querySelector('meta[name="description"]').setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.getElementById("privacyLink").href = legalHref("privacy", lang);
  document.getElementById("termsLink").href = legalHref("terms", lang);
  document.getElementById("supportLink").href = legalHref("support", lang);
  document.getElementById("footerSupportLink").href = legalHref("support", lang);

  document.getElementById("langBtnLabel").textContent = LANG_LABELS[lang];
  document.querySelectorAll("#langMenu li").forEach((li) => {
    li.setAttribute("aria-selected", String(li.dataset.lang === lang));
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

const langSwitch = document.getElementById("langSwitch");
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  const isOpen = langSwitch.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", String(isOpen));
});

langMenu.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    applyLanguage(li.dataset.lang);
    langSwitch.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  });
});

const dlSwitch = document.getElementById("dlSwitch");
const dlBtn = document.getElementById("dlBtn");

dlBtn.addEventListener("click", () => {
  const isOpen = dlSwitch.classList.toggle("open");
  dlBtn.setAttribute("aria-expanded", String(isOpen));
});

dlSwitch.querySelectorAll(".dl-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    dlSwitch.classList.remove("open");
    dlBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!langSwitch.contains(event.target)) {
    langSwitch.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  }
  if (!dlSwitch.contains(event.target)) {
    dlSwitch.classList.remove("open");
    dlBtn.setAttribute("aria-expanded", "false");
  }
});

applyLanguage(detectInitialLang());

const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
