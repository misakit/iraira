enchant();


window.onload = function() {
    var game = new Game(117, 144);
    game.fps = 20;
    game.preload('map0.png');
    game.onload = function() {
        map = new Map(16, 16);
        map.image = game.assets['map0.png'];
        map.loadData(
            [
                [9, 3, 3, 3, 3, 3, 3],
                [9, 9, 9, 9, 3, 9, 3],
                [3, 9, 3, 9, 3, 9, 3],
                [3, 9, 3, 9, 9, 9, 3],
                [3, 3, 3, 9, 3, 3, 3],
                [3, 9, 9, 9, 9, 9, 3],
                [3, 9, 3, 3, 3, 3, 3],
                [3, 9, 9, 9, 9, 9, 9],
                [3, 3, 3, 3, 3, 3, 3]
            ]
        );
        game.rootScene.addChild(map);

        var colMap = [
          [0,1,1,1,1,1,1],
          [0,0,0,0,1,0,1],
          [1,0,1,0,1,0,1],
          [1,0,1,0,0,0,1],
          [1,1,1,0,1,1,1],
          [1,0,0,0,0,0,1],
          [1,0,1,1,1,1,1],
          [1,0,0,0,0,0,0],
          [1,1,1,1,1,1,1]
        ];

        map.collisionData = colMap;

        scene = new Scene();
        scene.addEventListener('touchstart', function(evt) {
          //console.log("touchstart");
          //console.log("x: " + evt.x + ", y: " + evt.y);
          addDot({x: evt.x, y: evt.y});
       });
        scene.addEventListener('touchmove', function(evt) {
          //console.log("touchmove");
          //console.log("x: " + evt.x + ", y: " + evt.y);
          addDot({x: evt.x, y: evt.y});
        });
        scene.addEventListener('touchend', function(evt) {
          //console.log("touchend");
          //console.log("x: " + evt.x + ", y: " + evt.y);
          alert("end");
        });
        game.pushScene(scene);
    };
    game.start();
};

function addDot(args){
  // args -> x, y
  var dot = new Sprite(3, 3);
  dot.image = new Surface(3, 3);
  dot.image.context.beginPath();
  dot.image.context.fillStyle = 'rgb(155, 187, 89)';
  dot.image.context.fillRect(0,0,3,3);
  dot.x = args.x;
  dot.y = args.y;
  scene.addChild(dot);
  if (map.hitTest(args.x, args.y + 3) || map.hitTest(args.x + 3, args.y + 3)) {
    alert("hit!");
    //console.log("hit");
  };
};
