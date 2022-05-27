function isCharacterMatch(string1, string2) {
// let s1 = string1.split('')
let s1 = string1.split('').filter(l => (l !== ' ')).map(x => x.toUpperCase()).sort().join('')
let s2 = string2.split('').filter(l => (l !== ' ')).map(x => x.toUpperCase()).sort().join('')
return s1 === s2
// let s11 = s1.filter(l => (l !== ' '))
// return Array.isArray(s11)
// let s111 = s11.map(x => x.toUpperCase()).sort().join('')
// return s111
// s11.sort().join('')
// let s111 = s1.forEach(x => x.toUpperCase())
// let s11 = s1.filter(l => l !== ' ').sort().join('')
// let s2 = string2.split('')
// let s22 = s2.forEach(x => x.toUpperCase())
// let s22 = s2.filter(l => l !== ' ').sort().join('')
// let s11 = []
// let s22 = []
// console.log(typeOf s1)
// console.log(typeOf s2)
// console.log(s1)
// console.log(s2)
// return (s1.join('').toUppercase()) == (s2.join('').toUppercase())
// for (let i=0; i<s1.length; i++) {
//     for (let j=0; j<s2.length; j++) {
//         if (s1[i] == s2[j]) {
//             s11.push(s1[i])
//             s1.splice(i,1)
//         }
//     }
// } 
// console.log(s11)
};

// console.log(isCharacterMatch('charm', 'march'));
// console.log(isCharacterMatch('zach', 'attack'));
// console.log(isCharacterMatch('CharM', 'mARcH'));
// console.log(isCharacterMatch('abcde2', 'c2abed'));

// console.log("This test is for the challenge quesiton");
// console.log(isCharacterMatch('Anna Madrigal', 'A man and a girl'));

console.log(isCharacterMatch('charm', 'march') === true);
console.log(isCharacterMatch('zach', 'attack') === false);
console.log(isCharacterMatch('CharM', 'mARcH') === true);
console.log(isCharacterMatch('abcde2', 'c2abed') === true);

// console.log("This test is for the challenge quesiton");
console.log(isCharacterMatch('Anna Madrigal', 'A man and a girl') === true);


// exports.isCharacterMatch = function isCharacterMatch(string1, string2)