import { NextResponse } from "next/server";

const Subjects = ["The dog", "The turtle", "My friend", "Sebastian"];
const Predicates = ["runs fast", "is very wise", "loves coding", "sings poorly"];


const getRandomElement = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};


const generatePhrase = () => {
  let subject = getRandomElement(Subjects);
  let predicate = getRandomElement(Predicates);


  if (subject.length > 8) {
    subject = `${subject} is intelligent and`;
  }
  if(predicate.includes("coding")) {
    predicate = `${predicate}!`;
  }
    return `${subject} ${predicate}`;

};


export async function GET() {
    const phrase = generatePhrase();
    return NextResponse.json({ phrase });
  }