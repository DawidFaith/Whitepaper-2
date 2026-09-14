import type { Language } from '../context/LanguageContext';

export interface WhitepaperContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    problem: string;
    solution: string;
    token: string;
    roadmap: string;
    team: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    version: string;
  };
  summary: {
    heading: string;
    paragraphs: string[];
  };
  problem: {
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
    cycle: string;
  };
  solution: {
    heading: string;
    intro: string;
    principle: string;
  };
  steps: {
    heading: string;
    items: { title: string; text: string }[];
  };
  token: {
    heading: string;
    chainLabel: string;
    chain: string;
    typeLabel: string;
    type: string;
    symbolLabel: string;
    symbol: string;
    supplyLabel: string;
    supply: string;
    supplyNote: string;
    contractLabel: string;
    contractLinkText: string;
    typeNote: string;
    usesHeading: string;
    uses: string[];
    tokenomicsHeading: string;
    tokenomicsNote: string;
    tokenomicsRows: { label: string; share: string; purpose: string }[];
    noSecondToken: string;
  };
  reputation: {
    heading: string;
    intro: string;
    bullets: string[];
  };
  shop: {
    heading: string;
    items: { title: string; text: string }[];
  };
  tech: {
    heading: string;
    bullets: { title: string; text: string }[];
  };
  roadmap: {
    heading: string;
    phases: { title: string; status: string; text: string }[];
  };
  team: {
    heading: string;
    name: string;
    bio: string;
  };
  risk: {
    heading: string;
    text: string;
  };
  conclusion: {
    heading: string;
    text: string;
  };
  footer: {
    tagline: string;
    contact: string;
    rights: string;
    note: string;
  };
}

export const whitepaperContent: Record<Language, WhitepaperContent> = {
  de: {
    meta: {
      title: 'D.FAITH Whitepaper — Fan-Belohnungen von Dawid Faith',
      description:
        'D.FAITH ist ein einfaches Belohnungssystem: Fans unterstützen Dawid Faith auf Social Media und verdienen dafür den D.FAITH-Token auf Solana.',
    },
    nav: {
      problem: 'Problem',
      solution: 'Lösung',
      token: 'Token',
      roadmap: 'Roadmap',
      team: 'Team',
    },
    hero: {
      kicker: 'Whitepaper',
      title: 'D.FAITH',
      subtitle:
        'Ein Fan-Belohnungssystem auf der Blockchain — von Dawid Faith, für seine Fans.',
      ctaPrimary: 'App öffnen',
      ctaSecondary: '@dawidfaith_germany folgen',
      version: 'Version 2.0 · September 2026',
    },
    summary: {
      heading: 'Kurz erklärt',
      paragraphs: [
        'D.FAITH ist eine App, mit der der Musiker Dawid Faith seine Fans direkt für ihre Unterstützung belohnt — mit einem eigenen Token auf der Solana-Blockchain.',
        'Fans erledigen einfache Aufgaben ("Quests") wie einen Beitrag liken, kommentieren oder teilen. Dafür bekommen sie D.FAITH-Token und steigen in einem Level-System auf.',
        'Kein Krypto-Vorwissen nötig: Jeder Nutzer bekommt beim ersten Login automatisch eine eigene Wallet.',
      ],
    },
    problem: {
      heading: '1. Das Problem',
      intro: 'Unabhängige Künstler wie Dawid Faith stehen vor denselben Hürden:',
      items: [
        { title: 'Wenig Reichweite', text: 'Guter Content wird von Algorithmen oft nicht ausreichend ausgespielt.' },
        { title: 'Teure Werbung', text: 'Bezahlte Anzeigen kosten viel und bringen selten treue Fans.' },
        { title: 'Fehlendes Kapital', text: 'Für Musikproduktion, Videos und Auftritte fehlt oft das Budget.' },
        { title: 'Engagement ohne Gegenwert', text: 'Fans investieren Zeit, bekommen dafür aber nichts zurück.' },
      ],
      cycle:
        'Das Ergebnis ist ein Teufelskreis: Ohne Reichweite kein Wachstum, ohne Wachstum kein Budget, ohne Budget keine bessere Musik — und wieder keine Reichweite.',
    },
    solution: {
      heading: '2. Die Lösung',
      intro:
        'Statt Geld in Werbung zu stecken, gibt Dawid Faith den Wert direkt an seine Fans weiter. Jede Interaktion, die Reichweite bringt, wird ehrlich belohnt.',
      principle:
        'Das Prinzip in einem Satz: Fans unterstützen den Künstler auf Social Media → die App erkennt das automatisch → Fans bekommen D.FAITH-Token und Reputation.',
    },
    steps: {
      heading: '3. So funktioniert es',
      items: [
        { title: 'Content & Quests', text: 'Dawid Faith postet neuen Content und erstellt dazu eine Quest — eine kleine, klare Aufgabe.' },
        { title: 'Fans erledigen Quests', text: 'Fans sehen die Quest in der App und erledigen sie auf Instagram, TikTok, YouTube oder Facebook.' },
        { title: 'Belohnung & Reputation', text: 'Für jede abgeschlossene Quest gibt es D.FAITH-Token und Reputationspunkte (REP).' },
        { title: 'Level-System', text: 'Mehr REP bedeutet ein höheres Level — und höhere Level bringen größere Bonus-Belohnungen.' },
        { title: 'Token nutzen', text: 'D.FAITH-Token können im Shop eingelöst oder gegen andere Kryptowährungen gehandelt werden.' },
        { title: 'Kreislauf', text: 'Mehr Belohnung führt zu mehr Engagement, mehr Reichweite und mehr neuen Fans.' },
      ],
    },
    token: {
      heading: '4. Der D.FAITH-Token',
      chainLabel: 'Blockchain',
      chain: 'Solana',
      typeLabel: 'Typ',
      type: 'Utility-Token',
      symbolLabel: 'Symbol',
      symbol: 'DFAITH',
      supplyLabel: 'Supply',
      supply: '1.000.000',
      supplyNote: 'Max. Supply = umlaufende Supply (2 Dezimalstellen) — es wird nichts nachträglich neu geprägt.',
      contractLabel: 'Contract-Adresse (Solana)',
      contractLinkText: 'Auf Solscan ansehen',
      typeNote:
        'Ein reiner Nutz-Token, kein Anlageprodukt — es gibt kein Renditeversprechen. D.FAITH dient allein dazu, treuen Fans für ihr Engagement zu danken und ihnen einen echten Anteil am Projekt zu geben. Er wird nicht verkauft, um Musikproduktion oder andere Kosten zu finanzieren.',
      usesHeading: 'Wofür kann man D.FAITH nutzen?',
      uses: [
        'Ausgeben im D.FAITH-Shop für exklusive Inhalte und digitale Sammelstücke',
        'Handeln gegen andere Kryptowährungen über dezentrale Börsen auf Solana',
        'Sammeln, um im Reputations-Level aufzusteigen und bessere Belohnungen freizuschalten',
      ],
      tokenomicsHeading: 'Tokenomics',
      tokenomicsNote: 'Aktueller Stand — ändert sich, sobald weitere Token aus dem Projekt-Wallet an Fans ausgeschüttet werden.',
      tokenomicsRows: [
        { label: 'Projekt-Wallet (Fan-Rewards)', share: '85 %', purpose: 'Wird schrittweise über Zeit durch Quests an treue Fans ausgeschüttet' },
        { label: 'Liquidität (DEX)', share: '15 %', purpose: 'Aktuell in einer dezentralen Börse für einen handelbaren Markt' },
      ],
      noSecondToken:
        'Es gibt kein zweites Investment-Token und kein Staking — das Modell wurde bewusst einfach gehalten.',
    },
    reputation: {
      heading: '5. Reputation, Level & Leaderboard',
      intro: 'Jede Quest bringt Reputationspunkte (REP). REP entscheidet über das Level eines Fans.',
      bullets: [
        'Mehrere Level-Stufen, vom Neueinsteiger bis zur Fan-Legende',
        'Je höher das Level, desto größer der Bonus auf zukünftige Belohnungen',
        'Hohe Level schalten besondere Vorteile frei, z. B. exklusive Drops oder größere Gewinnspiel-Preise',
        'Ein Leaderboard zeigt die Top-Fans nach REP — am Quartalsende gibt es Preise für die Bestplatzierten, ohne dass ihr Rang zurückgesetzt wird',
      ],
    },
    shop: {
      heading: '6. Shop, Sammelstücke & Marktplatz',
      items: [
        { title: 'Shop', text: 'Fans kaufen limitierte Song-NFTs direkt von Dawid Faith — jeder Song hat eine vom Künstler festgelegte Auflage, jede Kopie ist einzeln nummeriert.' },
        { title: 'Sammelstücke', text: 'Fans sammeln „Shards“ durch Quests, Gewinnspiele und Konzertbesuche und verschmelzen 10 Shards zu einem zufälligen Sammelstück — sechs Seltenheitsstufen von Common bis Mythic, jede mit eigenen Boni.' },
        { title: 'Marktplatz', text: 'Song-NFTs und Sammelstücke lassen sich unter Fans weiterverkaufen. Dawid Faith erhält automatisch 5 % von jedem Weiterverkauf.' },
      ],
    },
    tech: {
      heading: '7. Technologie',
      bullets: [
        { title: 'Solana', text: 'Sehr niedrige Transaktionskosten und schnelle Bestätigungen — ideal für viele kleine Belohnungen.' },
        { title: 'Automatische Wallet', text: 'Jeder Fan bekommt beim ersten Login automatisch eine eigene Wallet, ganz ohne Vorwissen.' },
        { title: 'Automatische Quest-Prüfung', text: 'Die App verbindet sich mit Instagram, TikTok, YouTube und Facebook, um Interaktionen fälschungssicher zu erkennen.' },
      ],
    },
    roadmap: {
      heading: '8. Roadmap',
      phases: [
        { title: 'Fundament', status: 'Abgeschlossen', text: 'Konzept, App-Entwicklung, erste Quests live, Wallet-Integration.' },
        { title: 'Community-Wachstum', status: 'Aktuell', text: 'Ausbau der Quests über Instagram, TikTok, YouTube und Facebook, Level-System, Shop und Sammelstücke live.' },
        { title: 'Ausbau', status: 'Geplant', text: 'Mehr Belohnungsarten, größere Gewinnspiele, mehr Partnerschaften.' },
        { title: 'Öffnung für weitere Künstler', status: 'Vision', text: 'D.FAITH wird schrittweise zur Plattform für unabhängige Künstler — mit Dawid Faith als erstem Beispiel.' },
      ],
    },
    team: {
      heading: '9. Team',
      name: 'Dawid Faith',
      bio: 'Musiker und Gründer von D.FAITH. Aus der eigenen Erfahrung als unabhängiger Künstler heraus entwickelt, um Fans direkt und fair am eigenen Erfolg zu beteiligen.',
    },
    risk: {
      heading: '10. Risikohinweis',
      text: 'D.FAITH-Token sind Utility-Token ohne Renditeversprechen. Der Wert von Kryptowährungen kann stark schwanken. Man sollte nur Zeit und Engagement investieren, die man auch ohne finanzielle Gegenleistung bereit wäre zu geben.',
    },
    conclusion: {
      heading: '11. Fazit',
      text: 'D.FAITH macht aus Fan-Engagement etwas Greifbares: Wer Dawid Faith unterstützt, wird direkt belohnt — einfach, transparent und ohne Krypto-Vorwissen.',
    },
    footer: {
      tagline: 'Fan-Belohnungen auf der Blockchain.',
      contact: 'Kontakt',
      rights: 'D.FAITH. Alle Rechte vorbehalten.',
      note: 'Dieses Whitepaper ist ein lebendiges Dokument und wird regelmäßig aktualisiert.',
    },
  },
  en: {
    meta: {
      title: 'D.FAITH Whitepaper — Fan Rewards by Dawid Faith',
      description:
        'D.FAITH is a simple reward system: fans support Dawid Faith on social media and earn the D.FAITH token on Solana in return.',
    },
    nav: {
      problem: 'Problem',
      solution: 'Solution',
      token: 'Token',
      roadmap: 'Roadmap',
      team: 'Team',
    },
    hero: {
      kicker: 'Whitepaper',
      title: 'D.FAITH',
      subtitle: 'A blockchain-based fan reward system — by Dawid Faith, for his fans.',
      ctaPrimary: 'Open the app',
      ctaSecondary: 'Follow @dawidfaith_germany',
      version: 'Version 2.0 · September 2026',
    },
    summary: {
      heading: 'In short',
      paragraphs: [
        'D.FAITH is an app that lets musician Dawid Faith reward his fans directly for their support — with his own token on the Solana blockchain.',
        'Fans complete simple tasks ("quests") like liking, commenting on, or sharing a post. In return, they earn D.FAITH tokens and level up in a reputation system.',
        'No crypto knowledge required: every user automatically gets their own wallet on first login.',
      ],
    },
    problem: {
      heading: '1. The Problem',
      intro: 'Independent artists like Dawid Faith face the same obstacles:',
      items: [
        { title: 'Low reach', text: 'Good content is often not shown widely enough by platform algorithms.' },
        { title: 'Expensive ads', text: 'Paid advertising is costly and rarely brings loyal fans.' },
        { title: 'Lack of capital', text: 'Budget for music production, videos and shows is often missing.' },
        { title: 'Engagement without reward', text: 'Fans invest time but get nothing back for it.' },
      ],
      cycle:
        'The result is a vicious circle: no reach means no growth, no growth means no budget, no budget means no better music — and again no reach.',
    },
    solution: {
      heading: '2. The Solution',
      intro:
        'Instead of spending money on ads, Dawid Faith passes that value directly to his fans. Every interaction that drives reach gets fairly rewarded.',
      principle:
        'The principle in one sentence: fans support the artist on social media → the app detects it automatically → fans receive D.FAITH tokens and reputation.',
    },
    steps: {
      heading: '3. How It Works',
      items: [
        { title: 'Content & quests', text: 'Dawid Faith posts new content and creates a quest for it — a small, clear task.' },
        { title: 'Fans complete quests', text: 'Fans see the quest in the app and complete it on Instagram, TikTok, YouTube or Facebook.' },
        { title: 'Reward & reputation', text: 'Every completed quest earns D.FAITH tokens and reputation points (REP).' },
        { title: 'Level system', text: 'More REP means a higher level — and higher levels bring bigger bonus rewards.' },
        { title: 'Using the token', text: 'D.FAITH tokens can be redeemed in the shop or traded for other cryptocurrencies.' },
        { title: 'The loop', text: 'More reward drives more engagement, more reach and more new fans.' },
      ],
    },
    token: {
      heading: '4. The D.FAITH Token',
      chainLabel: 'Blockchain',
      chain: 'Solana',
      typeLabel: 'Type',
      type: 'Utility token',
      symbolLabel: 'Symbol',
      symbol: 'DFAITH',
      supplyLabel: 'Supply',
      supply: '1,000,000',
      supplyNote: 'Max supply = circulating supply (2 decimals) — nothing more will ever be minted.',
      contractLabel: 'Contract address (Solana)',
      contractLinkText: 'View on Solscan',
      typeNote:
        'A pure utility token, not an investment product — no return is promised. D.FAITH exists solely to thank loyal fans for their engagement and give them a real share in the project. It is not sold to fund music production or other costs.',
      usesHeading: 'What can you use D.FAITH for?',
      uses: [
        'Spend it in the D.FAITH shop for exclusive content and digital collectibles',
        'Trade it for other cryptocurrencies on decentralized exchanges on Solana',
        'Collect it to level up in the reputation system and unlock better rewards',
      ],
      tokenomicsHeading: 'Tokenomics',
      tokenomicsNote: 'Current status — changes as more tokens are distributed to fans from the project wallet.',
      tokenomicsRows: [
        { label: 'Project wallet (fan rewards)', share: '85%', purpose: 'Distributed to loyal fans over time through quests' },
        { label: 'Liquidity (DEX)', share: '15%', purpose: 'Currently on a decentralized exchange to keep the market tradeable' },
      ],
      noSecondToken: 'There is no second investment token and no staking — the model is kept deliberately simple.',
    },
    reputation: {
      heading: '5. Reputation, Levels & Leaderboard',
      intro: 'Every quest earns reputation points (REP). REP determines a fan’s level.',
      bullets: [
        'Multiple level tiers, from newcomer to fan legend',
        'The higher the level, the bigger the bonus on future rewards',
        'High levels unlock special perks, such as exclusive drops or bigger giveaway prizes',
        'A leaderboard shows the top fans by REP — at the end of each quarter, top-ranked fans win prizes without their rank ever resetting',
      ],
    },
    shop: {
      heading: '6. Shop, Collectibles & Marketplace',
      items: [
        { title: 'Shop', text: 'Fans buy limited song NFTs directly from Dawid Faith — each song has an edition size set by the artist, and every copy is individually numbered.' },
        { title: 'Collectibles', text: 'Fans collect "Shards" through quests, giveaways and concert visits, and fuse 10 Shards into a random collectible — six rarity tiers from Common to Mythic, each with its own bonuses.' },
        { title: 'Marketplace', text: 'Song NFTs and collectibles can be resold between fans. Dawid Faith automatically earns 5% on every resale.' },
      ],
    },
    tech: {
      heading: '7. Technology',
      bullets: [
        { title: 'Solana', text: 'Very low transaction fees and fast confirmations — ideal for many small rewards.' },
        { title: 'Automatic wallet', text: 'Every fan automatically gets their own wallet on first login, no prior knowledge needed.' },
        { title: 'Automatic quest verification', text: 'The app connects to Instagram, TikTok, YouTube and Facebook to verify interactions reliably.' },
      ],
    },
    roadmap: {
      heading: '8. Roadmap',
      phases: [
        { title: 'Foundation', status: 'Completed', text: 'Concept, app development, first quests live, wallet integration.' },
        { title: 'Community growth', status: 'Current', text: 'Expanding quests across Instagram, TikTok, YouTube and Facebook; level system, shop and collectibles live.' },
        { title: 'Expansion', status: 'Planned', text: 'More reward types, bigger giveaways, more partnerships.' },
        { title: 'Opening to more artists', status: 'Vision', text: 'D.FAITH gradually becomes a platform for independent artists — with Dawid Faith as the first example.' },
      ],
    },
    team: {
      heading: '9. Team',
      name: 'Dawid Faith',
      bio: 'Musician and founder of D.FAITH. Built from his own experience as an independent artist, to give fans a direct and fair stake in his success.',
    },
    risk: {
      heading: '10. Risk Notice',
      text: 'D.FAITH tokens are utility tokens with no promised return. The value of cryptocurrencies can fluctuate significantly. Only invest time and engagement you would be willing to give without any financial return.',
    },
    conclusion: {
      heading: '11. Conclusion',
      text: 'D.FAITH turns fan engagement into something tangible: supporting Dawid Faith gets rewarded directly — simple, transparent, and with no crypto knowledge required.',
    },
    footer: {
      tagline: 'Fan rewards on the blockchain.',
      contact: 'Contact',
      rights: 'D.FAITH. All rights reserved.',
      note: 'This whitepaper is a living document and is updated regularly.',
    },
  },
  pl: {
    meta: {
      title: 'D.FAITH Whitepaper — nagrody dla fanów Dawida Faitha',
      description:
        'D.FAITH to prosty system nagród: fani wspierają Dawida Faitha w mediach społecznościowych i zdobywają za to token D.FAITH na Solanie.',
    },
    nav: {
      problem: 'Problem',
      solution: 'Rozwiązanie',
      token: 'Token',
      roadmap: 'Plan rozwoju',
      team: 'Zespół',
    },
    hero: {
      kicker: 'Whitepaper',
      title: 'D.FAITH',
      subtitle: 'System nagród dla fanów oparty na blockchainie — od Dawida Faitha, dla jego fanów.',
      ctaPrimary: 'Otwórz aplikację',
      ctaSecondary: 'Obserwuj @dawidfaith_polska',
      version: 'Wersja 2.0 · wrzesień 2026',
    },
    summary: {
      heading: 'W skrócie',
      paragraphs: [
        'D.FAITH to aplikacja, dzięki której muzyk Dawid Faith bezpośrednio nagradza swoich fanów za wsparcie — własnym tokenem na blockchainie Solana.',
        'Fani wykonują proste zadania ("questy"), takie jak polubienie, skomentowanie lub udostępnienie posta. W zamian otrzymują tokeny D.FAITH i awansują w systemie poziomów.',
        'Nie potrzeba żadnej wiedzy o kryptowalutach: każdy użytkownik przy pierwszym logowaniu automatycznie otrzymuje własny portfel.',
      ],
    },
    problem: {
      heading: '1. Problem',
      intro: 'Niezależni artyści, tacy jak Dawid Faith, stają przed tymi samymi przeszkodami:',
      items: [
        { title: 'Mały zasięg', text: 'Dobre treści często nie są wystarczająco pokazywane przez algorytmy platform.' },
        { title: 'Droga reklama', text: 'Płatne reklamy kosztują dużo, a rzadko przynoszą lojalnych fanów.' },
        { title: 'Brak kapitału', text: 'Często brakuje budżetu na produkcję muzyki, filmy i koncerty.' },
        { title: 'Zaangażowanie bez nagrody', text: 'Fani poświęcają czas, ale nic za to nie otrzymują.' },
      ],
      cycle:
        'Efektem jest błędne koło: bez zasięgu nie ma wzrostu, bez wzrostu nie ma budżetu, bez budżetu nie ma lepszej muzyki — i znowu brak zasięgu.',
    },
    solution: {
      heading: '2. Rozwiązanie',
      intro:
        'Zamiast wydawać pieniądze na reklamę, Dawid Faith przekazuje tę wartość bezpośrednio fanom. Każda interakcja, która zwiększa zasięg, jest uczciwie nagradzana.',
      principle:
        'Zasada w jednym zdaniu: fani wspierają artystę w mediach społecznościowych → aplikacja wykrywa to automatycznie → fani otrzymują tokeny D.FAITH i reputację.',
    },
    steps: {
      heading: '3. Jak to działa',
      items: [
        { title: 'Treści i questy', text: 'Dawid Faith publikuje nowe treści i tworzy do nich quest — małe, jasne zadanie.' },
        { title: 'Fani wykonują questy', text: 'Fani widzą quest w aplikacji i wykonują go na Instagramie, TikToku, YouTube lub Facebooku.' },
        { title: 'Nagroda i reputacja', text: 'Za każdy ukończony quest przyznawane są tokeny D.FAITH i punkty reputacji (REP).' },
        { title: 'System poziomów', text: 'Więcej REP oznacza wyższy poziom — a wyższe poziomy dają większe bonusy do nagród.' },
        { title: 'Wykorzystanie tokena', text: 'Tokeny D.FAITH można wymienić w sklepie lub wymienić na inne kryptowaluty.' },
        { title: 'Cykl', text: 'Więcej nagród oznacza większe zaangażowanie, większy zasięg i więcej nowych fanów.' },
      ],
    },
    token: {
      heading: '4. Token D.FAITH',
      chainLabel: 'Blockchain',
      chain: 'Solana',
      typeLabel: 'Typ',
      type: 'Token użytkowy',
      symbolLabel: 'Symbol',
      symbol: 'DFAITH',
      supplyLabel: 'Podaż',
      supply: '1 000 000',
      supplyNote: 'Maksymalna podaż = podaż w obiegu (2 miejsca dziesiętne) — nic więcej nie zostanie dobite.',
      contractLabel: 'Adres kontraktu (Solana)',
      contractLinkText: 'Zobacz na Solscan',
      typeNote:
        'Czysty token użytkowy, a nie produkt inwestycyjny — nie ma obietnicy zysku. D.FAITH istnieje wyłącznie po to, aby podziękować lojalnym fanom za ich zaangażowanie i dać im realny udział w projekcie. Nie jest sprzedawany w celu finansowania produkcji muzyki ani innych kosztów.',
      usesHeading: 'Do czego można wykorzystać D.FAITH?',
      uses: [
        'Wydać w sklepie D.FAITH na ekskluzywne treści i cyfrowe kolekcjonerki',
        'Wymienić na inne kryptowaluty na zdecentralizowanych giełdach na Solanie',
        'Zbierać, aby awansować w systemie reputacji i odblokować lepsze nagrody',
      ],
      tokenomicsHeading: 'Tokenomika',
      tokenomicsNote: 'Aktualny stan — zmienia się w miarę wypłacania kolejnych tokenów fanom z portfela projektu.',
      tokenomicsRows: [
        { label: 'Portfel projektu (nagrody dla fanów)', share: '85%', purpose: 'Wypłacany stopniowo lojalnym fanom w czasie poprzez questy' },
        { label: 'Płynność (DEX)', share: '15%', purpose: 'Obecnie na zdecentralizowanej giełdzie dla płynnego rynku' },
      ],
      noSecondToken: 'Nie ma drugiego tokena inwestycyjnego ani stakingu — model jest celowo prosty.',
    },
    reputation: {
      heading: '5. Reputacja, poziomy i ranking',
      intro: 'Każdy quest przynosi punkty reputacji (REP). REP decyduje o poziomie fana.',
      bullets: [
        'Wiele poziomów — od nowicjusza po legendę fanów',
        'Im wyższy poziom, tym większy bonus do przyszłych nagród',
        'Wysokie poziomy odblokowują specjalne korzyści, np. ekskluzywne dropy lub większe nagrody w konkursach',
        'Ranking pokazuje najlepszych fanów według REP — na koniec każdego kwartału najlepsi otrzymują nagrody, a ich pozycja nigdy nie jest resetowana',
      ],
    },
    shop: {
      heading: '6. Sklep, kolekcjonerki i rynek',
      items: [
        { title: 'Sklep', text: 'Fani kupują limitowane NFT utworów bezpośrednio od Dawida Faitha — każdy utwór ma nakład ustalony przez artystę, a każda kopia jest indywidualnie numerowana.' },
        { title: 'Kolekcjonerki', text: 'Fani zbierają „Shardy” poprzez questy, konkursy i udział w koncertach, a 10 Shardów można połączyć w losowy kolekcjonerski przedmiot — sześć poziomów rzadkości od Common do Mythic, każdy z własnymi bonusami.' },
        { title: 'Rynek', text: 'NFT utworów i kolekcjonerki można odsprzedawać między fanami. Dawid Faith automatycznie otrzymuje 5% z każdej odsprzedaży.' },
      ],
    },
    tech: {
      heading: '7. Technologia',
      bullets: [
        { title: 'Solana', text: 'Bardzo niskie opłaty transakcyjne i szybkie potwierdzenia — idealne do wielu małych nagród.' },
        { title: 'Automatyczny portfel', text: 'Każdy fan przy pierwszym logowaniu automatycznie otrzymuje własny portfel, bez żadnej wiedzy wstępnej.' },
        { title: 'Automatyczna weryfikacja questów', text: 'Aplikacja łączy się z Instagramem, TikTokiem, YouTube i Facebookiem, aby wiarygodnie rozpoznawać interakcje.' },
      ],
    },
    roadmap: {
      heading: '8. Plan rozwoju',
      phases: [
        { title: 'Fundament', status: 'Zakończone', text: 'Koncepcja, rozwój aplikacji, pierwsze questy na żywo, integracja portfela.' },
        { title: 'Rozwój społeczności', status: 'Obecnie', text: 'Rozbudowa questów na Instagramie, TikToku, YouTube i Facebooku; system poziomów, sklep i kolekcjonerki na żywo.' },
        { title: 'Rozbudowa', status: 'Planowane', text: 'Więcej rodzajów nagród, większe konkursy, więcej partnerstw.' },
        { title: 'Otwarcie dla innych artystów', status: 'Wizja', text: 'D.FAITH stopniowo staje się platformą dla niezależnych artystów — z Dawidem Faithem jako pierwszym przykładem.' },
      ],
    },
    team: {
      heading: '9. Zespół',
      name: 'Dawid Faith',
      bio: 'Muzyk i założyciel D.FAITH. Stworzone z własnego doświadczenia jako niezależny artysta, aby uczciwie i bezpośrednio włączyć fanów w swój sukces.',
    },
    risk: {
      heading: '10. Informacja o ryzyku',
      text: 'Tokeny D.FAITH są tokenami użytkowymi bez obietnicy zysku. Wartość kryptowalut może się znacznie wahać. Warto inwestować tylko tyle czasu i zaangażowania, ile jest się gotowym dać bez żadnej finansowej rekompensaty.',
    },
    conclusion: {
      heading: '11. Podsumowanie',
      text: 'D.FAITH sprawia, że zaangażowanie fanów staje się namacalne: wspieranie Dawida Faitha jest bezpośrednio nagradzane — prosto, przejrzyście i bez wiedzy o kryptowalutach.',
    },
    footer: {
      tagline: 'Nagrody dla fanów na blockchainie.',
      contact: 'Kontakt',
      rights: 'D.FAITH. Wszelkie prawa zastrzeżone.',
      note: 'Ten whitepaper jest żywym dokumentem i jest regularnie aktualizowany.',
    },
  },
};
