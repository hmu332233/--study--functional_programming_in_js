// function _filter(user, predicate)
// users {Array} : 대상이 되는 array
// predicate {function} : 필터될 대상이 되는 조건을 알려주는 함수
//
// 해당 조건에 맞는 것만 남긴 새로운 배열을 넘겨준다
function _filter(list, predicate) {
  var new_list = [];
  // for (var i = 0; i < list.length; i++) {
  //   if (predicate(list[i])) {
  //     new_list.push(list[i]);
  //   }
  // }
  _each(list, function (val) {
    new_list.push(predicate(val));
  });
  return new_list;
}

// function _map(list, mapper)
// list {Array} : 대상이 되는 배열
// mapper {function} : 
//
// 해당 조건에 맞는 인자들만 남긴다.
function _map(list, mapper) {
  var new_list = [];
  // for (var i = 0; i < list.length; i++) {
  //   new_list.push(mapper(list[i]));
  // }
  _each(list, function (val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

// function _each(list, iter)
// list {Array}
// iter {function} : 
//
// for문을 돌면서 하는일을 위임하는 함수
function _each(list, iter) {
  
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}