function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list');
  var firstList = rankedLists[0];
  var secondList = rankedLists[1];
  let children = firstList.children;

  for(var i = 0; i < children.length; i++) {
    var li = children[i].innerHTML;
    var newInt = parseInt(li, 10) + n;
    children[i].textContent = `${newInt}`;
  }

  children = secondList.children;

  for(var i = 0; i < children.length; i++) {
    var li = children[i].innerHTML;
    var newInt = parseInt(li, 10) + n;
    children[i].textContent = `${newInt}`;
  }
}

function deepestChild() {
  var divs = document.getElementById('grand-node').querySelectorAll('div');
  var grandNode = document.querySelector('#grand-node');
  var children = grandNode.children;
  return divs[divs.length - 1];
  /*for(var i = 0; i < divs.length; i++) {
    //let current = document.querySelector('#grand-node')[i].innerHTML;
    let current = divs[i];
    let next = [];
    if(next.length = divs.length) {
      return current;
    } else {
      next.push(current);
    }
  }*/
}
