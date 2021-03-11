
exports.min = function min (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }else{
    let minimum = array[0];
    for(i = 1; i < array.length; i++){
      if(array[i] < minimum){
        minimum = array[i];
      }
    }
    return minimum;
  }
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }else{
    let maximum = array[0];
    for(i = 1; i < array.length; i++){
      if(array[i] > maximum){
        maximum = array[i];
      }
    }
    return maximum;
  }
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }else{
    let sum = 0;
    for(i = 0; i < array.length; i++){
      sum = sum + array[i];
    }
    return sum / array.length;
  }
}
