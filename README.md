# Ask Hajj Kassim (56)

ASK SHEIKH HAJJ KASSIM

Multilingual Islamic Knowledge, Qur'an, Hadith, Hajj & Muslim Companion Web App

Build a complete, modern, professional, responsive Islamic web application called:

"Ask Sheikh Hajj Kassim"

Tagline:

Ask. Learn. Understand. Live Islam.

The application should be designed for Muslims, especially users in Ghana, West Africa, and the wider Muslim community.

The platform should allow users to ask Islamic questions, read the complete Qur'an, explore Hadith, learn the Five Pillars of Islam, learn Hajj and Umrah, access Duas, prayer times, Qibla, Islamic calendar, and other authentic Islamic resources.

1. LANGUAGES — VERY IMPORTANT

The application MUST support these four languages:

🇬🇧 English

🇬🇭 Hausa

🇬🇭 Twi

🇸🇦 Arabic

Add a language selector in the navigation/header:

English | Hausa | Twi | العربية

The selected language should be remembered.

Use browser local storage only for the user's language preference — NEVER store API keys in local storage.

Language requirements

The user should be able to change the entire application language.

This includes:

Navigation

Buttons

Menus

Headings

Instructions

Error messages

Search interface

Hajj guides

Five Pillars explanations

Islamic educational content

FAQ

User dashboard

Settings

Notifications

Help text

For Arabic:

Use proper Arabic typography.

Enable RTL layout.

Automatically switch the entire interface to RTL.

Ensure Arabic text is displayed correctly.

For English, Hausa and Twi:

Use LTR layout.

The language selector should automatically change:

English → LTR
Hausa → LTR
Twi → LTR
Arabic → RTL


2. MULTILINGUAL ISLAMIC QUESTIONS

Users should be able to ask questions in:

English

Hausa

Twi

Arabic

Examples:

English:

What are the five pillars of Islam?

Hausa:

Menene rukunan Musulunci guda biyar?

Twi:

Dɛn ne Islam mu nnyinaso anum no?

Arabic:

ما هي أركان الإسلام الخمسة؟

The system should understand the user's language and respond in the SAME language whenever possible.

For example:

English question → English answer

Hausa question → Hausa answer

Twi question → Twi answer

Arabic question → Arabic answer

Provide a language selector on the answer screen so the user can change the response language.

3. FULL QUR'AN — ALL 114 SURAHS

This is a CRITICAL requirement.

The application must contain access to the COMPLETE HOLY QUR'AN, all 114 Surahs.

Do NOT build a Qur'an section containing only a few sample Surahs.

The Qur'an section must provide:

Complete Surah list

Al-Fatihah

Al-Baqarah

Aal-E-Imran

An-Nisa

Al-Ma'idah

Al-An'am

Al-A'raf

Al-Anfal

At-Tawbah

Yunus

Hud

Yusuf

Ar-Ra'd

Ibrahim

Al-Hijr

An-Nahl

Al-Isra

Al-Kahf

Maryam

Ta-Ha

Al-Anbiya

Al-Hajj

Al-Mu'minun

An-Nur

Al-Furqan

Ash-Shu'ara

An-Naml

Al-Qasas

Al-Ankabut

Ar-Rum

Luqman

As-Sajdah

Al-Ahzab

Saba

Fatir

Ya-Sin

As-Saffat

Sad

Az-Zumar

Ghafir

Fussilat

Ash-Shura

Az-Zukhruf

Ad-Dukhan

Al-Jathiyah

Al-Ahqaf

Muhammad

Al-Fath

Al-Hujurat

Qaf

Adh-Dhariyat

At-Tur

An-Najm

Al-Qamar

Ar-Rahman

Al-Waqi'ah

Al-Hadid

Al-Mujadilah

Al-Hashr

Al-Mumtahanah

As-Saff

Al-Jumu'ah

Al-Munafiqun

At-Taghabun

At-Talaq

At-Tahrim

Al-Mulk

Al-Qalam

Al-Haqqah

Al-Ma'arij

Nuh

Al-Jinn

Al-Muzzammil

Al-Muddaththir

Al-Qiyamah

Al-Insan

Al-Mursalat

An-Naba

An-Nazi'at

Abasa

At-Takwir

Al-Infitar

Al-Mutaffifin

Al-Inshiqaq

Al-Buruj

At-Tariq

Al-A'la

Al-Ghashiyah

Al-Fajr

Al-Balad

Ash-Shams

Al-Layl

Ad-Duha

Ash-Sharh

At-Tin

Al-Alaq

Al-Qadr

Al-Bayyinah

Az-Zalzalah

Al-Adiyat

Al-Qari'ah

At-Takathur

Al-Asr

Al-Humazah

Al-Fil

Quraysh

Al-Ma'un

Al-Kawthar

Al-Kafirun

An-Nasr

Al-Masad

Al-Ikhlas

Al-Falaq

An-Nas

Use the API where supported to retrieve the Qur'an data rather than manually entering large amounts of Qur'anic text.

4. QUR'AN READER

Create a beautiful Qur'an reading experience.

Each Surah page should show:

Surah number

Arabic Surah name

English/transliterated name

Number of verses

Makki/Madani information where available

Complete Arabic text

Verse numbers

Translation

Tafsir where available

Audio where supported

Example:

سورة الفاتحة

Al-Fatihah

Then display every Ayah.

Users should be able to:

Read

Search

Copy

Bookmark

Share

Play audio

Pause audio

Select translation

Change font size

Change Arabic font size

Continue reading from where they stopped

5. QUR'AN LANGUAGE OPTIONS

The Qur'an reader should allow users to select:

Arabic

English translation

Hausa translation — when an authentic/licensed source is available

Twi translation — when an authentic/licensed source is available

IMPORTANT:

Do NOT invent Hausa or Twi Qur'an translations.

If a verified translation is not available through the selected API/source, clearly state that the translation is unavailable rather than generating a fake translation and presenting it as an official Qur'an translation.

The Arabic Qur'an must remain the primary original text.

6. QUR'AN SEARCH

Create Qur'an search.

Users can search:

Surah name

Ayah

Keyword

Topic

Example:

Search: Patience

Show relevant verses.

Example categories:

📖 Qur'an

📜 Hadith

🤲 Duas

🕌 Islamic Knowledge

7. ASK SHEIKH

Create a dedicated page:

Ask Sheikh

Large input:

"Ask your Islamic question..."

Users can ask questions about:

Salah

Wudu

Fasting

Zakat

Hajj

Umrah

Marriage

Family

Business

Halal and Haram

Qur'an

Hadith

Duas

Islamic history

Islamic manners

Aqeedah

Islamic ethics

Five Pillars

General Islamic knowledge

The system should respond in the user's selected language.

8. EVIDENCE-BASED ANSWERS

The application must prioritize reliable Islamic sources.

Whenever possible, answers should contain:

Answer

Clear explanation.

Qur'an Evidence

Surah and Ayah reference.

Hadith Evidence

Collection and Hadith reference.

Explanation

Simple explanation.

Source

Clearly identify the source.

NEVER:

Invent Qur'an verses.

Invent Hadith.

Invent references.

Misrepresent AI-generated text as Qur'an.

Present an uncertain answer as certain.

Create fake Islamic quotations.

When scholars have legitimate differences of opinion, clearly state that differences exist.

For personal fatwa questions, display:

"This platform provides Islamic educational information and does not replace a qualified Islamic scholar. For a personal fatwa, please consult a trusted qualified scholar."

9. FIVE PILLARS OF ISLAM

Create a dedicated Five Pillars section.

1. Shahadah

2. Salah

3. Zakat

4. Sawm

5. Hajj

Each pillar should have detailed educational content.

All content should be available in:

English

Hausa

Twi

Arabic

10. HAJJ & UMRAH

Create a complete:

Hajj & Umrah Guide

Include:

Hajj preparation

Ihram

Miqat

Tawaf

Sa'i

Mina

Arafat

Muzdalifah

Rami

Sacrifice

Halq/Taqsir

Tawaf al-Ifadah

Farewell Tawaf

Also include:

Hajj types

Hajj pillars

Hajj obligations

Hajj Sunnahs

Things prohibited during Ihram

Women's Hajj guidance

Common Hajj mistakes

Hajj FAQs

Hajj Duas

Also provide:

Complete Umrah Guide

with step-by-step instructions.

Make all guides available in:

🇬🇧 English
🇬🇭 Hausa
🇬🇭 Twi
🇸🇦 Arabic

11. HADITH

Create a Hadith library.

Support available Hadith collections through UmmahAPI.

Features:

Search

Browse collections

Random Hadith

Hadith details

Reference

Collection

Translation

Copy

Share

Bookmark

Never modify the original Hadith text.

12. PRAYER TIMES

Use UmmahAPI for prayer times.

Display:

Fajr

Sunrise

Dhuhr

Asr

Maghrib

Isha

Include:

Current prayer

Next prayer

Countdown

Daily schedule

Monthly schedule where supported

Location

Calculation method

Madhab where supported

13. QIBLA

Create an interactive Qibla compass.

Features:

Location permission

Qibla direction

Compass

Distance to Makkah where available

Provide instructions if the user's device does not support compass functionality.

14. DUAS & ADHKAR

Create:

Duas & Adhkar

Categories:

Morning

Evening

Before sleeping

After prayer

Travel

Food

Protection

Forgiveness

Parents

Ramadan

Hajj

Umrah

Anxiety

General Duas

Show:

Arabic

Transliteration

Translation

Source/reference

15. 99 NAMES OF ALLAH

Create a beautiful:

99 Names of Allah

page.

For every name:

Arabic

Transliteration

Meaning

Explanation where available

Support all four interface languages.

16. ISLAMIC CALENDAR

Create an Islamic calendar.

Display:

Hijri date

Gregorian date

Islamic months

Ramadan

Eid al-Fitr

Eid al-Adha

Day of Arafah

Ashura

Other important Islamic dates

17. LANGUAGE SWITCHER

Place the language selector prominently in the header.

Example:

🌐 English
🌐 Hausa
🌐 Twi
🌐 العربية


When Arabic is selected:

Change interface to RTL.

Align Arabic content appropriately.

Use Arabic-friendly fonts.

When English/Hausa/Twi is selected:

Use LTR.

Persist the selected language.

18. HOME PAGE

Create an impressive Islamic landing page.

Hero:

Ask Sheikh Hajj Kassim

"Your digital companion for authentic Islamic knowledge."

Question box:

What would you like to learn about Islam?

Quick buttons:

📖 Qur'an

📜 Hadith

🕌 Five Pillars

🕋 Hajj & Umrah

🕐 Prayer Times

🤲 Duas

🧭 Qibla

📅 Islamic Calendar

Then include:

Explore the Qur'an

Read all 114 Surahs

Ask a Question

Get educational answers supported by Islamic sources.

Learn Hajj

Follow our step-by-step Hajj and Umrah guides.

19. DESIGN

Use a premium Islamic design.

Color palette:

Deep Islamic green

Emerald

Cream

White

Subtle gold

Use:

Islamic geometric patterns

Elegant cards

Rounded corners

Modern typography

Arabic typography

Smooth animations

Beautiful icons

Clean spacing

The application must look professional enough for a real Islamic organization.

20. RESPONSIVE DESIGN

The application MUST work perfectly on:

iPhone

Android

Tablet

Laptop

Desktop

Pay special attention to mobile users.

21. TECHNOLOGY

Use:

HTML5

CSS3

Vanilla JavaScript

Backend/serverless API functions

REST APIs

Do not expose secrets in frontend code.

22. UMMAHAPI

Use UmmahAPI as the primary Islamic data source.

Documentation:

https://www.ummahapi.com/api/docs/

Use the official API documentation to verify the exact endpoints and parameters.

Environment variable:

UMMAH_API_KEY=YOUR_NEW_UMMAH_API_KEY


DO NOT put the key inside frontend JavaScript.

The architecture should be:

USER
 ↓
ASK SHEIKH HAJJ KASSIM
 ↓
FRONTEND
 ↓
BACKEND API
 ↓
UMMAHAPI
 ↓
QUR'AN / HADITH / PRAYER / ISLAMIC DATA
 ↓
BACKEND
 ↓
FRONTEND
 ↓
USER


23. SECURITY

Never expose:

UMMAH_API_KEY

API credentials

Server secrets

Do not place them in:

HTML

CSS

JavaScript

localStorage

sessionStorage

GitHub

public environment variables

Use server-side environment variables.

24. IMPORTANT QUR'AN REQUIREMENT

The Qur'an section MUST provide access to the FULL QUR'AN — ALL 114 SURAHS AND THEIR AYAT.

Do not use placeholder Qur'an content.

Do not create fake verses.

Do not generate Qur'an verses using AI.

Retrieve the authentic Arabic Qur'an from a reliable API/source.

Include appropriate source attribution.

25. FINAL PRODUCT

The final product should feel like:

A modern Islamic digital companion combining:

📖 Complete Qur'an

📜 Hadith

🕌 Five Pillars

🕋 Hajj & Umrah

🤲 Duas

🕐 Prayer Times

🧭 Qibla

📅 Islamic Calendar

☪️ Islamic Knowledge

🤖 Ask Sheikh

🌍 English + Hausa + Twi + Arabic

The final website should be functional, responsive, secure, multilingual, and production-ready, not merely a UI mockup.

Before completing the project:

Test the complete Qur'an.

Confirm all 114 Surahs can be accessed.

Test Qur'an search.

Test Hadith search.

Test prayer times.

Test language switching.

Test Arabic RTL.

Test Hausa.

Test Twi.

Test English.

Test Hajj and Umrah guides.

Test API errors.

Confirm the API key is never exposed to the browser.

Test the website on mobile and desktop.

Ensure all major buttons and navigation links work.

Build this as a serious, trustworthy Islamic education platform called:

ASK SHEIKH HAJJ KASSIM

"Ask. Learn. Understand. Live Islam."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/69004182-8451-4fb6-802a-1c4d6277913c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
