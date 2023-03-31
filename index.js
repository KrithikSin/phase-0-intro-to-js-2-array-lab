// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  cats.push(name);
  return cats;
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
  return cats;
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
  return cats;
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
  return cats;
};

const appendCat = (name) => {
  const newCats = [...cats, name];
  return newCats;
};

const prependCat = (name) => {
  const newCats = [name, ...cats];
  return newCats;
};

const removeLastCat = () => {
  return cats.slice(0, -1);
};

const removeFirstCat = () => {
  return cats.slice(1);
};
