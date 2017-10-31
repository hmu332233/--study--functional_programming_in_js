// function _filter(user, predicate)
// users {Array} : 대상이 되는 array
// predicate {function} : 필터될 대상이 되는 조건을 알려주는 함수
function _filter(list, predicate) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}


// function _map(list, mapper)
// list {Array} : 대상이 되는 배열
// mapper {function} : 
function _map(list, mapper) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}