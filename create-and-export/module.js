var array = [4,5,6,5135,41,414];
function storeNumber(num) {
array.push(num);

}

function sortArray(arr) {


  arr.sort(function(a,b){
    return a - b;
  });
  return arr;
}

function arrayExport(){
  return sortArray(array)
}




// storeNumber(5)
// console.log(array)
module.exports = {
    storeNumber: storeNumber,
    arrayExport: arrayExport,
};