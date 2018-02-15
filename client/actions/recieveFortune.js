export const RECIEVE_FORTUNE = 'RECIEVE_FORTUNE'

export const recieveFortune = (fortuneText) => {
  return {
    type: RECIEVE_FORTUNE,
    fortune: fortuneText
  }
}
