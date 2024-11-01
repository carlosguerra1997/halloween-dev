function createMagicPotion(potions, target) {
  const goalMap = new Map()

  for (const [i, potion] of potions.entries()) {
    const neededPower = target - potion

    if (goalMap.has(neededPower)) {
      return [ goalMap.get(neededPower), i ]
    }

    goalMap.set(potion, i)
  }

  return undefined
}