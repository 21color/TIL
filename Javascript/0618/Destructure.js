// 구조 분해 할당 Destructiring Assignment 
// 데이터 그룹화를 쉽게 만들 수 있다.

const animal = ['🐶', '🦄' , '🐤' , '🦅']; 
const [first, second, ...others] = animal;
console.log(others);

console.clear()
const point = [1, 2];
const [x, y, z=0] = point;
// 구조분해할당 ? 내가 의미있는 이름을 주고싶을때 ! 
console.clear()

function createEmoji(){
  return ['삐약이', '🐥'];
}

const [title, emoji] = createEmoji();
console.log(title)
console.log(emoji)

const hana = { name: 'Hana', age: 29, job: 's/w engineer' };

function display ({name, age, job}) {
  console.log(name)
  console.log(age);
  console.log(job);
}
display(hana)

const {name, age, job: occupation , pet= '강아지'} = hana;
console.log(name);
console.log(occupation);

function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
console.clear();

// Object destructuring _ basic assignmet 

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId({id}) {
  return id;
}
console.log(userId(user))

function userDisplayName({displayName: dname}) {
  return dname;
}

function whois({
  displayName, fullName: { firstName: name }
}) {
  return `${displayName} is ${name}`;
}

console.log(whois(user));

//setting a function parameter's defailt value
//Default values can be specified using =, and will be used as variable values if a specified property dose not exist in the passed object.
//Below we show a function where the defailt size is 'big', defailt co-ordinates are x: 0, y: 0 and default radius is 25.

function drawChart({size = 'big', coords = {x: 0, y: 0}, 
radius = 25} = {}) {
  console.log(size, coords, radius)
}
drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});

console.clear();

//Nested object and array destructuring 

const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); 
console.log(localeTitle); 

// For of iteration and destructuring 

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harray Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  }, 
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log(`Name ${n}. Father: ${f}`);
}