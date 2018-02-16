export const SHOW_ZODIAC = 'SHOW_ZODIAC'

export const showZodiac = (animal) => {
  return {
    type: SHOW_ZODIAC,
    updateAnimal: animal
  }
}
