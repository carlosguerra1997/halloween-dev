# Horda de zombies

En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes con poderes de ataque específicos.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, determina quién queda al final y con cuánto poder de ataque.

Importante: Las dos cadenas siempre tendrán la misma longitud.

La salida es una cadena de texto que representa el resultado final de la batalla.  
Si sobreviven zombies, devuelve su poder seguido de "z", por ejemplo "3z".  
Si sobreviven humanos, devuelve su poder seguido de "h", por ejemplo "2h".  
Si hay un empate y ninguno queda con poder al final, devuelve "x".  

```js
const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"

// Primera ronda: zombie 2 vs human 3 -> Humanos ganan (+1)
// Segunda ronda: zombie 4 vs human 3+1 -> Empate
// Tercera ronda: zombie 2 vs human 4 -> Humanos ganan (+2)
// Resultado: "2h"
```

```js
const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "x"

// Primera ronda: zombie 4 vs human 2 -> Zombies ganan (+2)
// Segunda ronda: zombie 4+2 vs human 8 -> Humanos ganan (+2)
// Tercera ronda: zombie 4 vs human 2+2 -> Empate
// Resultado: "x"
```