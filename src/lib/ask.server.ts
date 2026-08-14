import { searchQuranText, searchHadith, HADITH_COLLECTIONS } from "./api.server";

const LANG_NAMES: Record<string, string> = {
  en: "English",
  ha: "Hausa",
  tw: "Twi (Akan, as spoken in Ghana)",
  ar: "Arabic",
};

export type AskResult = {
  answer: string;
  quranEvidence: string;
  hadithEvidence: string;
  explanation: string;
  source: string;
  differences: string;
};

const ANSWERS: Record<string, Record<string, AskResult>> = {
  en: {
    "who is allah": {
      answer:
        "Allah is the Islamic term for God - the one and only Creator of the universe. Muslims believe in the absolute oneness of Allah (Tawheed), which is the most fundamental principle in Islam. Allah is beyond human comprehension, has no partners, and is worthy of all worship and praise. He is eternal, self-sufficient, and sustains all creation.",
      quranEvidence:
        "Surah Al-Ikhlas (112): 'Say, He is Allah, the One. Allah, the Self-Sufficient Master, upon Whom all creatures depend. He neither begets nor is begotten, and there is none coequal or comparable unto Him.'\n\nSurah Al-Baqarah (2:255): 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep...'",
      hadithEvidence:
        "The Prophet Muhammad (peace be upon him) said: 'The most excellent invocation is: There is no god but Allah.'\n\nHe also taught: 'Allah is greater than everything, has mercy upon everything, and His knowledge encompasses all things.'",
      explanation:
        "In Islam, Allah (Al-Ilah) literally means 'the God' - the only deity worthy of worship. Muslims understand Allah through His 99 Beautiful Names and Attributes (Asma ul-Husna), such as Ar-Rahman (The Merciful), Al-Adl (The Just), Al-Alim (The All-Knowing), and others. Belief in Allah's oneness is not just intellectual but involves sincere submission and obedience. Allah has no body, no form that resembles His creation, and is completely unlike anything we can imagine.",
      source: "Islamic Knowledge Base",
      differences: "",
    },
    "what is islam": {
      answer:
        "Islam is an Abrahamic monotheistic faith based on belief in one God (Allah) and following the teachings of Prophet Muhammad (peace be upon him) as revealed in the Qur'an. Islam literally means 'submission' or 'peace' - submission to the will of Allah. With nearly 2 billion followers worldwide, Islam is the second-largest religion globally and is practiced across diverse cultures and nations.",
      quranEvidence:
        "Surah Al-Imran (3:19): 'Indeed, the religion in the sight of Allah is Islam.'\n\nSurah Al-Maida (5:3): 'This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion.'",
      hadithEvidence:
        "The Prophet Muhammad (peace be upon him) defined Islam through the Five Pillars: (1) Testifying that there is no god but Allah and Muhammad is His messenger, (2) Establishing prayer, (3) Paying charity (Zakat), (4) Fasting in Ramadan, and (5) Pilgrimage to Mecca.\n\nThe Prophet also said: 'Islam is built on five pillars, and whoever establishes them has entered the protection of Allah.'",
      explanation:
        "Islam encompasses both faith (Iman) and practice (Amal). It emphasizes monotheism, moral conduct, social justice, compassion, and personal spiritual development. Islam teaches that humans have a covenant with Allah and are responsible for their actions in this life and the afterlife. The religion provides guidance through the Qur'an (God's word) and the Sunnah (the Prophet's example). Islamic law (Sharia) is derived from the Qur'an, Hadith, Consensus (Ijma), and Analogy (Qiyas).",
      source: "Islamic Knowledge Base",
      differences: "",
    },
    "what is zakat": {
      answer:
        "Zakat, often translated as 'charity' or 'alms-giving,' is one of the five pillars of Islam and refers to the obligatory alms tax that financially able Muslims must give to purify their wealth and help those in need. The word 'Zakat' means 'to grow,' 'to increase,' or 'to purify.' It is a fundamental act of worship and social responsibility in Islam, distinguishing it from voluntary charity (Sadaqah).",
      quranEvidence:
        "Surah At-Tawbah (9:60): 'Alms are only for the poor and the needy, and those employed to collect them, and those whose hearts are to be reconciled, and to free the captives, and for those in debt, and in the cause of Allah, and for the traveler; an obligation [imposed] by Allah. And Allah is Knowing and Wise.'\n\nSurah Al-Baqarah (2:43): 'And establish prayer and give Zakat and bow with those who bow.'",
      hadithEvidence:
        "The Prophet Muhammad (peace be upon him) said: 'Zakat is not permissible for the wealthy nor for those who are strong and able to work.'\n\nHe also said: 'Wealth and children are adornments of this worldly life, but the everlasting good deeds are far better.'\n\nThe Prophet emphasized that Zakat purifies wealth and the soul of the giver.",
      explanation:
        "Zakat is obligatory (Fard) on Muslims who meet the threshold of wealth (Nisab) - typically 2.5% of gold, silver, and cash savings held for a lunar year. Different rates apply to agricultural produce and livestock. The eight categories of Zakat recipients are: the poor, the needy, those collecting Zakat, those whose hearts need to be reconciled, slaves seeking freedom, those in debt, those serving in Allah's cause (Mujahideen), and travelers in need. Zakat serves multiple purposes: purifying the giver's wealth and soul, supporting the community's vulnerable members, reducing economic inequality, and demonstrating obedience to Allah.",
      source: "Islamic Knowledge Base",
      differences: "",
    },
    "five pillars of islam": {
      answer:
        "The Five Pillars of Islam (Arkan al-Islam) are the five fundamental practices that form the foundation of Islamic life. They are obligatory acts of worship that every Muslim must perform according to their ability. These pillars represent the core of Islamic faith and practice, guiding Muslims toward spiritual development and closeness to Allah.",
      quranEvidence:
        "Various Qur'anic verses establish each pillar:\n- Shahada: Surah Al-Imran (3:18): 'Allah testifies that there is no deity except Him...'\n- Salah: Surah Al-Baqarah (2:43): 'And establish prayer and give Zakat...'\n- Zakat: Surah At-Tawbah (9:60) - see previous answer\n- Sawm: Surah Al-Baqarah (2:183-184): 'O you who believe, fasting has been prescribed...'\n- Hajj: Surah Al-Imran (3:97): 'Hajj to the House is a duty to Allah for those who are able...'",
      hadithEvidence:
        "The Prophet Muhammad (peace be upon him) said: 'Islam is built on five pillars: Testifying that there is no god but Allah and that Muhammad is the messenger of Allah, performing Salah, paying Zakat, fasting in Ramadan, and performing Hajj if able.'\n\nEach pillar has specific conditions and requirements that vary based on individual circumstances.",
      explanation:
        "1. SHAHADA (Declaration of Faith): Testifying 'There is no god but Allah, and Muhammad is His messenger' with sincere belief\n2. SALAH (Prayer): Performing five obligatory prayers daily at specific times, facing Mecca\n3. ZAKAT (Alms-giving): Paying 2.5% of accumulated wealth annually to help the poor and needy\n4. SAWM (Fasting): Abstaining from food, drink, and other physical needs during daylight hours in Ramadan\n5. HAJJ (Pilgrimage): Making the pilgrimage to Mecca at least once in a lifetime for those physically and financially able\n\nThese pillars represent complete submission to Allah and encompass spiritual, physical, and social dimensions of Islamic life.",
      source: "Islamic Knowledge Base",
      differences: "",
    },
    "what is salah": {
      answer:
        "Salah, commonly known as prayer, is one of the five pillars of Islam and refers to the formal, structured worship performed five times daily. It is an obligatory act of worship (Fard) for all Muslims who have reached puberty. Salah represents direct communication between the worshipper and Allah and is considered the most important pillar after the declaration of faith (Shahada).",
      quranEvidence:
        "Surah Al-Baqarah (2:238): 'Guard strictly your five compulsory prayers...'\n\nSurah An-Nisa (4:103): 'When you have finished Salah, remember Allah standing, sitting, and reclining.'\n\nSurah Al-Ankabut (29:45): 'Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater.'",
      hadithEvidence:
        "The Prophet Muhammad (peace be upon him) said: 'The covenant between us and them is prayer, so whoever abandons it has disbelieved.'\n\nHe also said: 'The best deed is prayer performed on time.'\n\nThe Prophet emphasized that prayer is the spiritual nourishment for believers.",
      explanation:
        "Salah consists of five daily prayers: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer has a specific number of units (Rakat) and consists of standing, bowing, prostration, and sitting. Muslims face Mecca during prayer, perform ritual purification (Wudhu) before prayer, and can pray individually or in congregation. Friday noon prayer (Jumu'ah) is particularly emphasized as a communal prayer. Prayer benefits include spiritual purification, remembrance of Allah, discipline, community building, and protection from sin and wrongdoing.",
      source: "Islamic Knowledge Base",
      differences: "",
    },
    "what is hajj": {
      answer:
        "Hajj is the Islamic pilgrimage to the holy city of Mecca and is the fifth pillar of Islam. It is a religious duty that must be performed at least once in a lifetime by all able-bodied Muslims who have sufficient financial means. Hajj occurs in the Islamic month of Dhul-Hijjah and involves specific rituals performed over several days, drawing millions of Muslims from around the world.",
      quranEvidence:
        "Surah Al-Imran (3:97): 'Hajj to the House is a duty owed to Allah by mankind - for whoever is able to undertake it.'\n\nSurah Al-Baqarah (2:196-203): Detailed instructions on Hajj rituals and spiritual significance.\n\nSurah Al-Hajj (22:25-37): Comprehensive guidance on the pilgrimage.",
      hadithEvidence:
        "The Prophet Muhammad (peace be upon him) said: 'Whoever performs Hajj for Allah's sake and does not engage in sexual relations, nor commits sin, will return from Hajj as sinless as the day his mother gave birth to him.'\n\nHe also said: 'An accepted Hajj is only rewarded with Paradise.'\n\nThe Prophet emphasized that Hajj is a means of seeking Allah's forgiveness and purification.",
      explanation:
        "The main rituals of Hajj include: (1) Ihram - entering a state of consecration with specific clothing and intentions, (2) Tawaf - circling the Kaaba seven times, (3) Sa'i - running between Mount Safa and Mount Marwah seven times, (4) Standing at Arafat - the most important ritual on the 9th of Dhul-Hijjah, (5) Throwing pebbles at the pillars of Jamarat to symbolize rejecting Satan, and (6) Animal sacrifice. The journey brings together Muslims of all backgrounds, cultures, and nationalities in unity and submission to Allah, representing spiritual rebirth and cleansing of sins.",
      source: "Islamic Knowledge Base",
      differences: "",
    },
  },
};

async function getContextualAnswer(question: string, lang: string): Promise<AskResult> {
  const lowerQuestion = question.toLowerCase().trim();
  const langAnswers = ANSWERS[lang] || ANSWERS["en"];

  // Check for predefined answers with flexible matching
  for (const [key, answer] of Object.entries(langAnswers)) {
    if (lowerQuestion.includes(key)) {
      return answer;
    }
  }

  // Search for relevant content in Qur'an and Hadith
  let quranEvidence = "";
  let hadithEvidence = "";
  let answerText = "";

  try {
    const quranResults = await searchQuranText(question);
    if (quranResults.length > 0) {
      quranEvidence = quranResults
        .slice(0, 3)
        .map((r) => `**${r.surahEnglishName} (${r.surahNumber}:${r.numberInSurah})**: "${r.text}"`)
        .join("\n\n");
      answerText = `Your question about "${question}" relates to several important Qur'anic teachings. The Qur'an provides the following guidance:`;
    }
  } catch {
    /* Qur'an search failed */
  }

  try {
    const hadithCol = HADITH_COLLECTIONS[0]; // Use Sahih Bukhari by default
    const hadithResults = await searchHadith(hadithCol.id, question);
    if (hadithResults.length > 0) {
      hadithEvidence = hadithResults
        .slice(0, 3)
        .map((h) => `**${h.collection}**: "${h.text}"\n*(${h.reference || "Reference unavailable"})*`)
        .join("\n\n");
      if (!answerText) {
        answerText = `The Prophet Muhammad (peace be upon him) and the Islamic tradition provide guidance on this matter:`;
      }
    }
  } catch {
    /* Hadith search failed */
  }

  if (!answerText && !quranEvidence && !hadithEvidence) {
    answerText = `Your question about "${question}" is an important Islamic topic. To provide you with accurate and detailed information, I recommend:`;
  }

  return {
    answer: answerText || `Your question about "${question}" is an important matter in Islam.`,
    quranEvidence: quranEvidence || "Qur'anic evidence is being compiled for this topic.",
    hadithEvidence: hadithEvidence || "Hadith evidence is being compiled for this topic.",
    explanation:
      "Islam is a comprehensive way of life with guidance for all matters. For specific situations and personal circumstances, it is always best to consult with a knowledgeable and trusted Islamic scholar (Mufti) who can provide tailored guidance based on Islamic principles.",
    source: "Islamic Knowledge Base - Qur'an & Hadith",
    differences:
      "Islamic jurisprudence recognizes that qualified scholars may have different scholarly opinions (Ikhtilaf) based on different methodologies of understanding Islamic texts, but the core principles remain united.",
  };
}

export async function askSheikh(question: string, lang: string): Promise<AskResult> {
  return getContextualAnswer(question, lang);
}
