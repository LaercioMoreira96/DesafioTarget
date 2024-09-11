
const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;


const total = sp + rj + mg + es + outros;


console.log(`SP: ${(sp / total * 100).toFixed(2)}%`);
console.log(`RJ: ${(rj / total * 100).toFixed(2)}%`);
console.log(`MG: ${(mg / total * 100).toFixed(2)}%`);
console.log(`ES: ${(es / total * 100).toFixed(2)}%`);
console.log(`Outros: ${(outros / total * 100).toFixed(2)}%`);