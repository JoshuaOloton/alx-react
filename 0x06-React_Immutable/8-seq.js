import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const seq = Seq(object);

  const filtered = seq.filter((student) => student.score > 70);

  const capFirstLetter = (name) => 
    name.charAt(0).toUpperCase() + name.slice(1);

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
}

export default printBestStudents;