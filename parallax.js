(function() {
  "use strict"

  // get handles to each element
  var var treeLeft = document.querySelector(".tree-1"),
      treeCenter = document.querySelector(".tree-2"),
      treeRight = document.querySelector(".tree-3"),
      gladeBig = document.querySelector(".glade-1"),
      gladeLittle = document.querySelector(".glade-2"),
      kremlin = document.querySelector(".kremlin"),
      airplane = document.querySelector(".airplane"),
      clouds = document.querySelector(".clouds");

  // создаем объекты с данными о значениях для положения х и величины параллакса
 var oneTree = {
    handle: treeLeft,
    xPosition: treeLeft.offsetLeft,
    yPosition: treeLeft.offsetTop,
    parallax: 0.05
  };

  var twoTree = {
    handle: treeCenter,
    xPosition: treeCenter.offsetLeft,
    yPosition: treeCenter.offsetTop,
    parallax: 0.01
  };

  var threeTree = {
    handle: treeRight,
    xPosition: treeRight.offsetLeft,
    yPosition: treeRight.offsetTop,
    parallax: 0.03
  };

  var oneGlade = {
    handle: gladeBig,
    xPosition: gladeBig.offsetLeft,
    yPosition: gladeBig.offsetTop,
    parallax: 0.03
  };

  var twoGlade = {
    handle: gladeLittle,
    xPosition: gladeLittle.offsetLeft,
    yPosition: gladeLittle.offsetTop,
    parallax: 0.03
  };

  var $kremlin = {
    handle: kremlin,
    xPosition: kremlin.offsetLeft,
    yPosition: kremlin.offsetTop,
    parallax: 0.01
  };


  var plane = {
    handle: airplane,
    xPosition: airplane.offsetLeft,
    yPosition: airplane.offsetTop,
    parallax: 0.7
  };

   // помещаем их в массивы
  var trees = [oneTree, twoTree, threeTree, plane],
    glades = [ oneGlade, twoGlade, $kremlin],
    allElements = [oneTree, twoTree, threeTree, plane, oneGlade, twoGlade, $kremlin]
  
   // перемещаем элементы в зависимости от положения мыши по оси  х
  var moveItems = function(event) {
    var mouseX = event.x;
    var windowWidth = window.innerWidth / 2;
    // в противоположную от мыши сторону
    for (var tree in trees) {
      var thisElement = trees[tree];
      var xPosition = thisElement.xPosition;
      var elementPositionX = thisElement.parallax * (windowWidth - mouseX) + thisElement.xPosition;
      thisElement.handle.style.left = elementPositionX + "px";
    }

    // в направлении мыши
     for (var glade in glades) {
      var thisElement = glades[glade];
      var xPosition = thisElement.xPosition;
      var elementPositionX = -thisElement.parallax * (windowWidth - mouseX) + thisElement.xPosition;
      thisElement.handle.style.left = elementPositionX + "px";
    }
  };
  
  // сбросить значения xPosition для каждого объекта
  // используется для обновления позиций элемента после события изменения размера окна
  var resetXPositions = function () {
    for (var element in allElements) {
      var thisElement = allElements[element];
      thisElement.xPosition = thisElement.handle.offsetLeft;
    }
  };

  // центрирование элементов на фоне 
  // при первой загрузке страницы или изменении размера окна 
  // затем обновите значение x каждого положения объекта
  var centerElements = function(event) {
    clouds.style.left = (window.innerWidth / 2) - (clouds.offsetWidth / 4) + "px";
    airplane.style.left = (window.innerWidth / 2) - (airplane.offsetWidth / 2) + "px";
    
    resetXPositions();
  };
 
  // центруем изображения при первой загрузке, если нужно
  centerElements();

  // перемещаем элементы в зависимости от положения мыши по оси  х
  document.addEventListener("mousemove", moveItems);
  
  // перезаписываем элементы при изменении размера окна
  window.onresize = centerElements;

}());