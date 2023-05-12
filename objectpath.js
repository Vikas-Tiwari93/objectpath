const obj = {
  A: 'vikas',
  a: {
    B: {
      C: 'last',
      c: { 1: 'yo!', 2: 'no' },
    },
    b: 'tiwari',
  },
};

function objectpath(object, path) {
  const pathKey = path.split('.');
  let newObject = object;
  for (let i = 0; i < pathKey.length; i++) {
    if (newObject.hasOwnProperty(pathKey[i])) {
      newObject = newObject[pathKey[i]];
      //   console.log(newObject);
    } else {
      newObject = 'undefined';
    }
  }
  return newObject;
}

console.log(objectpath(obj, 'a.B.c'));
