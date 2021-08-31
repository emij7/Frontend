//Edge list  --- En forma de array indicamos todas las conexiones
const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
  ];

//Adjacent list     --- En cada dirección de array ponemos la conexión, por ej 0 se conecta con [2]
//            ===== INDICES =====
//              0    1       2          3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];
//Adjacent list en forma de objeto
const graph = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
  };
//Adjacent matrix   --- Conexiones en forma de matriz
const graph = [
    // ==== NODOS ====
    // 1  2  3  4 
      [0, 0, 1, 0], // 0
      [0, 0, 1, 1], // 1
      [1, 1, 0, 1], // 2
      [0, 1, 1, 0]  // 3
    ];
//Adjacent matrix en forma de objeto
const graph = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
  };
