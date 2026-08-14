import type { Lang } from "./translations";

export type L = Record<Lang, string>;

export type Pillar = {
  id: string;
  number: number;
  arabicName: string;
  title: L;
  summary: L;
  details: L[];
};

export const PILLARS: Pillar[] = [
  {
    id: "shahadah",
    number: 1,
    arabicName: "الشهادة",
    title: {
      en: "Shahadah — Testimony of Faith",
      ha: "Shahada — Shaidar Imani",
      tw: "Shahadah — Gyidie Adansedie",
      ar: "الشهادة",
    },
    summary: {
      en: "Bearing witness that there is no deity worthy of worship except Allah, and that Muhammad ﷺ is His Messenger.",
      ha: "Shaidawa cewa babu abin bautawa da gaskiya sai Allah, kuma Muhammad ﷺ Manzon Allah ne.",
      tw: "Adansedie sɛ nyame biara nni hɔ a ɛsɛ sɛ wɔsom no gye Allah, na Muhammad ﷺ yɛ Ne somafoɔ.",
      ar: "شهادة أن لا إله إلا الله وأن محمداً رسول الله ﷺ.",
    },
    details: [
      {
        en: "The words: Ash-hadu an lā ilāha illa Allāh, wa ash-hadu anna Muhammadan rasūlu Allāh.",
        ha: "Kalmomin: Ash-hadu an lā ilāha illa Allāh, wa ash-hadu anna Muhammadan rasūlu Allāh.",
        tw: "Nsɛm no: Ash-hadu an lā ilāha illa Allāh, wa ash-hadu anna Muhammadan rasūlu Allāh.",
        ar: "أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله.",
      },
      {
        en: "It requires knowledge, certainty, sincerity, truthfulness, love, submission and acceptance.",
        ha: "Tana bukatar ilimi, yaƙini, ikhlasi, gaskiya, ƙauna, mika wuya da karɓa.",
        tw: "Ɛhwehwɛ nimdeɛ, ahotosoɔ, komam nokorɛ, ɔdɔ, ahobrɛaseɛ ne gyeɛ.",
        ar: "تقتضي العلم واليقين والإخلاص والصدق والمحبة والانقياد والقبول.",
      },
      {
        en: "It is the foundation on which all other acts of worship are built.",
        ha: "Ita ce harsashin da aka gina sauran ibadu a kanta.",
        tw: "Ɛyɛ fapem a ɔsom nneyɛeɛ nyinaa gyina so.",
        ar: "هي الأساس الذي تُبنى عليه سائر العبادات.",
      },
    ],
  },
  {
    id: "salah",
    number: 2,
    arabicName: "الصلاة",
    title: { en: "Salah — Prayer", ha: "Sallah", tw: "Salah — Mpaebɔ", ar: "الصلاة" },
    summary: {
      en: "Five obligatory prayers each day and night, the direct link between the servant and Allah.",
      ha: "Sallah biyar a kowace rana da dare, mahaɗi tsakanin bawa da Ubangijinsa.",
      tw: "Mpaebɔ enum daa, ɛyɛ nkitahodie a ɛda ɔsomfoɔ ne Allah ntam.",
      ar: "خمس صلوات مفروضة في اليوم والليلة، وهي صلة العبد بربه.",
    },
    details: [
      {
        en: "Fajr, Dhuhr, Asr, Maghrib and Isha, performed at their appointed times.",
        ha: "Asuba, Azahar, La'asar, Magariba da Isha'i, a lokutansu.",
        tw: "Fajr, Dhuhr, Asr, Maghrib ne Isha, wɔ wɔn mmerɛ mu.",
        ar: "الفجر والظهر والعصر والمغرب والعشاء في أوقاتها.",
      },
      {
        en: "Purity (wudu), covering the awrah and facing the Qibla are conditions of validity.",
        ha: "Tsarki (alwala), rufe al'aura da fuskantar alkibla sharuɗɗan ingancinta ne.",
        tw: "Ahoteɛ (wudu), ahoduradeɛ ne Qibla anim kyerɛ yɛ nhyehyɛeɛ a ɛho hia.",
        ar: "الطهارة وستر العورة واستقبال القبلة من شروط صحتها.",
      },
      {
        en: "It is the first deed a person will be asked about on the Day of Judgement.",
        ha: "Ita ce aiki na farko da za a tambayi mutum a ranar kiyama.",
        tw: "Ɛno ne adeyɛ a ɛdi kan a wɔbɛbisa onipa wɔ Atemmuo da.",
        ar: "هي أول ما يُحاسب عليه العبد يوم القيامة.",
      },
    ],
  },
  {
    id: "zakat",
    number: 3,
    arabicName: "الزكاة",
    title: { en: "Zakat — Purifying Charity", ha: "Zakka", tw: "Zakat — Ayamyeɛ Toɔ", ar: "الزكاة" },
    summary: {
      en: "An obligatory annual share of wealth given to those entitled to it, purifying the wealth and the heart.",
      ha: "Hakkin shekara a dukiya da ake bayarwa ga masu cancanta, wanda ke tsarkake dukiya da zuciya.",
      tw: "Afe biara ahonyadeɛ kyɛfa a wɔde ma wɔn a ɛfata wɔn, na ɛte ahonyadeɛ ne akoma ho.",
      ar: "حق واجب في المال يُدفع لمستحقيه، يطهر المال والنفس.",
    },
    details: [
      {
        en: "Generally 2.5% of qualifying wealth held for one lunar year above the nisab.",
        ha: "Galibi kashi 2.5% na dukiyar da ta kai nisabi kuma ta cika shekara guda.",
        tw: "Mpɛn pii ɛyɛ 2.5% wɔ ahonyadeɛ a ɛboro nisab so na adi afe.",
        ar: "غالباً 2.5% من المال البالغ للنصاب بعد حولان الحول.",
      },
      {
        en: "The eight categories of recipients are named in Surah At-Tawbah 9:60.",
        ha: "An ambaci nau'ikan masu karɓa guda takwas a Suratut Tauba 9:60.",
        tw: "Wɔabobɔ akuo nwɔtwe a wɔgye wɔ Surah At-Tawbah 9:60 mu.",
        ar: "أصناف المستحقين الثمانية مذكورة في سورة التوبة ٩:٦٠.",
      },
      {
        en: "Zakat al-Fitr is separate and is paid before the Eid al-Fitr prayer.",
        ha: "Zakkar Fidda-kai ta bambanta, ana bayar da ita kafin sallar Idin Karamar Sallah.",
        tw: "Zakat al-Fitr yɛ soronko; wɔtua no ansa na Eid al-Fitr mpaebɔ aba.",
        ar: "زكاة الفطر منفصلة وتُخرج قبل صلاة عيد الفطر.",
      },
    ],
  },
  {
    id: "sawm",
    number: 4,
    arabicName: "الصوم",
    title: { en: "Sawm — Fasting Ramadan", ha: "Azumi", tw: "Sawm — Ramadan Mmuadadie", ar: "الصوم" },
    summary: {
      en: "Abstaining from food, drink and marital relations from dawn to sunset throughout Ramadan.",
      ha: "Kamewa daga ci, sha da saduwa da mata daga alfijir zuwa faɗuwar rana a watan Ramadan.",
      tw: "Aduane, nsuo ne awadeɛ nkitahodie ho kwatibea firi anɔpa kɔsi owia atɔeɛ wɔ Ramadan mu.",
      ar: "الإمساك عن الطعام والشراب والجماع من الفجر إلى المغرب في رمضان.",
    },
    details: [
      {
        en: "Intention is made before dawn; the fast is broken at sunset (iftar).",
        ha: "Ana yin niyya kafin alfijir; ana buɗe baki da faɗuwar rana (buɗar baki).",
        tw: "Wɔyɛ adwene ansa na anɔpa ba; wɔbue mmuadadie owia atɔeɛ berɛ mu (iftar).",
        ar: "تُعقد النية قبل الفجر ويكون الفطر عند غروب الشمس.",
      },
      {
        en: "The sick, travellers, and others with valid excuses have concessions in the Shari'ah.",
        ha: "Marasa lafiya, matafiya da masu uzuri suna da sauƙi a shari'a.",
        tw: "Ayarefoɔ, akwantufoɔ ne wɔn a wɔwɔ nnyinasoɔ pa nya adwoeɛ wɔ Shari'ah mu.",
        ar: "للمريض والمسافر وأصحاب الأعذار رخص في الشريعة.",
      },
      {
        en: "Fasting is a shield; it trains taqwa, patience and compassion for the poor.",
        ha: "Azumi garkuwa ne; yana horar da taƙawa, haƙuri da tausayin matalauta.",
        tw: "Mmuadadie yɛ akatua; ɛkyerɛ taqwa, abodwokyerɛ ne ahiafoɔ mmɔborɔhunu.",
        ar: "الصوم جُنّة، ويربي التقوى والصبر والرحمة بالفقراء.",
      },
    ],
  },
  {
    id: "hajj",
    number: 5,
    arabicName: "الحج",
    title: { en: "Hajj — Pilgrimage", ha: "Hajji", tw: "Hajj — Akwantuo Kronkron", ar: "الحج" },
    summary: {
      en: "Pilgrimage to the Sacred House in Makkah, obligatory once in a lifetime upon those who are able.",
      ha: "Ziyarar Dakin Allah mai alfarma a Makka, wajibi sau ɗaya a rayuwa ga mai iko.",
      tw: "Akwantuo kɔ Fie Kronkron wɔ Makkah, ɛyɛ ahyɛdeɛ pɛnkoro wɔ obiara a ɔbɛtumi asetena mu.",
      ar: "قصد البيت الحرام بمكة، وهو فرض مرة واحدة في العمر على المستطيع.",
    },
    details: [
      {
        en: "Performed in the months of Hajj, culminating in the standing at Arafah on 9 Dhul-Hijjah.",
        ha: "Ana yin sa a watannin Hajji, kuma tsayuwar Arafa ita ce ranar 9 ga Zulhijja.",
        tw: "Wɔyɛ wɔ Hajj bosome mu, na Arafah gyinabea no ba Dhul-Hijjah 9.",
        ar: "يؤدى في أشهر الحج وذروته الوقوف بعرفة في التاسع من ذي الحجة.",
      },
      {
        en: "Ability includes physical health, lawful provision, safe travel and settled debts.",
        ha: "Iko ya haɗa da lafiya, halastaccen kuɗi, aminci a hanya da biyan bashi.",
        tw: "Tumi kyerɛ akwahosan, sika a ɛyɛ halal, akwantuo mu banbɔ ne ɛka a woatua.",
        ar: "الاستطاعة تشمل صحة البدن والمال الحلال وأمن الطريق وقضاء الديون.",
      },
      {
        en: "An accepted Hajj has no reward less than Paradise (Bukhari & Muslim).",
        ha: "Hajji mabrur babu sakamako gare shi sai Aljanna (Bukhari da Muslim).",
        tw: "Hajj a wɔagye atom no akatua ne Ɔsoro (Bukhari ne Muslim).",
        ar: "الحج المبرور ليس له جزاء إلا الجنة (البخاري ومسلم).",
      },
    ],
  },
];

export type Step = { id: string; title: L; body: L };

export const HAJJ_STEPS: Step[] = [
  {
    id: "preparation",
    title: { en: "Preparation", ha: "Shirye-shirye", tw: "Ahosiesie", ar: "الاستعداد" },
    body: {
      en: "Make a sincere intention for Allah alone, repent, settle debts, seek forgiveness from people, learn the rites, arrange lawful funds, documents and health requirements.",
      ha: "Yi niyya tsantsa domin Allah, ka tuba, ka biya bashi, ka nemi yafiya daga mutane, ka koyi ayyukan Hajji, ka shirya halastaccen kuɗi, takardu da lafiya.",
      tw: "Yɛ adwene pa ma Allah nko, sakyera, tua wo ka, srɛ nnipa hɔ bɔnefakyɛ, sua Hajj nneyɛeɛ, siesie sika a ɛyɛ halal, nkrataa ne akwahosan.",
      ar: "أخلص النية لله، وتب، واقضِ الديون، واستسمح الناس، وتعلم المناسك، وهيئ المال الحلال والوثائق والصحة.",
    },
  },
  {
    id: "ihram",
    title: { en: "Ihram", ha: "Ihrami", tw: "Ihram", ar: "الإحرام" },
    body: {
      en: "Bathe, wear the two white garments (men) or modest clothing (women), pray two rak'ahs if possible, then make the intention for Hajj and begin the Talbiyah: Labbayk Allāhumma labbayk.",
      ha: "Ka yi wanka, ka sa fararen tufafi biyu (maza) ko sutura mai kyau (mata), ka yi raka'a biyu idan zai yiwu, sannan ka yi niyya ka fara Talbiyya: Labbaika Allāhumma labbaik.",
      tw: "Guare, hyɛ ntadeɛ fitaa mmienu (mmarima) anaa ntadeɛ a ɛfata (mmaa), bɔ rak'ah mmienu, na yɛ Hajj adwene na fi Talbiyah ase: Labbayk Allāhumma labbayk.",
      ar: "اغتسل والبس إزاراً ورداءً أبيضين (للرجال) أو لباساً ساتراً (للنساء)، وصلِّ ركعتين إن تيسر، ثم انوِ الحج ولبِّ: لبيك اللهم لبيك.",
    },
  },
  {
    id: "miqat",
    title: { en: "Miqat", ha: "Miqat", tw: "Miqat", ar: "الميقات" },
    body: {
      en: "The appointed boundaries where ihram must be entered: Dhul-Hulayfah, Al-Juhfah, Qarn al-Manazil, Yalamlam and Dhat 'Irq. Pilgrims flying in enter ihram before crossing the Miqat.",
      ha: "Iyakokin da dole a shiga Ihrami: Zul-Hulaifa, Juhfa, Karnul-Manazil, Yalamlam da Zatu Irqin. Masu jirgin sama su shiga Ihrami kafin su ƙetare Miqat.",
      tw: "Beaeɛ a ɛsɛ sɛ wɔhyɛ Ihram: Dhul-Hulayfah, Al-Juhfah, Qarn al-Manazil, Yalamlam ne Dhat 'Irq. Wɔn a wɔtu wimhyɛn no hyɛ Ihram ansa na wɔatwa Miqat.",
      ar: "المواقيت التي يجب الإحرام منها: ذو الحليفة، والجحفة، وقرن المنازل، ويلملم، وذات عرق. ومن جاء بالطائرة يحرم قبل محاذاة الميقات.",
    },
  },
  {
    id: "tawaf",
    title: { en: "Tawaf al-Qudum", ha: "Dawafi na zuwa", tw: "Tawaf al-Qudum", ar: "طواف القدوم" },
    body: {
      en: "On reaching the Sacred Mosque, circle the Ka'bah seven times anticlockwise starting at the Black Stone, then pray two rak'ahs behind Maqam Ibrahim and drink Zamzam.",
      ha: "Da isa Masallacin Harami, ka yi ɗawafi sau bakwai daga Hajarul-Aswad, sannan ka yi raka'a biyu bayan Maƙamu Ibrahim, ka sha ruwan Zamzam.",
      tw: "Sɛ wodu Asɔredan Kronkron no a, twa Ka'bah ho mprɛnson fi Ɔboɔ Tuntum no ho, bɔ rak'ah mmienu wɔ Maqam Ibrahim akyi, na nom Zamzam.",
      ar: "عند الوصول للمسجد الحرام طف بالكعبة سبعة أشواط من الحجر الأسود، ثم صلِّ ركعتين خلف مقام إبراهيم واشرب من زمزم.",
    },
  },
  {
    id: "sai",
    title: { en: "Sa'i between Safa and Marwah", ha: "Sa'ayi tsakanin Safa da Marwa", tw: "Sa'i wɔ Safa ne Marwah ntam", ar: "السعي بين الصفا والمروة" },
    body: {
      en: "Walk seven times between Safa and Marwah beginning at Safa, remembering Hajar's search for water. Men jog lightly between the green markers.",
      ha: "Ka yi tafiya sau bakwai tsakanin Safa da Marwa, kana farawa daga Safa, kana tuna neman ruwan Hajara. Maza su yi sauri tsakanin fitilun kore.",
      tw: "Nante mprɛnson wɔ Safa ne Marwah ntam, fi Safa ase, kae Hajar nsuhwehwɛ. Mmarima tu mmirika kakra wɔ nsɛnkyerɛnne ahahammono no ntam.",
      ar: "اسعَ سبعة أشواط بين الصفا والمروة مبتدئاً بالصفا، متذكراً سعي هاجر، ويهرول الرجال بين العلمين الأخضرين.",
    },
  },
  {
    id: "mina",
    title: { en: "8 Dhul-Hijjah — Mina", ha: "8 Zulhijja — Mina", tw: "Dhul-Hijjah 8 — Mina", ar: "الثامن من ذي الحجة — منى" },
    body: {
      en: "Travel to Mina (Yawm at-Tarwiyah) and pray Dhuhr, Asr, Maghrib, Isha and Fajr there, shortening four-rak'ah prayers without combining.",
      ha: "Ka tafi Mina (Ranar Tarwiya) ka yi Azahar, La'asar, Magariba, Isha'i da Asuba a can, kana taƙaita sallolin raka'a huɗu ba tare da haɗawa ba.",
      tw: "Kɔ Mina (Yawm at-Tarwiyah) na bɔ Dhuhr, Asr, Maghrib, Isha ne Fajr wɔ hɔ, tia rak'ah nnan mpaebɔ no so a womfa nka ho.",
      ar: "اذهب إلى منى يوم التروية وصلِّ بها الظهر والعصر والمغرب والعشاء والفجر قصراً بلا جمع.",
    },
  },
  {
    id: "arafat",
    title: { en: "9 Dhul-Hijjah — Arafat", ha: "9 Zulhijja — Arafa", tw: "Dhul-Hijjah 9 — Arafat", ar: "التاسع من ذي الحجة — عرفة" },
    body: {
      en: "The greatest pillar of Hajj: stand at Arafat from midday until sunset in du'a, dhikr and repentance. Whoever misses Arafat has missed Hajj.",
      ha: "Rukuni mafi girma na Hajji: tsayuwa a Arafa daga rana ta karkata har faɗuwar rana da addu'a, zikiri da tuba. Wanda ya rasa Arafa ya rasa Hajji.",
      tw: "Hajj nnyinasoɔ kɛseɛ: gyina Arafat fi awia kɔsi owia atɔeɛ, bɔ mpaeɛ, kae Allah na sakyera. Deɛ ɔbɛpa Arafat no apa Hajj.",
      ar: "أعظم أركان الحج: الوقوف بعرفة من الزوال إلى الغروب بالدعاء والذكر والتوبة، ومن فاته عرفة فاته الحج.",
    },
  },
  {
    id: "muzdalifah",
    title: { en: "Muzdalifah", ha: "Muzdalifa", tw: "Muzdalifah", ar: "المزدلفة" },
    body: {
      en: "After sunset proceed to Muzdalifah, combine Maghrib and Isha, rest until Fajr and collect pebbles for the stoning.",
      ha: "Bayan faɗuwar rana ka tafi Muzdalifa, ka haɗa Magariba da Isha'i, ka huta har Asuba, ka tara tsakuwa don jifa.",
      tw: "Owia tɔ akyi kɔ Muzdalifah, ka Maghrib ne Isha bom, home kɔsi Fajr, na boaboa aboɔ nketewa ano ma aboɔtoɔ no.",
      ar: "بعد الغروب انفر إلى مزدلفة واجمع المغرب والعشاء وبِت بها حتى الفجر واجمع الحصى للرمي.",
    },
  },
  {
    id: "rami",
    title: { en: "Rami — Stoning", ha: "Jifan Shaidan", tw: "Rami — Aboɔtoɔ", ar: "رمي الجمرات" },
    body: {
      en: "On 10 Dhul-Hijjah stone Jamrat al-Aqabah with seven pebbles saying Allahu Akbar with each. On the days of Tashriq stone all three Jamarat after midday.",
      ha: "A ranar 10 ga Zulhijja ka jefi Jamratul-Aqaba da tsakuwa bakwai kana cewa Allahu Akbar. A kwanakin Tashriq ka jefi dukkan Jamarat guda uku bayan rana ta karkata.",
      tw: "Wɔ Dhul-Hijjah 10 to Jamrat al-Aqabah aboɔ nson na ka Allahu Akbar. Tashriq nna mu no, to Jamarat mmiɛnsa nyinaa awia akyi.",
      ar: "في العاشر ارمِ جمرة العقبة بسبع حصيات مكبراً مع كل حصاة، وفي أيام التشريق ارمِ الجمرات الثلاث بعد الزوال.",
    },
  },
  {
    id: "hady",
    title: { en: "Hady — Sacrifice", ha: "Hadaya", tw: "Hady — Afɔrebɔ", ar: "الهدي" },
    body: {
      en: "Pilgrims performing Tamattu' or Qiran offer a sacrifice in Mina or through an authorised agency, and the meat is distributed to the poor.",
      ha: "Mai Tamattu'i ko Kirani zai yanka hadaya a Mina ko ta hukuma amintacciya, a raba naman ga matalauta.",
      tw: "Wɔn a wɔyɛ Tamattu' anaa Qiran bɔ afɔdeɛ wɔ Mina anaa fa adwumakuo a wɔapene so so, na wɔkyɛ ɛnam no ma ahiafoɔ.",
      ar: "على المتمتع والقارن هدي يُذبح في منى أو عبر جهة معتمدة ويوزع لحمه على الفقراء.",
    },
  },
  {
    id: "halq",
    title: { en: "Halq or Taqsir", ha: "Aski ko Sassaƙe", tw: "Halq anaa Taqsir", ar: "الحلق أو التقصير" },
    body: {
      en: "Men shave the head completely (preferred) or shorten the hair; women cut a fingertip's length from their hair. This ends the first stage of ihram.",
      ha: "Maza su aske kai gaba ɗaya (mafi falala) ko su sassaƙe; mata su yanke gwargwadon ɗan yatsa. Da haka an fita daga matakin farko na Ihrami.",
      tw: "Mmarima yi wɔn ti nwi nyinaa (ɛyɛ pa) anaa wɔtwa no tia; mmaa twa wɔn nwi kakra. Yei wie Ihram fa a ɛdi kan.",
      ar: "يحلق الرجل رأسه (وهو أفضل) أو يقصر، وتقص المرأة قدر أنملة، وبذلك يحصل التحلل الأول.",
    },
  },
  {
    id: "ifadah",
    title: { en: "Tawaf al-Ifadah", ha: "Ɗawafil-Ifada", tw: "Tawaf al-Ifadah", ar: "طواف الإفاضة" },
    body: {
      en: "Return to Makkah and perform Tawaf al-Ifadah, a pillar of Hajj, followed by Sa'i for those who have not yet performed it.",
      ha: "Ka koma Makka ka yi Ɗawafil-Ifada, rukuni ne na Hajji, sannan Sa'ayi ga wanda bai yi ba.",
      tw: "San kɔ Makkah kɔyɛ Tawaf al-Ifadah, ɛyɛ Hajj nnyinasoɔ, na Sa'i di akyi ma wɔn a wɔnyɛeɛ da.",
      ar: "ارجع إلى مكة وطف طواف الإفاضة وهو ركن، ثم اسعَ إن لم تكن سعيت.",
    },
  },
  {
    id: "wada",
    title: { en: "Farewell Tawaf", ha: "Ɗawafil-Wada'i", tw: "Nkradie Tawaf", ar: "طواف الوداع" },
    body: {
      en: "Before leaving Makkah, perform the farewell Tawaf of seven circuits. Menstruating women are excused from it.",
      ha: "Kafin barin Makka, ka yi ɗawafin bankwana sau bakwai. Mai haila an yafe mata.",
      tw: "Ansa na wobɛfiri Makkah no, yɛ nkradie Tawaf mprɛnson. Mmaa a wɔwɔ bra mu no, wɔmma wɔnyɛ.",
      ar: "قبل مغادرة مكة طف طواف الوداع سبعة أشواط، وتُعفى منه الحائض.",
    },
  },
];

export const UMRAH_STEPS: Step[] = [
  {
    id: "u-ihram",
    title: { en: "1. Ihram at the Miqat", ha: "1. Ihrami a Miqat", tw: "1. Ihram wɔ Miqat", ar: "١. الإحرام من الميقات" },
    body: {
      en: "Bathe, wear ihram, intend Umrah and say: Labbayk Allāhumma 'Umrah.",
      ha: "Ka yi wanka, ka sa Ihrami, ka yi niyyar Umra ka ce: Labbaika Allāhumma 'Umra.",
      tw: "Guare, hyɛ Ihram, yɛ Umrah adwene na ka: Labbayk Allāhumma 'Umrah.",
      ar: "اغتسل والبس الإحرام وانوِ العمرة وقل: لبيك اللهم عمرة.",
    },
  },
  {
    id: "u-talbiyah",
    title: { en: "2. Talbiyah", ha: "2. Talbiyya", tw: "2. Talbiyah", ar: "٢. التلبية" },
    body: {
      en: "Recite the Talbiyah frequently until you begin Tawaf.",
      ha: "Ka riƙa yawaita Talbiyya har sai ka fara ɗawafi.",
      tw: "Ka Talbiyah no mpɛn pii kɔsi sɛ wobɛfi Tawaf ase.",
      ar: "أكثر من التلبية حتى تشرع في الطواف.",
    },
  },
  {
    id: "u-tawaf",
    title: { en: "3. Tawaf", ha: "3. Ɗawafi", tw: "3. Tawaf", ar: "٣. الطواف" },
    body: {
      en: "Seven circuits around the Ka'bah starting and ending at the Black Stone.",
      ha: "Kewaya Ka'aba sau bakwai daga Hajarul-Aswad zuwa gare shi.",
      tw: "Twa Ka'bah ho mprɛnson fi Ɔboɔ Tuntum no ho kɔsi hɔ ara.",
      ar: "سبعة أشواط حول الكعبة تبدأ وتنتهي عند الحجر الأسود.",
    },
  },
  {
    id: "u-prayer",
    title: { en: "4. Two rak'ahs", ha: "4. Raka'a biyu", tw: "4. Rak'ah mmienu", ar: "٤. ركعتان" },
    body: {
      en: "Pray two rak'ahs behind Maqam Ibrahim if possible, then drink Zamzam.",
      ha: "Ka yi raka'a biyu bayan Maƙamu Ibrahim idan zai yiwu, sannan ka sha Zamzam.",
      tw: "Bɔ rak'ah mmienu wɔ Maqam Ibrahim akyi sɛ ɛbɛtumi a, na nom Zamzam.",
      ar: "صلِّ ركعتين خلف مقام إبراهيم إن تيسر ثم اشرب من زمزم.",
    },
  },
  {
    id: "u-sai",
    title: { en: "5. Sa'i", ha: "5. Sa'ayi", tw: "5. Sa'i", ar: "٥. السعي" },
    body: {
      en: "Seven trips between Safa and Marwah, beginning at Safa.",
      ha: "Tafiya sau bakwai tsakanin Safa da Marwa, farawa daga Safa.",
      tw: "Nante mprɛnson wɔ Safa ne Marwah ntam, fi Safa ase.",
      ar: "سبعة أشواط بين الصفا والمروة تبدأ بالصفا.",
    },
  },
  {
    id: "u-halq",
    title: { en: "6. Halq or Taqsir", ha: "6. Aski ko Sassaƙe", tw: "6. Halq anaa Taqsir", ar: "٦. الحلق أو التقصير" },
    body: {
      en: "Shave or shorten the hair; the Umrah is complete and ihram restrictions end.",
      ha: "Ka aske ko ka sassaƙe gashi; Umra ta cika kuma haramun na Ihrami sun ƙare.",
      tw: "Yi wo ti nwi anaa twa no tia; Umrah awie na Ihram mmara no ba awieeɛ.",
      ar: "احلق أو قصّر، وبذلك تمت العمرة وانتهت محظورات الإحرام.",
    },
  },
];

export const IHRAM_PROHIBITIONS: L[] = [
  {
    en: "Cutting hair or nails",
    ha: "Yanke gashi ko farce",
    tw: "Nwi anaa mmɔwerɛ twa",
    ar: "قص الشعر أو الأظافر",
  },
  { en: "Using perfume", ha: "Amfani da turare", ar: "استعمال الطيب", tw: "Aduhwam a wode bɛyɛ adwuma" },
  {
    en: "Marriage contract or intimacy",
    ha: "Ɗaurin aure ko saduwa",
    tw: "Awadeɛ apam anaa ɔhyeɛ",
    ar: "عقد النكاح أو الجماع",
  },
  { en: "Hunting land game", ha: "Farautar namun daji", tw: "Wuram mmoa yɛ", ar: "صيد البر" },
  {
    en: "Men: sewn clothing and covering the head",
    ha: "Maza: sa tufafi ɗinke da rufe kai",
    tw: "Mmarima: ntadeɛ a wɔapam ne ti kata",
    ar: "الرجال: لبس المخيط وتغطية الرأس",
  },
  {
    en: "Women: covering the face with a niqab or wearing gloves",
    ha: "Mata: rufe fuska da nikabi ko sa safar hannu",
    tw: "Mmaa: anim kata niqab anaa nsa nkataho hyɛ",
    ar: "النساء: النقاب ولبس القفازين",
  },
  { en: "Arguing, sinning and obscenity", ha: "Jayayya, zunubi da alfasha", tw: "Akasakasa, bɔne ne kasafi", ar: "الجدال والفسوق والرفث" },
];

export const HAJJ_TYPES: { name: L; body: L }[] = [
  {
    name: { en: "Tamattu'", ha: "Tamattu'i", tw: "Tamattu'", ar: "التمتع" },
    body: {
      en: "Umrah first, exit ihram, then enter ihram again for Hajj on 8 Dhul-Hijjah. A sacrifice is required.",
      ha: "Umra da farko, a fita Ihrami, sannan a sake shiga Ihrami don Hajji ranar 8 ga Zulhijja. Ana bukatar hadaya.",
      tw: "Umrah kan, fi Ihram mu, na san hyɛ Ihram ma Hajj wɔ Dhul-Hijjah 8. Afɔdeɛ ho hia.",
      ar: "العمرة أولاً ثم التحلل ثم الإحرام بالحج في الثامن، ويجب فيه الهدي.",
    },
  },
  {
    name: { en: "Qiran", ha: "Kirani", tw: "Qiran", ar: "القِران" },
    body: {
      en: "Umrah and Hajj combined in one ihram without exiting between them. A sacrifice is required.",
      ha: "Haɗa Umra da Hajji a Ihrami guda ba tare da fita ba. Ana bukatar hadaya.",
      tw: "Ka Umrah ne Hajj bom wɔ Ihram baako mu a wompue. Afɔdeɛ ho hia.",
      ar: "الجمع بين العمرة والحج بإحرام واحد دون تحلل، ويجب فيه الهدي.",
    },
  },
  {
    name: { en: "Ifrad", ha: "Ifradi", tw: "Ifrad", ar: "الإفراد" },
    body: {
      en: "Hajj alone without Umrah in the same journey. No sacrifice is obligatory.",
      ha: "Hajji kaɗai ba tare da Umra a tafiya guda ba. Hadaya ba wajibi ba ce.",
      tw: "Hajj nkoaa a Umrah nka ho wɔ akwantuo koro mu. Afɔdeɛ nyɛ ahyɛdeɛ.",
      ar: "الحج وحده دون عمرة في السفر نفسه، ولا يجب فيه هدي.",
    },
  },
];

export const HAJJ_MISTAKES: L[] = [
  {
    en: "Passing the Miqat without entering ihram",
    ha: "Ƙetare Miqat ba tare da shiga Ihrami ba",
    tw: "Miqat twa a wonhyɛɛ Ihram",
    ar: "تجاوز الميقات دون إحرام",
  },
  {
    en: "Believing one must touch or kiss the Black Stone at all costs",
    ha: "Zaton dole sai an taɓa ko sumbatar Hajarul-Aswad",
    tw: "Adwene sɛ ɛsɛ sɛ wode wo nsa ka Ɔboɔ Tuntum no daa",
    ar: "اعتقاد وجوب استلام الحجر الأسود بأي ثمن",
  },
  {
    en: "Leaving Arafat before sunset",
    ha: "Barin Arafa kafin faɗuwar rana",
    tw: "Arafat gyae ansa na owia atɔ",
    ar: "الدفع من عرفة قبل الغروب",
  },
  {
    en: "Reciting invented du'as for each circuit of Tawaf",
    ha: "Karanta addu'o'in ƙirƙira ga kowane zagaye na ɗawafi",
    tw: "Mpaeɛ a wɔabɔ ho amanneɛ ka wɔ Tawaf twa biara mu",
    ar: "تخصيص أدعية مبتدعة لكل شوط في الطواف",
  },
  {
    en: "Harming other pilgrims by pushing and quarrelling",
    ha: "Cutar da sauran mahajjata da turawa da husuma",
    tw: "Ahajjfoɔ afoforɔ pia ne akasakasa a ɛha wɔn",
    ar: "إيذاء الحجاج بالمزاحمة والخصام",
  },
];

export const HAJJ_WOMEN: L[] = [
  {
    en: "A woman wears ordinary modest clothing in ihram; her face is uncovered by niqab and hands by gloves, though she may drape a cover when men pass.",
    ha: "Mace tana sanya sutura mai kyau a Ihrami; ba ta rufe fuska da nikabi ko hannu da safar hannu, sai dai za ta iya jefa mayafi idan maza na wucewa.",
    tw: "Ɔbaa hyɛ ntadeɛ a ɛfata wɔ Ihram mu; ɔmfa niqab nkata n'anim na ɔmhyɛ nsa nkataho, nanso ɔbɛtumi de ntoma akata sɛ mmarima retwam a.",
    ar: "تلبس المرأة ثيابها الساترة في الإحرام، ولا تنتقب ولا تلبس القفازين، ولها أن تسدل على وجهها عند مرور الرجال.",
  },
  {
    en: "Menstruation does not prevent any rite except Tawaf; she performs everything else and delays Tawaf until she is pure.",
    ha: "Haila ba ta hana kowane aiki sai ɗawafi; za ta yi sauran, ta jinkirta ɗawafi har ta tsarkaka.",
    tw: "Bra mu tenabea nsi ɔsom biara kwan gye Tawaf; ɔyɛ deɛ aka nyinaa na ɔtwɛn kɔsi sɛ ne ho bɛte.",
    ar: "الحيض لا يمنع من شيء من المناسك إلا الطواف، فتؤدي بقية المناسك وتؤخر الطواف حتى تطهر.",
  },
  {
    en: "She shortens her hair by a fingertip's length rather than shaving.",
    ha: "Za ta sassaƙe gashi gwargwadon ɗan yatsa, ba aski ba.",
    tw: "Ɔtwa ne nwi kakra, na ɔnyi ne ti.",
    ar: "تقصر من شعرها قدر أنملة ولا تحلق.",
  },
];

export const HAJJ_FAQ: { q: L; a: L }[] = [
  {
    q: {
      en: "Is Hajj obligatory every year?",
      ha: "Shin Hajji wajibi ne kowace shekara?",
      tw: "Hajj yɛ ahyɛdeɛ afe biara anaa?",
      ar: "هل الحج واجب كل عام؟",
    },
    a: {
      en: "No. Hajj is obligatory once in a lifetime upon a Muslim who is able; further Hajj is voluntary.",
      ha: "A'a. Hajji wajibi ne sau ɗaya a rayuwa ga Musulmi mai iko; sauran nafila ne.",
      tw: "Daabi. Hajj yɛ ahyɛdeɛ pɛnkoro wɔ Muslim a ɔbɛtumi asetena mu; deɛ ɛka ho yɛ pɛ.",
      ar: "لا، الحج واجب مرة واحدة في العمر على المستطيع، وما زاد فهو تطوع.",
    },
  },
  {
    q: {
      en: "Can I perform Hajj on behalf of a deceased parent?",
      ha: "Zan iya yin Hajji a madadin mahaifi da ya rasu?",
      tw: "Metumi ayɛ Hajj ama m'awofoɔ a wawu anaa?",
      ar: "هل أحج عن والدي المتوفى؟",
    },
    a: {
      en: "Yes, provided you have already performed your own Hajj first, as established in the hadith of Shubrumah.",
      ha: "Eh, muddin ka riga ka yi naka Hajjin, kamar yadda hadisin Shubruma ya tabbatar.",
      tw: "Aane, sɛ woayɛ w'ankasa Hajj kan a, sɛdeɛ Shubrumah hadith no kyerɛ.",
      ar: "نعم بشرط أن تكون قد حججت عن نفسك أولاً كما في حديث شبرمة.",
    },
  },
  {
    q: {
      en: "Does a woman need a mahram for Hajj?",
      ha: "Shin mace tana bukatar mahrami don Hajji?",
      tw: "Ɔbaa hia mahram ansa na wakɔ Hajj anaa?",
      ar: "هل تحتاج المرأة إلى محرم في الحج؟",
    },
    a: {
      en: "The majority of scholars require a mahram for travel; some permit travel with a trustworthy group of women. Scholars legitimately differ — consult a trusted scholar in your locality.",
      ha: "Yawancin malamai suna wajabta mahrami; wasu sun halatta tafiya cikin amintaccen rukunin mata. Malamai sun saɓa a nan — ka tuntubi amintaccen malami.",
      tw: "Nimdefoɔ dodoɔ no ara hwehwɛ mahram; ebinom ma kwan sɛ ɔne mmaa kuo a wɔgye wɔn die bɛtu kwan. Nimdefoɔ nsusuiɛ gu ahodoɔ — bisa ɔbenfoɔ a wogye no die.",
      ar: "جمهور العلماء يشترط المحرم للسفر، وأجاز بعضهم السفر مع رفقة مأمونة من النساء، والخلاف معتبر فاستشر عالماً ثقة.",
    },
  },
];

export const HAJJ_DUAS: { arabic: string; transliteration: string; meaning: L }[] = [
  {
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
    transliteration: "Labbayk Allāhumma labbayk, labbayk lā sharīka laka labbayk, inna-l-hamda wan-ni'mata laka wal-mulk, lā sharīka lak",
    meaning: {
      en: "Here I am, O Allah, here I am. You have no partner. All praise, blessing and dominion are Yours.",
      ha: "Na amsa kiranka ya Allah. Babu abokin tarayya gare Ka. Godiya, ni'ima da mulki naKa ne.",
      tw: "Me nie, O Allah, me nie. Wonni ɔhokafoɔ. Ayeyie, nhyira ne ahennie yɛ wo dea.",
      ar: "لبيك اللهم لبيك، لا شريك لك، إن الحمد والنعمة لك والملك.",
    },
  },
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbanā ātinā fid-dunyā hasanah wa fil-ākhirati hasanah wa qinā 'adhāban-nār",
    meaning: {
      en: "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. (Qur'an 2:201)",
      ha: "Ya Ubangijinmu, ka ba mu alheri a duniya da lahira, ka kiyaye mu daga azabar wuta. (Qur'ani 2:201)",
      tw: "Yɛn Wura, ma yɛn adepa wɔ wiase ne daakye, na bɔ yɛn ho ban firi Ogya asotwe mu. (Qur'an 2:201)",
      ar: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار. (البقرة ٢٠١)",
    },
  },
];
