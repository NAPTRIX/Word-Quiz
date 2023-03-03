
const words = [
  {word: "Ephemeral", definition: "lasting for a very short time; transient"},
  {word: "Opaque", definition: "not able to be seen through; not transparent"},
  {word: "Visceral", definition: "relating to deep inward feelings rather than to the intellect; instinctive"},
  {word: "Supine", definition: "lying face upwards; inactive or passive"},
  {word: "Pugnacious", definition: "eager or quick to argue, quarrel, or fight"},
  {word: "Enigmatic", definition: "difficult to interpret or understand; mysterious"},
  {word: "Vicarious", definition: "experienced in the imagination through the feelings or actions of another person"},
  {word: "Gregarious", definition: "fond of company; sociable"},
  {word: "Furtive", definition: "attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive"},
  {word: "Obfuscate", definition: "to make something obscure or unclear; to confuse or bewilder"},
  { word: "Audacious", definition: "showing a willingness to take surprisingly bold risks; recklessly daring" },
  { word: "Serendipity", definition: "the occurrence and development of events by chance in a happy or beneficial way" },
  { word: "Ineffable", definition: "too great or extreme to be expressed or described in words" },
  { word: "Egregious", definition: "outstandingly bad; shocking" },
  { word: "Quintessential", definition: "representing the most perfect or typical example of a quality or class" },
  { word: "Reverie", definition: "a state of being pleasantly lost in one's thoughts; a daydream" },
  { word: "Pensive", definition: "engaged in, involving, or reflecting deep or serious thought" },
  { word: "Apathy", definition: "lack of interest, enthusiasm, or concern" },
  { word: "Voracious", definition: "having a very eager approach to an activity; having a large appetite" },
  { word: "Lethargic", definition: "affected by lethargy; sluggish and apathetic" },
  { word: "Luminous", definition: "full of or shedding light; bright or shining, especially in the dark" },
  { word: "Melancholy", definition: "a feeling of pensive sadness, typically with no obvious cause" },
  { word: "Ebullient", definition: "cheerful and full of energy" },
  { word: "Clandestine", definition: "kept secret or done secretively, especially because illicit" },
  { word: "Inscrutable", definition: "impossible to understand or interpret" },
  { word: "Epiphany", definition: "a sudden realization or comprehension of the essence or meaning of something" },
  { word: "Furtive", definition: "attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive" },
  { word: "Obsequious", definition: "obedient or attentive to an excessive or servile degree" },
  { word: "Taciturn", definition: "reserved or uncommunicative in speech; saying little" },
  { word: "Myriad", definition: "a countless or extremely great number" },
  { word: "Eccentric", definition: "unconventional and slightly strange" },
  { word: "Enigma", definition: "a person or thing that is mysterious, puzzling, or difficult to understand" },
  { word: "Fastidious", definition: "very attentive to and concerned about accuracy and detail" },
  { word: "Gregarious", definition: "fond of company; sociable" },
  { word: "Hegemony", definition: "leadership or dominance, especially by one country or social group over others" },
  { word: "Iconoclast", definition: "a person who attacks cherished beliefs or institutions" },
  { word: "Juxtaposition", definition: "the fact of two things being seen or placed close together with contrasting effect" },
  { word: "Kinetic", definition: "relating to or resulting from motion" },
  { word: "Loquacious", definition: "tending to talk a great deal; talkative" },
  { word: "Maelstrom", definition: "a powerful whirlpool in the sea or a river" },
  { word: "Nefarious", definition: "wicked or criminal" },
  { word: "Ostentatious", definition: "characterized by vulgar or pretentious display; designed to impress or attract notice" },
  { word: "Panacea", definition: "a solution or remedy for all problems or difficulties" },
  { word: "Quagmire", definition: "a soft boggy area of land that gives way underfoot; an awkward, complex, or hazardous situation" },
  { word: "Reticent", definition: "not revealing one's thoughts or feelings readily" },
  { word: "Sardonic", definition: "grimly mocking or cynical" },
  { word: "Truncate", definition: "shorten (something) by cutting off the top or the end" },
  { word: "Ubiquitous", definition: "present, appearing, or found everywhere" },
  { word: "Venerate", definition: "regard with great respect; revere" },
  { word: "Wanderlust", definition: "a strong desire to travel" },
  { word: "Xenophobia", definition: "dislike of or prejudice against people from other countries" },
  { word: "Yoke", definition: "a wooden crosspiece that is fastened over the necks of two animals and attached to the plough or cart that they are to pull; a burden or impediment" },
  { word: "Zeitgeist", definition: "the defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time" },
  { word: "Alacrity", definition: "brisk and cheerful readiness" },
  { word: "Bane", definition: "a cause of great distress or annoyance" },
  { word: "Cajole", definition: "persuade someone to do something by sustained coaxing or flattery" },
  { word: "Debacle", definition: "a sudden and ignominious failure; a fiasco" },
  { word: "Ephemeral", definition: "lasting for a very short time" },
  { word: "Fecund", definition: "producing or capable of producing an abundance of offspring or new growth; fertile" },
  { word: "Galvanize", definition: "shock or excite (someone), typically into taking action" },
  { word: "Histrionic", definition: "overly theatrical or melodramatic in character or style" },
  { word: "Idiosyncrasy", definition: "a mode of behavior or way of thought peculiar to an individual" },
  { word: "Jubilant", definition: "feeling or expressing great happiness and triumph" },
  { word: "Kudos", definition: "praise and honor received for an achievement" },
  { word: "Lackadaisical", definition: "lacking enthusiasm and determination; carelessly lazy" },
  { word: "Mendacious", definition: "not telling the truth; lying" },
  { word: "Nihilism", definition: "the rejection of all religious and moral principles, often in the belief that life is meaningless" },
  { word: "Oblivion", definition: "the state of being unaware or unconscious of what is happening" },
  { word: "Perfunctory", definition: "carried out with a minimum of effort or reflection" },
  { word: "Quintessential", definition: "representing the most perfect or typical example of a quality or class" },
  { word: "Reverie", definition: "a state of being pleasantly lost in one's thoughts; a daydream" },
  { word: "Sanguine", definition: "optimistic or positive, especially in an apparently bad or difficult situation" },
  { word: "Tantamount", definition: "equivalent in seriousness to; virtually the same as" },
  { word: "Ubiquity", definition: "the fact of appearing everywhere or of being very common" },
  { word: "Vicissitude", definition: "a change of circumstances or fortune, typically one that is unwelcome or unpleasant" },
  { word: "Writhe", definition: "make continual twisting, squirming movements or contortions of the body" },
  { word: "Xeriscape", definition: "a style of landscape design requiring little or no irrigation or other maintenance, used in arid regions" },
  { word: "Yen", definition: "a strong desire or longing for something" },
  { word: "Zephyr", definition: "a soft gentle breeze" },
  { word: "Avarice", definition: "extreme greed for wealth or material gain" },
  { word: "Belligerent", definition: "hostile and aggressive" },
  { word: "Cathartic", definition: "providing psychological relief through the open expression of strong emotions" },
  { word: "Discombobulate", definition: "disconcert or confuse (someone)" },
  { word: "Ebullient", definition: "cheerful and full of energy" },
  { word: "Facetious", definition: "treating serious issues with deliberately inappropriate humor; flippant" },
  { word: "Gregarious", definition: "fond of company; sociable" },
  { word: "Hedonist", definition: "a person who believes that the pursuit of pleasure is the most important thing in life" },
  { word: "Indefatigable", definition: "persisting tirelessly" },
  { word: "Judicious", definition: "having, showing, or done with good judgment or sense" },
  { word: "Kaleidoscope", definition: "a continually changing pattern of shapes and colors" },
  { word: "Ludicrous", definition: "so foolish, unreasonable, or out of place as to be amusing" },
  { word: "Maelstrom", definition: "a powerful whirlpool in the sea or a river" },
  { word: "Nonplussed", definition: "surprised and confused so much that they are unsure how to react" },
  { word: "Omnipotent", definition: "having unlimited power; able to do anything" },
  { word: "Pernicious", definition: "having a harmful effect, especially in a gradual or subtle way" },
  { word: "Querulous", definition: "complaining in a petulant or whining manner" },
  { word: "Recalcitrant", definition: "having an obstinately uncooperative attitude toward authority or discipline" },
  { word: "Soporific", definition: "tending to induce drowsiness or sleep" },
  { word: "Obsequious", definition: "obedient or attentive to an excessive or servile degree" },
  { word: "Pensive", definition: "engaged in, involving, or reflecting deep or serious thought" },
  { word: "Querulous", definition: "complaining in a petulant or whining manner" },
  { word: "Reticent", definition: "not revealing one's thoughts or feelings readily" },
  { word: "Sanguine", definition: "optimistic or positive, especially in an apparently bad or difficult situation" },
  { word: "Trenchant", definition: "vigorous or incisive in expression or style" },
  { word: "Ubiquitous", definition: "present, appearing, or found everywhere" },
  { word: "Venerable", definition: "accorded a great deal of respect, especially because of age, wisdom, or character" },
  { word: "Wry", definition: "using or expressing dry, especially mocking, humor" },
  { word: "Xeric", definition: "relating to, or characterized by, an environment that is very dry, with limited water resources" },
  { word: "Yonder", definition: "at some distance in the direction indicated; over there" },
  { word: "Zany", definition: "ludicrously or whimsically comical; clownish" },
  { word: "Avaricious", definition: "having or showing an extreme greed for wealth or material gain" },
  { word: "Bucolic", definition: "relating to the pleasant aspects of the countryside and country life" },
  { word: "Cacophonous", definition: "involving or producing a harsh, discordant mixture of sounds" },
  { word: "Draconian", definition: "excessively harsh and severe" },
  { word: "Ebullient", definition: "cheerful and full of energy" },
  { word: "Fastidious", definition: "very attentive to and concerned about accuracy and detail" },
  { word: "Gregarious", definition: "fond of company; sociable" },
  { word: "Histrionic", definition: "overly theatrical or melodramatic in character or style" },
  { word: "Indomitable", definition: "impossible to subdue or defeat" },
  { word: "Jubilant", definition: "feeling or expressing great happiness and triumph" },
  { word: "Kerfuffle", definition: "a commotion or fuss, especially one caused by conflicting views" },
  { word: "Lugubrious", definition: "looking or sounding sad and dismal" },
  { word: "Maelstrom", definition: "a powerful whirlpool in the sea or a river" },
  { word: "Nebulous", definition: "in the form of a cloud or haze; hazy" },
  { word: "Onerous", definition: "involving an amount of effort and difficulty that is oppressively burdensome" },
  { word: "Pernicious", definition: "having a harmful effect, especially in a gradual or subtle way" },
  { word: "Quixotic", definition: "exceedingly idealistic; unrealistic and impractical" },
  { word: "Rancorous", definition: "characterized by bitterness or resentment" },
  { word: "Soporific", definition: "tending to induce drowsiness or sleep" },
  { word: "Trepidation", definition: "a feeling of fear or agitation about something that may happen" },
  { word: "Uxorious", definition: "having or showing an excessive or submissive fondness for one's wife" },
  { word: "Vicissitudes", definition: "changes of circumstance or fortune, typically one that is unwelcome or unpleasant" },
  { word: "Wheedle", definition: "use flattery or coaxing in order to persuade someone to do something" },
  { word: "Xenophobia", definition: "intense or irrational dislike or fear of people from other countries" },
  { word: "Yen", definition: "a strong desire or craving for something" },
  { word: "Zealot", definition: "a person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals" },
  { word: "Aesthetic", definition: "concerned with beauty or the appreciation of beauty" },
  { word: "Benevolent", definition: "well meaning and kindly" },
  { word: "Clandestine", definition: "kept secret or done secretively, especially because illicit" },
  { word: "Dexterous", definition: "demonstrating neat skill, especially with the hands" },
  { word: "Ephemeral", definition: "lasting for a very short time" },
  { word: "Furtive", definition: "attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble" },
  { word: "Garrulous", definition: "excessively talkative, especially on trivial matters" },
  { word: "Hapless", definition: "unfortunate and deserving pity" },
  { word: "Inscrutable", definition: "impossible to understand or interpret" },
  { word: "Jocular", definition: "fond of or characterized by joking; humorous or playful" },
  { word: "Knell", definition: "the sound of a bell, especially when rung solemnly for a death or funeral" },
  { word: "Absquatulate", definition: "to leave somewhere abruptly" },
  { word: "Brouhaha", definition: "a noisy and overexcited reaction or response to something" },
  { word: "Cromulent", definition: "valid or acceptable, often used ironically" },
  { word: "Dendrochronology", definition: "the scientific method of dating tree rings" },
  { word: "Euphonia", definition: "the quality of being pleasing to the ear" },
  { word: "Flummox", definition: "to confuse or perplex" },
  { word: "Gobbledygook", definition: "language that is meaningless or difficult to understand" },
  { word: "Hoi polloi", definition: "the common people; the masses" },
  { word: "Incandescent", definition: "emitting light as a result of being heated" },
  { word: "Juxtaposition", definition: "the fact of two things being seen or placed close together with contrasting effect" },
  { word: "Kafkaesque", definition: "characteristic or reminiscent of the oppressive or nightmarish qualities of Franz Kafka's fictional world" },
  { word: "Lackadaisical", definition: "lacking enthusiasm and determination; carelessly lazy" },
  { word: "Mellifluous", definition: "sweet or musical; pleasant to hear" },
  { word: "Nefarious", definition: "wicked or criminal" },
  { word: "Obsequious", definition: "obedient or attentive to an excessive or servile degree" },
  { word: "Pastiche", definition: "an artistic work in a style that imitates that of another work, artist, or period" },
  { word: "Quagmire", definition: "an awkward, complex, or hazardous situation" },
  { word: "Ratatouille", definition: "a vegetable stew made with eggplant, peppers, tomatoes, and zucchini" },
  { word: "Sesquipedalian", definition: "given to using long words" },
  { word: "Tintinnabulation", definition: "the ringing or sound of bells" },
  { word: "Ubiquitous", definition: "present, appearing, or found everywhere" },
  { word: "Vitriolic", definition: "filled with bitter criticism or malice" },
  { word: "Whimsical", definition: "playfully quaint or fanciful, especially in an appealing and amusing way" },
  { word: "Xenial", definition: "of or relating to hospitality" },
  { word: "Yammer", definition: "to talk incessantly and annoyingly" },
  { word: "Zephyr", definition: "a soft gentle breeze" },
  { word: "Aphorism", definition: "a concise statement of a truth or principle" },
  { word: "Bucolic", definition: "relating to the pleasant aspects of the countryside and country life" },
  { word: "Cynosure", definition: "a person or thing that is the center of attention or admiration" },
 ];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateQuestion(wordObj, words) {
  const incorrectWords = [
    words[getRandomInt(words.length)].word,
    words[getRandomInt(words.length)].word
  ];
  const options = [
    wordObj.word,
    ...incorrectWords
  ];
  
  options.sort(() => Math.random() - 0.5);
  
  const question = {
    definition: wordObj.definition,
    options: options,
    correctIndex: options.indexOf(wordObj.word)
  };
  
  return question;
}

function askQuestion(question) {
  return new Promise((resolve, reject) => {
    const questionDiv = document.getElementById("question");
    questionDiv.innerText = question.definition;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => {
        handleAnswer(index, question.correctIndex, resolve, optionsDiv);
      });
      optionsDiv.appendChild(button);
    });

    const answerButtons = optionsDiv.querySelectorAll("button");

    function handleAnswer(index, correctIndex, resolve, optionsDiv) {
      const selectedButton = answerButtons[index];
      if (index === correctIndex) {
        selectedButton.classList.add('correct');
      } else {
        selectedButton.classList.add('incorrect');
        answerButtons[correctIndex].classList.add('correct');
      }
      answerButtons.forEach(button => button.disabled = true);
      resolve();
    }
  });
}

const optionsDiv = document.getElementById("options")
const answerButtons = optionsDiv.querySelectorAll("button");

function handleAnswer(index, correctIndex, resolve, optionsDiv) {
  const answerButtons = optionsDiv.querySelectorAll("button");
  const selectedButton = answerButtons[index];
  if (index === correctIndex) {
    selectedButton.classList.add('correct');
  } else {
    selectedButton.classList.add('incorrect');
    answerButtons[correctIndex].classList.add('correct');
  }
  answerButtons.forEach(button => button.disabled = true);
  resolve();
}

async function playGame(words) {
  words.sort(() => Math.random() - 0.5);
  while (true) {
    const wordObj = words[Math.floor(Math.random() * words.length)];
;
    const question = generateQuestion(wordObj, words);
    const answer = await askQuestion(question);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}
playGame(words);
