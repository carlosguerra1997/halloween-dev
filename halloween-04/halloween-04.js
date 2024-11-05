function findTheKiller(whisper, suspects) {
  const regex = new RegExp(`^${whisper.replace(/~/g, '.')}`, 'i')
  const matches = suspects.filter(suspect => regex.test(suspect))
  return matches.length ? matches.join(',') : '';
}