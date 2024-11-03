function battleHorde(zombies, humans) {
  let power = 0
  
  for (const [i, zPower] of zombies.split('').entries()) {
    power += +zPower - humans[i]
  }

  return power > 0 
    ? `${power}z` 
    : power < 0 ? `${-power}h` 
    : 'x'
}