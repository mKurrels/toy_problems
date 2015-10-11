// Given a list, return all subsets.

var superset = function (set) {

  var subsets = [[]];

  var findSubsets = function (arrays) {

    var newArrays = [];
    for (var i = 0; i < arrays.length; i++) {
      var startIndex = arrays[i].index + 1;
      var array = arrays[i].array;
      for (var j = startIndex; j < set.length; j++) {
        newArray = array.slice().concat(set[j]);
        newArrays.push({array: newArray, index: j});
        subsets.push(newArray);
      }
    }
    if (newArrays.length !== 1) {
      findSubsets(newArrays);
    }
  };

  findSubsets([{array: [], index: -1}]);
  return subsets;
};

console.log(superset([1,2,3])); //Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]] (in that order)
