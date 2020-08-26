// enjoyeng

function updateView(link) {
  let view = document.getElementsByClassName('view')[0];

  updateAddress(link);
  updateMain(link);
}

function updateAddress(ni) {
  let navAddress = document.getElementsByClassName('nav-address-display')[0];

  while (navAddress.firstChild) {
    navAddress.removeChild(navAddress.firstChild);
  }

  let section = ni.parentNode.previousSibling.previousSibling.textContent.toLowerCase();
  let title = section.replace(section[0], section[0].toUpperCase())
  let sectionP = document.createElement("p");

  sectionP.classList.add('nav-address-text');
  sectionP.textContent = title + '  >  ' + ni.textContent;

  navAddress.appendChild(sectionP);
}

function updateMain(ni) {
  let viewMain = document.getElementsByClassName('view-main')[0];

  viewMain.textContent = ni.textContent;
}

let navigationText = [
  ['BASICS', '基礎'],
  ['Hello', 'こんにちは'],
  ['Sentences', '文'],
  ['Questions', '質問'],
  ['VOCABULARY', '単語'],
  ['People', '人'],
  ['Places', '場所'],
  ['Food', '食べ物'],
  ['Drinks', '飲み物'],
  ['VERBS', '動詞'],
  ['To Be', 'いる・ある'],
  ['To Do', 'する'],
  ['To Go', 'いく'],
  ['To Have', 'ある・持ってる'],
  ['Present', '今'],
  ['Past', '過去'],
  ['Future', '未来'],
  ['PATTERNS', '模様'],
  ['Often', '良く、あまり'],
  ['Want to do', 'したい'],
  ['Like', '好き'],
  ['GRAMMAR', '文法'],
  ['Noun', '名詞'],
  ['Prepositions', '前置詞'],
  ['This, That, The Other', 'これ、それ、あれ']
];

let phrases = [
  'tend to',
  'stands for',
  'because',
  'if',
  'as _ as',
  'have to'
];

function translateNav(gengo) {
  let navText = document.getElementsByClassName('nav-text');

  let gengoChoice;
  switch (gengo) {
    case 'english':
      gengoChoice = 0;
      break;
    case 'japanese':
      gengoChoice = 1;
      break;
  }

  for (var i = 0; i < navText.length; i++) {
    navText[i].textContent = navigationText[i][gengoChoice];
  }
}

let someDifferences = [
  {
    title: 'Keep vs Continue',
    words: ['keep', 'continue'],
    difference: 'Keep means continue to hold. Continue means keep going. In a phrase like "keep me in mind", it means that\
    the speaker wants the listener to continue to think about that person.',
    examples: [
      'Keep in mind how much time you have.',
      'After dinner, I will continue working on my project.'
    ]
  },
  {
    title: 'Talk vs Discuss',
    words: ['talk', 'discuss'],
    difference: 'The verb "talk" requires the preposition "about". The verb "discuss" is transitive so it does\
    not require the preposition "about".',
    examples: [
      "Let's talk about your hobbies.",
      "Would you like to discuss politics?"
    ]
  }
]

function windowOnloadFunctions() {
  //resizeWindows();
}
window.onload = windowOnloadFunctions();
