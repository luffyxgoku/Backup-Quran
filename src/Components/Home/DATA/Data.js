import faith from "../../../assets/Faith.png";
import salahwat from "../../../assets/SalahPiller.png";
import hajj from "../../../assets/Hajj.png";
import sawm from "../../../assets/Sawm.png";
import zakat from "../../../assets/ZakatPiller.png";
import jihad from "../../../assets/Jihad.png";

// import faithimg from "../../../assets/Jihad.png";
// import salahwatimg from "../../../assets/Jihad.png";
// import hajjimg from "../../../assets/Jihad.png";
// import sawmimg from "../../../assets/Jihad.png";
// import zakatimg from "../../../assets/Jihad.png";
// import jihadimg from "../../../assets/Jihad.png";

export const pillersData = [
  {
    imgSrc: faith,
    title: "Faith",
    location: "faith",
    // bannerImg: faithimg,
  },
  {
    imgSrc: salahwat,
    title: "Salah",
    location: "salahwat",
    // bannerImg: salahwatimg,
  },
  {
    imgSrc: hajj,
    title: "Hajj",
    location: "hajj",
    // bannerImg: hajjimg,
  },
  {
    imgSrc: sawm,
    title: "Sawm",
    location: "sawm",
    // bannerImg: sawmimg,
  },
  {
    imgSrc: zakat,
    title: "Zakat",
    location: "donation",
    // bannerImg: zakatimg,
  },
  {
    imgSrc: jihad,
    title: "Jihad",
    location: "jihad",
    // bannerImg: jihadimg,
  },
];

export const bannerImages = {
  faith,
  salahwat,
  hajj,
  sawm,
  donation: zakat,
  jihad,
};

export const faithPiller = [
  {
    title: "Belief in Allah",
    arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm",
    translation:
      "Allah – there is no deity except Him, the Ever-Living, the Sustainer of [all] existence.",
    reference: "Qur'an 2:255",
  },
  {
    title: "Faith in the Unseen",
    arabicText: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ",
    transliteration: "Alladhīna yu’minūna bil-ghayb",
    translation: "Who believe in the unseen.",
    reference: "Qur'an 2:3",
  },
  {
    title: "Complete Trust in Allah",
    arabicText: "وَعَلَى اللَّهِ فَتَوَكَّلُوا إِن كُنتُم مُّؤْمِنِينَ",
    transliteration: "Wa ʿalā Allāhi fatawakkalū in kuntum mu’minīn",
    translation: "And put your trust in Allah if you are believers indeed.",
    reference: "Qur’an 5:23",
  },
  {
    title: "Sweetness of Faith",
    arabicText: "ثَلاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاوَةَ الْإِيمَانِ...",
    transliteration: "Thalāthun man kunna fīhi wajada ḥalāwata al-īmān...",
    translation:
      "There are three qualities whoever has them will taste the sweetness of faith...",
    reference: "Bukhari 16, Muslim 43",
  },
  {
    title: "Love for Allah & His Messenger",
    arabicText:
      "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ",
    transliteration:
      "Lā yu’minu aḥadukum ḥattā akūna aḥabba ilayhi min wālidihi wa waladihi wa an-nāsi ajmaʿīn",
    translation:
      "None of you truly believes until I am more beloved to him than his father, his child, and all people.",
    reference: "Bukhari 15, Muslim 44",
  },
  {
    title: "Faith Rises and Falls",
    arabicText:
      "إِنَّ الْإِيمَانَ لَيَخْلَقُ فِي جَوْفِ أَحَدِكُمْ كَمَا يَخْلَقُ الثَّوْبُ، فَاسْأَلُوا اللَّهَ أَنْ يُجَدِّدَ الْإِيمَانَ فِي قُلُوبِكُمْ",
    transliteration:
      "Inna al-īmāna layaqlaqu fī jawfi aḥadikum kamā yaqlaqu ath-thawb, fas’alū Allāha an yujaddida al-īmāna fī qulūbikum",
    translation:
      "Faith wears out in your hearts just as clothes wear out, so ask Allah to renew faith in your hearts.",
    reference: "Al-Hakim in al-Mustadrak (authentic chain)",
  },
  {
    title: "Faith is Light",
    arabicText: "نُورٌ عَلَى نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ",
    transliteration: "Nūrun ʿalā nūr, yahdī Allāhu linūrihi man yashāʾ",
    translation: "Light upon light. Allah guides to His light whom He wills.",
    reference: "Qur'an 24:35",
  },
  {
    title: "Iman and Action Go Together",
    arabicText:
      "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا",
    transliteration:
      "Inna alladhīna āmanū wa ʿamilū aṣ-ṣāliḥāti kānat lahum jannātu al-firdawsi nuzulā",
    translation:
      "Indeed, those who have believed and done righteous deeds – they will have the Gardens of Paradise as a lodging.",
    reference: "Qur’an 18:107",
  },
  {
    title: "Faith Prevents Evil",
    arabicText: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
    transliteration: "Inna aṣ-ṣalāta tanhā ʿani al-faḥshāʾi wa al-munkar",
    translation: "Indeed, prayer prevents immorality and wrongdoing.",
    reference: "Qur’an 29:45",
  },
  {
    title: "Faith is What Settles in the Heart",
    arabicText: "الْإِيمَانُ مَا وَقَرَ فِي الْقَلْبِ وَصَدَّقَهُ الْعَمَلُ",
    transliteration: "Al-īmānu mā waqara fī al-qalbi wa ṣaddaqahu al-ʿamal",
    translation:
      "Faith is that which settles in the heart and is confirmed by actions.",
    reference: "Authenticated by Al-Albani in Sahih al-Jami’ (2535)",
  },
];

export const salahPiller = [
  {
    title: "Establishing Salah",
    arabicText:
      "وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
    transliteration:
      "Wa aqimiṣ-ṣalāta innaṣ-ṣalāta tanhā ʿani al-faḥshā’i wa al-munkar",
    translation:
      "Establish prayer. Verily, prayer prevents immorality and wrongdoing.",
    reference: "Qur’an 29:45",
  },
  {
    title: "Salah is the Key to Paradise",
    arabicText: "مِفْتَاحُ الْجَنَّةِ الصَّلَاةُ",
    transliteration: "Miftāḥu al-jannati aṣ-ṣalāh",
    translation: "The key to Paradise is Salah (prayer).",
    reference: "Tirmidhi 4",
  },
  {
    title: "First Deed to be Judged",
    arabicText:
      "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ الصَّلَاةُ",
    transliteration:
      "Inna awwala mā yuḥāsabu bihil-ʿabdu yawma al-qiyāmati min ʿamalihi aṣ-ṣalāh",
    translation:
      "The first deed to be accounted for on the Day of Judgment is the prayer.",
    reference: "Abu Dawood 864",
  },
  {
    title: "Salah is Light",
    arabicText: "وَالصَّلَاةُ نُورٌ",
    transliteration: "Waṣ-ṣalātu nūr",
    translation: "And prayer is light.",
    reference: "Muslim 223",
  },
  {
    title: "Salah Wipes Out Sins",
    arabicText:
      "الصَّلَوَاتُ الْخَمْسُ... يُكَفِّرِ اللَّهُ بِهِنَّ الْخَطَايَا",
    transliteration:
      "Aṣ-ṣalawātu al-khams... yukaffiru Allāhu bihinna al-khaṭāyā",
    translation:
      "The five daily prayers... Allah wipes away sins through them.",
    reference: "Muslim 233",
  },
  {
    title: "Salah Brings Nearness to Allah",
    arabicText: "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ",
    transliteration: "Aqrabu mā yakūnu al-ʿabdu min rabbihi wa huwa sājid",
    translation:
      "The closest a servant comes to his Lord is when he is in prostration.",
    reference: "Muslim 482",
  },
  {
    title: "Salah is a Miʿraj for the Believer",
    arabicText: "الصَّلَاةُ مِعْرَاجُ الْمُؤْمِنِ",
    transliteration: "Aṣ-ṣalātu miʿrāju al-muʾmin",
    translation: "Prayer is the ascension (miʿrāj) of the believer.",
    reference: "Bayhaqi (Weak chain, but widely accepted for virtue)",
  },
  {
    title: "Neglecting Salah is Danger",
    arabicText:
      "فَخَلَفَ مِن بَعْدِهِمْ خَلْفٌ أَضَاعُوا الصَّلَاةَ وَاتَّبَعُوا الشَّهَوَاتِ",
    transliteration:
      "Fakhalafa min baʿdihim khalfun aḍāʿū aṣ-ṣalāta wa-ittabaʿū ash-shahawāt",
    translation:
      "Then came generations after them who neglected prayer and followed desires.",
    reference: "Qur’an 19:59",
  },
  {
    title: "Prayer in Congregation is Better",
    arabicText:
      "صَلَاةُ الْجَمَاعَةِ أَفْضَلُ مِنْ صَلَاةِ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً",
    transliteration:
      "Ṣalātu al-jamāʿati afḍalu min ṣalāti al-fadhdhi b sabʿin wa ʿishrīna darajah",
    translation:
      "The prayer in congregation is twenty-seven times more rewarding than the prayer of one alone.",
    reference: "Bukhari 645, Muslim 650",
  },
  {
    title: "Salah Protects from Hell",
    arabicText:
      "مَنْ حَافَظَ عَلَيْهَا كَانَتْ لَهُ نُورًا وَبُرْهَانًا وَنَجَاةً يَوْمَ الْقِيَامَةِ",
    transliteration:
      "Man ḥāfaẓa ʿalayhā kānat lahu nūran wa burhānan wa najāatan yawma al-qiyāmah",
    translation:
      "Whoever guards it (the prayers), it will be a light, a proof, and salvation for him on the Day of Resurrection.",
    reference: "Ahmad 6525, Authenticated by Albani",
  },
];

export const hajjPiller = [
  {
    title: "Hajj is a Duty to Allah",
    arabicText:
      "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا",
    transliteration:
      "Wa lillāhi ʿala an-nāsi ḥijju al-bayti manis’ṭāʿa ilayhi sabīlā",
    translation:
      "And pilgrimage to the House is a duty owed to Allah by people who are able to undertake it.",
    reference: "Qur’an 3:97",
  },
  {
    title: "Hajj Wipes All Sins",
    arabicText:
      "مَن حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ، رَجَعَ كَيَوْمٍ وَلَدَتْهُ أُمُّهُ",
    transliteration:
      "Man ḥajja fa lam yarfuth wa lam yafsuq, rajaʿa ka-yawmin waladathu ummuh",
    translation:
      "Whoever performs Hajj and avoids sexual relations and sin, returns like the day his mother gave birth to him.",
    reference: "Bukhari 1521, Muslim 1350",
  },
  {
    title: "Hajj is Among the Best Deeds",
    arabicText: "الْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ",
    transliteration: "Al-ḥajju al-mabrūru laysa lahu jazā’un illā al-jannah",
    translation: "A righteous Hajj has no reward except Paradise.",
    reference: "Bukhari 1773, Muslim 1349",
  },
  {
    title: "Proclamation of Hajj from Ibrahim (AS)",
    arabicText: "وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا",
    transliteration: "Wa adh-dhin fī an-nāsi bil-ḥajji ya’tūka rijālan",
    translation:
      "And proclaim the Hajj to the people; they will come to you on foot...",
    reference: "Qur’an 22:27",
  },
  {
    title: "Talbiyah is Loved by Allah",
    arabicText:
      "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْك",
    transliteration:
      "Labbayka Allāhumma labbayk, labbayka lā sharīka laka labbayk",
    translation:
      "Here I am, O Allah, here I am. Here I am, You have no partner, here I am.",
    reference: "Bukhari 1549, Muslim 1184",
  },
  {
    title: "Angels Witness the Hajj Gathering",
    arabicText: "إِنَّ اللَّهَ يُبَاهِي بِأَهْلِ عَرَفَاتٍ أَهْلَ السَّمَاءِ",
    transliteration: "Inna Allāha yubāhī bi-ahl ʿArafāt ahla as-samā’",
    translation:
      "Indeed, Allah boasts of the people of ʿArafāt to the inhabitants of the heavens.",
    reference: "Ahmad 7083, Sahih by Albani",
  },
  {
    title: "Reward of Hajj is Immediate Forgiveness",
    arabicText: "الْحُجَّاجُ وَالْعُمَّارُ وَفْدُ اللَّهِ",
    transliteration: "Al-ḥujjāju wa al-ʿummāru wafdu Allāh",
    translation:
      "The pilgrims and those performing ʿUmrah are the guests of Allah.",
    reference: "Ibn Majah 2892, Hasan",
  },
  {
    title: "Standing at Arafah is the Heart of Hajj",
    arabicText: "الْحَجُّ عَرَفَةُ",
    transliteration: "Al-ḥajju ʿArafah",
    translation: "Hajj is (all about) ʿArafah.",
    reference: "Tirmidhi 889, Abu Dawood 1949",
  },
  {
    title: "Hajj Unites the Ummah",
    arabicText: "إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً",
    transliteration: "Inna hādhihi ummatukum ummatan wāḥidah",
    translation: "Indeed, this nation of yours is one nation.",
    reference: "Qur’an 21:92",
  },
  {
    title: "Hajj is a Reminder of the Hereafter",
    arabicText: "وَاعْلَمُوا أَنَّكُمْ إِلَيْهِ تُحْشَرُونَ",
    transliteration: "Waʿlamū annakum ilayhi tuḥsharūn",
    translation: "And know that to Him you will be gathered.",
    reference: "Qur’an 2:203",
  },
];

export const sawmPiller = [
  {
    title: "Fasting is a Means to Taqwa",
    arabicText:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    transliteration:
      "Yā ayyuhā alladhīna āmanū kutiba ʿalaykumuṣ-ṣiyāmu kamā kutiba ʿala alladhīna min qablikum laʿallakum tattaqūn",
    translation:
      "O you who believe, fasting has been prescribed for you as it was prescribed for those before you, that you may attain taqwa (God-consciousness).",
    reference: "Qur’an 2:183",
  },
  {
    title: "Fasting is for Allah Alone",
    arabicText:
      "كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ، إِلَّا الصِّيَامَ، فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ",
    transliteration:
      "Kullu ʿamali ibn Ādama lahu, illā aṣ-ṣiyām fa innahu lī wa anā ajzī bih",
    translation:
      "Every act of the son of Adam is for him except fasting; it is for Me and I will reward it.",
    reference: "Bukhari 1904, Muslim 1151",
  },
  {
    title: "Fasting Has Two Joys",
    arabicText:
      "لِلصَّائِمِ فَرْحَتَانِ، فَرْحَةٌ عِندَ فِطْرِهِ، وَفَرْحَةٌ عِندَ لِقَاءِ رَبِّهِ",
    transliteration:
      "Liṣ-ṣā’imi farḥatān: farḥatun ʿinda fiṭrih, wa farḥatun ʿinda liqā’i rabbih",
    translation:
      "The fasting person has two joys: one at the time of breaking his fast, and the other when he meets his Lord.",
    reference: "Bukhari 1904, Muslim 1151",
  },
  {
    title: "Fasting Shields from Hell",
    arabicText: "الصِّيَامُ جُنَّةٌ",
    transliteration: "Aṣ-ṣiyāmu junnah",
    translation: "Fasting is a shield.",
    reference: "Bukhari 1899, Muslim 1151",
  },
  {
    title: "The Smell of a Fasting Person is Beloved to Allah",
    arabicText:
      "وَلَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِندَ اللَّهِ مِنْ رِيحِ الْمِسْكِ",
    transliteration:
      "Wa lakhulūfu fami aṣ-ṣā’imi aṭyabu ʿinda Allāhi min rīḥi al-misk",
    translation:
      "The smell from the mouth of a fasting person is more pleasant to Allah than the fragrance of musk.",
    reference: "Bukhari 1894, Muslim 1151",
  },
  {
    title: "Fasting Intercedes on the Day of Judgment",
    arabicText:
      "يَقُولُ الصِّيَامُ: رَبِّ إِنِّي مَنَعْتُهُ الطَّعَامَ وَالشَّهْوَاتِ بِالنَّهَارِ فَشَفِّعْنِي فِيهِ",
    transliteration:
      "Yaqūlu aṣ-ṣiyām: Rabbi innī manaʿtuhu aṭ-ṭaʿāma wa ash-shahawāti bin-nahār fa shaffiʿnī fīh",
    translation:
      "Fasting will say: O Lord, I prevented him from food and desires during the day, so allow me to intercede for him.",
    reference: "Ahmad 6626, authenticated by Albani",
  },
  {
    title: "Gate of Ar-Rayyan for Fasting People",
    arabicText:
      "إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ",
    transliteration:
      "Inna fī al-jannati bāban yuqālu lahu ar-Rayyān, yadkhulu minhu aṣ-ṣā’imūn",
    translation:
      "Indeed, in Paradise there is a gate called Ar-Rayyan through which the fasting people will enter.",
    reference: "Bukhari 1896, Muslim 1152",
  },
  {
    title: "Fasting is a Protection from the Fire",
    arabicText:
      "مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا",
    transliteration:
      "Man ṣāma yawman fī sabīlillāh baʿʿada Allāhu wajhahu ʿani an-nār sabʿīna kharīfā",
    translation:
      "Whoever fasts one day in the path of Allah, Allah will distance his face from the Fire by seventy autumns.",
    reference: "Bukhari 2840, Muslim 1153",
  },
  {
    title: "Fasting Brings Nearness to Allah",
    arabicText: "فَإِنِّي قَرِيبٌ، أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    transliteration: "Fa innī qarīb, ujību daʿwata ad-dāʿi idhā daʿān",
    translation:
      "I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    reference: "Qur’an 2:186 (right after verse on fasting)",
  },
];

export const zakatPiller = [
  {
    title: "Zakat Purifies Wealth and Soul",
    arabicText:
      "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا",
    transliteration:
      "Khudh min amwālihim ṣadaqatan tuṭahhiruhum wa tuzakkīhim bihā",
    translation:
      "Take from their wealth a charity by which you purify them and cause them increase.",
    reference: "Qur’an 9:103",
  },
  {
    title: "Those Who Hoard Wealth Will Regret",
    arabicText:
      "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
    transliteration:
      "Wa alladhīna yaknizūna adh-dhahaba wa al-fiḍḍata wa lā yunfiqūnahā fī sabīlillāhi fabashshirhum biʿadhābin alīm",
    translation:
      "And those who hoard gold and silver and do not spend it in the way of Allah — give them tidings of a painful punishment.",
    reference: "Qur’an 9:34",
  },
  {
    title: "Zakat is a Right of the Poor",
    arabicText: "وَفِي أَمْوَالِهِمْ حَقٌّ لِلسَّائِلِ وَالْمَحْرُومِ",
    transliteration: "Wa fī amwālihim ḥaqqun lis-sā’ili wa al-maḥrūm",
    translation:
      "And in their wealth is a recognized right for the beggar and the deprived.",
    reference: "Qur’an 51:19",
  },
  {
    title: "Charity Does Not Decrease Wealth",
    arabicText: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    transliteration: "Mā naqaṣat ṣadaqatun min māl",
    translation: "Charity does not decrease wealth.",
    reference: "Muslim 2588",
  },
  {
    title: "Zakat is One of the Five Pillars",
    arabicText: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ ... وَإِيتَاءِ الزَّكَاةِ",
    transliteration: "Buniyal-Islāmu ʿalā khams ... wa ītā’i az-zakāh",
    translation: "Islam is built on five [pillars] ... and giving Zakat.",
    reference: "Bukhari 8, Muslim 16",
  },
  {
    title: "Zakat Protects Against Hellfire",
    arabicText: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ",
    transliteration: "Ittaqū an-nār walaw bishiqqi tamrah",
    translation:
      "Protect yourself from the Fire even with half of a date in charity.",
    reference: "Bukhari 1410, Muslim 1016",
  },
  {
    title: "Those Who Do Not Give Will Be Punished",
    arabicText:
      "وَلَا يَحْسَبَنَّ الَّذِينَ يَبْخَلُونَ بِمَا آتَاهُمُ اللَّهُ مِن فَضْلِهِ هُوَ خَيْرًا لَّهُم",
    transliteration:
      "Wa lā yaḥsabanna alladhīna yabkhalūna bimā ātāhumu Allāhu min faḍlihi huwa khayran lahum",
    translation:
      "Let not those who withhold what Allah has given them think it is good for them.",
    reference: "Qur’an 3:180",
  },
  {
    title: "Zakat Brings Barakah",
    arabicText: "مَا نَقَصَ مَالٌ مِنْ صَدَقَةٍ، بَلْ تَزِيدُهُ",
    transliteration: "Mā naqaṣa mālun min ṣadaqah, bal tazīduhu",
    translation: "Wealth is not decreased by charity, rather it increases it.",
    reference: "Tirmidhi 2029, Hasan",
  },
  {
    title: "Spending Freely Pleases Allah",
    arabicText:
      "الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً",
    transliteration:
      "Alladhīna yunfiqūna amwālahum bi al-layli wa an-nahāri sirran wa ʿalāniyah",
    translation:
      "Those who spend their wealth by night and by day, secretly and publicly...",
    reference: "Qur’an 2:274",
  },
  {
    title: "True Believers Spend in Ease and Hardship",
    arabicText: "الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ",
    transliteration: "Alladhīna yunfiqūna fī as-sarrā’i wa aḍ-ḍarrā’",
    translation:
      "Those who spend [in the cause of Allah] during ease and hardship...",
    reference: "Qur’an 3:134",
  },
];

export const jihadEssence = [
  {
    title: "The Greatest Jihad is Against the Self",
    arabicText: "الْمُجَاهِدُ مَنْ جَاهَدَ نَفْسَهُ فِي اللَّهِ",
    transliteration: "Al-mujāhidu man jāhada nafsahu fī Allāh",
    translation:
      "The true Mujahid is the one who strives against his own self for the sake of Allah.",
    reference: "Tirmidhi 1621",
  },
  {
    title: "Jihad Through Patience and Worship",
    arabicText: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
    transliteration: "Waṣbir wa mā ṣabruka illā biLlāh",
    translation: "And be patient, and your patience is not but through Allah.",
    reference: "Qur’an 16:127",
  },
  {
    title: "Strive with the Qur'an",
    arabicText: "وَجَاهِدْهُم بِهِ جِهَادًا كَبِيرًا",
    transliteration: "Wa jāhid'hum bihi jihādan kabīrā",
    translation: "And strive against them with the Qur’an — a great striving.",
    reference: "Qur’an 25:52",
  },
  {
    title: "The Best Struggle is to Speak the Truth",
    arabicText: "أَفْضَلُ الْجِهَادِ كَلِمَةُ عَدْلٍ عِندَ سُلْطَانٍ جَائِرٍ",
    transliteration: "Afḍalu al-jihādi kalimatu ʿadlin ʿinda sulṭānin jā’ir",
    translation:
      "The best form of Jihad is speaking a word of justice to an oppressive ruler.",
    reference: "Abu Dawood 4344, Ibn Majah 4011",
  },
  {
    title: "Jihad Through Knowledge and Guidance",
    arabicText: "فَلَا تُطِعِ الْكَافِرِينَ وَجَاهِدْهُم بِهِ",
    transliteration: "Fa-lā tuṭiʿi al-kāfirīn wa jāhid'hum bihi",
    translation:
      "So do not obey the disbelievers, and strive against them with it (the Qur'an).",
    reference: "Qur’an 25:52",
  },
  {
    title: "Striving in Family Responsibilities is Jihad",
    arabicText: "إِنَّ فِي نَفَقَةِ الرَّجُلِ عَلَى أَهْلِهِ لَأَجْرًا",
    transliteration: "Inna fī nafaqati ar-rajuli ʿalā ahlihi la-ajran",
    translation:
      "Indeed, spending on one's family is a source of reward (Jihad).",
    reference: "Bukhari 4006, Muslim 1002",
  },
  {
    title: "Spiritual Jihad is Lifelong",
    arabicText: "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ",
    transliteration: "Waʿbud rabbaka ḥattā ya’tiyaka al-yaqīn",
    translation:
      "And worship your Lord until the certainty (death) comes to you.",
    reference: "Qur’an 15:99",
  },
  {
    title: "Helping the Oppressed is a Form of Jihad",
    arabicText: "انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا",
    transliteration: "Unṣur akhāka ẓāliman aw maẓlūman",
    translation: "Help your brother, whether he is an oppressor or oppressed.",
    reference: "Bukhari 6952",
  },
  {
    title: "Striving with Wealth and Life",
    arabicText:
      "إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنْفُسَهُمْ وَأَمْوَالَهُم",
    transliteration:
      "Inna Allāha ishtarā mina al-mu’minīna anfusahum wa amwālahum",
    translation:
      "Indeed, Allah has purchased from the believers their lives and their wealth [in exchange] for Paradise.",
    reference: "Qur’an 9:111",
  },
  {
    title: "Jihad Through Consistency in Worship",
    arabicText: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    transliteration: "Aḥabbu al-aʿmāli ilā Allāhi adwamuhā wa in qalla",
    translation:
      "The most beloved deeds to Allah are those that are consistent, even if small.",
    reference: "Bukhari 6464, Muslim 783",
  },
];
