import type { L } from "./content";

export type Dua = {
  id: string;
  category: string;
  title: L;
  arabic: string;
  transliteration: string;
  translation: L;
  source: string;
};

export const DUA_CATEGORIES: { id: string; label: L }[] = [
  { id: "morning", label: { en: "Morning", ha: "Safiya", tw: "Anɔpa", ar: "الصباح" } },
  { id: "evening", label: { en: "Evening", ha: "Yamma", tw: "Anwummerɛ", ar: "المساء" } },
  { id: "sleep", label: { en: "Before sleeping", ha: "Kafin barci", tw: "Ansa na woada", ar: "قبل النوم" } },
  { id: "prayer", label: { en: "After prayer", ha: "Bayan sallah", tw: "Mpaebɔ akyi", ar: "بعد الصلاة" } },
  { id: "travel", label: { en: "Travel", ha: "Tafiya", tw: "Akwantuo", ar: "السفر" } },
  { id: "food", label: { en: "Food", ha: "Abinci", tw: "Aduane", ar: "الطعام" } },
  { id: "protection", label: { en: "Protection", ha: "Kariya", tw: "Ahobanbɔ", ar: "الحماية" } },
  { id: "forgiveness", label: { en: "Forgiveness", ha: "Neman gafara", tw: "Bɔnefakyɛ", ar: "الاستغفار" } },
  { id: "parents", label: { en: "Parents", ha: "Iyaye", tw: "Awofoɔ", ar: "الوالدان" } },
  { id: "ramadan", label: { en: "Ramadan", ha: "Ramadan", tw: "Ramadan", ar: "رمضان" } },
  { id: "hajj", label: { en: "Hajj & Umrah", ha: "Hajji da Umra", tw: "Hajj ne Umrah", ar: "الحج والعمرة" } },
  { id: "anxiety", label: { en: "Anxiety & distress", ha: "Damuwa", tw: "Adwenemhaw", ar: "الهم والكرب" } },
  { id: "general", label: { en: "General", ha: "Gaba ɗaya", tw: "Nkoraa", ar: "عامة" } },
];

export const DUAS: Dua[] = [
  {
    id: "morning-1",
    category: "morning",
    title: { en: "Morning remembrance", ha: "Zikirin safiya", tw: "Anɔpa nkaeɛ", ar: "ذكر الصباح" },
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    transliteration: "Asbahnā wa asbahal-mulku lillāh, wal-hamdu lillāh, lā ilāha illa-llāhu wahdahu lā sharīka lah",
    translation: {
      en: "We have entered the morning and the dominion belongs to Allah. All praise is for Allah. There is no deity but Allah alone, without partner.",
      ha: "Mun wayi gari kuma mulki na Allah ne. Godiya ta tabbata ga Allah. Babu abin bautawa sai Allah shi kaɗai, babu abokin tarayya.",
      tw: "Yɛadu anɔpa na ahennie yɛ Allah dea. Ayeyie wɔ Allah. Nyame biara nni hɔ gye Allah nkoaa, ɔnni ɔhokafoɔ.",
      ar: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له.",
    },
    source: "Sahih Muslim 2723",
  },
  {
    id: "evening-1",
    category: "evening",
    title: { en: "Evening remembrance", ha: "Zikirin yamma", tw: "Anwummerɛ nkaeɛ", ar: "ذكر المساء" },
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    transliteration: "Amsaynā wa amsal-mulku lillāh, wal-hamdu lillāh, lā ilāha illa-llāhu wahdahu lā sharīka lah",
    translation: {
      en: "We have entered the evening and the dominion belongs to Allah. All praise is for Allah. There is no deity but Allah alone, without partner.",
      ha: "Mun yini kuma mulki na Allah ne. Godiya ta tabbata ga Allah. Babu abin bautawa sai Allah shi kaɗai.",
      tw: "Yɛadu anwummerɛ na ahennie yɛ Allah dea. Ayeyie wɔ Allah. Nyame biara nni hɔ gye Allah nkoaa.",
      ar: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له.",
    },
    source: "Sahih Muslim 2723",
  },
  {
    id: "sleep-1",
    category: "sleep",
    title: { en: "Before sleeping", ha: "Kafin barci", tw: "Ansa na woada", ar: "قبل النوم" },
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allāhumma amūtu wa ahyā",
    translation: {
      en: "In Your name, O Allah, I die and I live.",
      ha: "Da sunanKa ya Allah nake mutuwa kuma nake rayuwa.",
      tw: "Wo din mu, O Allah, mewu na metena ase.",
      ar: "باسمك اللهم أموت وأحيا.",
    },
    source: "Sahih al-Bukhari 6324",
  },
  {
    id: "prayer-1",
    category: "prayer",
    title: { en: "After the prayer", ha: "Bayan sallah", tw: "Mpaebɔ akyi", ar: "بعد الصلاة" },
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration: "Allāhumma a'innī 'alā dhikrika wa shukrika wa husni 'ibādatik",
    translation: {
      en: "O Allah, help me to remember You, to thank You and to worship You in the best manner.",
      ha: "Ya Allah, ka taimake ni wajen ambatonKa, godiyarKa da kyautata ibadarKa.",
      tw: "O Allah, boa me na menkae Wo, menda Wo ase na mensom Wo yie.",
      ar: "اللهم أعني على ذكرك وشكرك وحسن عبادتك.",
    },
    source: "Sunan Abu Dawud 1522",
  },
  {
    id: "travel-1",
    category: "travel",
    title: { en: "Dua for travel", ha: "Addu'ar tafiya", tw: "Akwantuo mpaeɛ", ar: "دعاء السفر" },
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration: "Subhāna-lladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā lamunqalibūn",
    translation: {
      en: "Glory be to the One who subjected this to us, and we could never have done it. And to our Lord we shall surely return.",
      ha: "Tsarki ya tabbata ga wanda Ya hore mana wannan, mu kuma ba ma iyawa. Kuma zuwa ga Ubangijinmu za mu koma.",
      tw: "Animuonyam nka Deɛ ɔmaa yɛn tumii yɛɛ yei, na yɛn ankasa yɛntumi. Na yɛn Wura hɔ na yɛbɛsan akɔ.",
      ar: "سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون.",
    },
    source: "Qur'an 43:13-14; Sahih Muslim 1342",
  },
  {
    id: "food-1",
    category: "food",
    title: { en: "Before eating", ha: "Kafin cin abinci", tw: "Ansa na wobɛdidi", ar: "قبل الطعام" },
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillāh",
    translation: {
      en: "In the name of Allah. (If forgotten at the start, say: Bismillāhi awwalahu wa ākhirah)",
      ha: "Da sunan Allah. (Idan an manta, a ce: Bismillāhi awwalahu wa ākhirah)",
      tw: "Allah din mu. (Sɛ wo werɛ firi ase a, ka: Bismillāhi awwalahu wa ākhirah)",
      ar: "بسم الله. (وإن نسي في أوله فليقل: بسم الله أوله وآخره)",
    },
    source: "Sunan Abu Dawud 3767",
  },
  {
    id: "protection-1",
    category: "protection",
    title: { en: "Protection from harm", ha: "Kariya daga cuta", tw: "Ahobanbɔ firi ɔhaw ho", ar: "التحصين من الضرر" },
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillāhi-lladhī lā yadurru ma'a-smihi shay'un fil-ardi wa lā fis-samā', wa huwas-samī'ul-'alīm",
    translation: {
      en: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm; He is the All-Hearing, the All-Knowing.",
      ha: "Da sunan Allah, wanda tare da sunanSa babu abin da ke cutarwa a ƙasa ko sama; Shi Mai ji ne, Masani.",
      tw: "Allah din mu, a ne din nti biribiara a ɛwɔ asase so anaa ɔsoro rentumi nhaw; Ɔno ne Ɔtiefoɔ, Onimdefoɔ.",
      ar: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
    },
    source: "Sunan at-Tirmidhi 3388",
  },
  {
    id: "forgiveness-1",
    category: "forgiveness",
    title: { en: "Sayyid al-Istighfar", ha: "Sayyidul-Istigfari", tw: "Sayyid al-Istighfar", ar: "سيد الاستغفار" },
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
    transliteration: "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā 'abduk, wa anā 'alā 'ahdika wa wa'dika mas-tata't",
    translation: {
      en: "O Allah, You are my Lord, there is no deity but You. You created me and I am Your servant, and I keep Your covenant and promise as much as I can.",
      ha: "Ya Allah, Kai ne Ubangijina, babu abin bautawa sai Kai. Ka halicce ni ni kuwa bawanKa ne, ina kan alkawarinKa gwargwadon ikona.",
      tw: "O Allah, Wo ne me Wura, nyame biara nni hɔ gye Wo. Wobɔɔ me na meyɛ w'akoa, na medi wo apam so sɛdeɛ metumi.",
      ar: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت.",
    },
    source: "Sahih al-Bukhari 6306",
  },
  {
    id: "parents-1",
    category: "parents",
    title: { en: "Dua for parents", ha: "Addu'a ga iyaye", tw: "Mpaeɛ ma awofoɔ", ar: "دعاء للوالدين" },
    arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbi-rhamhumā kamā rabbayānī saghīrā",
    translation: {
      en: "My Lord, have mercy upon them as they raised me when I was small. (Qur'an 17:24)",
      ha: "Ya Ubangijina, Ka yi musu rahama kamar yadda suka rene ni ina ƙarami. (Qur'ani 17:24)",
      tw: "Me Wura, hu wɔn mmɔbɔ sɛdeɛ wɔtetee me wɔ me mmɔfraase. (Qur'an 17:24)",
      ar: "رب ارحمهما كما ربياني صغيراً. (الإسراء ٢٤)",
    },
    source: "Qur'an 17:24",
  },
  {
    id: "ramadan-1",
    category: "ramadan",
    title: { en: "Breaking the fast", ha: "Buɗe baki", tw: "Mmuadadie mu buebuei", ar: "عند الإفطار" },
    arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    transliteration: "Dhahaba-z-zama'u wabtallati-l-'urūqu wa thabata-l-ajru in shā' Allāh",
    translation: {
      en: "The thirst is gone, the veins are moistened and the reward is confirmed, if Allah wills.",
      ha: "Ƙishirwa ta tafi, jijiyoyi sun jiƙa, kuma lada ya tabbata in Allah Ya so.",
      tw: "Sukɔm no atwam, mogyabɔne no anom nsuo, na akatua no atim, sɛ Allah pɛ a.",
      ar: "ذهب الظمأ وابتلت العروق وثبت الأجر إن شاء الله.",
    },
    source: "Sunan Abu Dawud 2357",
  },
  {
    id: "hajj-1",
    category: "hajj",
    title: { en: "Talbiyah", ha: "Talbiyya", tw: "Talbiyah", ar: "التلبية" },
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ",
    transliteration: "Labbayk Allāhumma labbayk, labbayk lā sharīka laka labbayk",
    translation: {
      en: "Here I am, O Allah, here I am. Here I am, You have no partner, here I am.",
      ha: "Na amsa kiranka ya Allah. Babu abokin tarayya gare Ka.",
      tw: "Me nie, O Allah, me nie. Wonni ɔhokafoɔ, me nie.",
      ar: "لبيك اللهم لبيك، لبيك لا شريك لك لبيك.",
    },
    source: "Sahih al-Bukhari 1549",
  },
  {
    id: "anxiety-1",
    category: "anxiety",
    title: { en: "In distress", ha: "Lokacin damuwa", tw: "Ahohiahia mu", ar: "عند الكرب" },
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration: "Lā ilāha illa-llāhu-l-'azīmu-l-halīm, lā ilāha illa-llāhu rabbu-l-'arshi-l-'azīm",
    translation: {
      en: "There is no deity but Allah, the Mighty, the Forbearing. There is no deity but Allah, Lord of the Magnificent Throne.",
      ha: "Babu abin bautawa sai Allah Mai girma Mai haƙuri. Babu abin bautawa sai Allah Ubangijin Al'arshi mai girma.",
      tw: "Nyame biara nni hɔ gye Allah, Ɔkɛseɛ, Abodwokyerɛfoɔ. Nyame biara nni hɔ gye Allah, Ahennwa Kɛseɛ no Wura.",
      ar: "لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم.",
    },
    source: "Sahih al-Bukhari 6346",
  },
  {
    id: "general-1",
    category: "general",
    title: { en: "Seeking beneficial knowledge", ha: "Neman ilimi mai amfani", tw: "Nimdeɛ a mfasoɔ wɔ so hwehwɛ", ar: "طلب العلم النافع" },
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    transliteration: "Allāhumma innī as'aluka 'ilman nāfi'ā, wa rizqan tayyibā, wa 'amalan mutaqabbalā",
    translation: {
      en: "O Allah, I ask You for beneficial knowledge, wholesome provision and accepted deeds.",
      ha: "Ya Allah, ina roƙonKa ilimi mai amfani, arziki mai kyau da aiki karɓaɓɓe.",
      tw: "O Allah, mesrɛ Wo nimdeɛ a mfasoɔ wɔ so, akɔnhoma pa ne nnwuma a wɔgye tom.",
      ar: "اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً.",
    },
    source: "Sunan Ibn Majah 925",
  },
];

export const ISLAMIC_EVENTS: { name: L; date: L }[] = [
  {
    name: { en: "Ramadan begins", ha: "Farkon Ramadan", tw: "Ramadan hyɛ aseɛ", ar: "بداية رمضان" },
    date: { en: "1 Ramadan", ha: "1 Ramadan", tw: "Ramadan 1", ar: "١ رمضان" },
  },
  {
    name: { en: "Laylat al-Qadr (sought in the last ten nights)", ha: "Lailatul Kadari (a cikin goman ƙarshe)", tw: "Laylat al-Qadr (anadwo edu a etwa toɔ mu)", ar: "ليلة القدر (في العشر الأواخر)" },
    date: { en: "Odd nights, last ten of Ramadan", ha: "Dararen mara na goman ƙarshe", tw: "Anadwo a ɛntɔ pɛ wɔ edu a ɛtwa toɔ mu", ar: "الليالي الوترية من العشر الأواخر" },
  },
  {
    name: { en: "Eid al-Fitr", ha: "Karamar Sallah", tw: "Eid al-Fitr", ar: "عيد الفطر" },
    date: { en: "1 Shawwal", ha: "1 Shawwal", tw: "Shawwal 1", ar: "١ شوال" },
  },
  {
    name: { en: "Day of Arafah", ha: "Ranar Arafa", tw: "Arafah Da", ar: "يوم عرفة" },
    date: { en: "9 Dhul-Hijjah", ha: "9 Zulhijja", tw: "Dhul-Hijjah 9", ar: "٩ ذو الحجة" },
  },
  {
    name: { en: "Eid al-Adha", ha: "Babbar Sallah", tw: "Eid al-Adha", ar: "عيد الأضحى" },
    date: { en: "10 Dhul-Hijjah", ha: "10 Zulhijja", tw: "Dhul-Hijjah 10", ar: "١٠ ذو الحجة" },
  },
  {
    name: { en: "Islamic New Year", ha: "Sabuwar Shekarar Hijira", tw: "Islam Afe Foforɔ", ar: "رأس السنة الهجرية" },
    date: { en: "1 Muharram", ha: "1 Muharram", tw: "Muharram 1", ar: "١ محرم" },
  },
  {
    name: { en: "Day of Ashura", ha: "Ranar Ashura", tw: "Ashura Da", ar: "يوم عاشوراء" },
    date: { en: "10 Muharram", ha: "10 Muharram", tw: "Muharram 10", ar: "١٠ محرم" },
  },
];
