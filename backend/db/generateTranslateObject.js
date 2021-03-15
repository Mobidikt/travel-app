const {
  contriesDe,
  contriesEn,
  contriesRu,
  attractionEn,
  attractionRu,
  attractionDe,
} = require('./translationConfig')

module.exports.generateCountriesTranslationOjbect = () => {
  let countries = {}

  for (let i = 0; i < contriesEn.length; i++) {
    countries[`id${contriesEn[i].id}`] = {
      en: {
        country: contriesEn[i].country,
        capital: contriesEn[i].capital,
        description: contriesEn[i].description,
      },
      ru: {
        country: contriesRu[i].country,
        capital: contriesRu[i].capital,
        description: contriesRu[i].description,
      },
      de: {
        country: contriesDe[i].country,
        capital: contriesDe[i].capital,
        description: contriesDe[i].description,
      },
    }
  }

  return countries
}

const countryIdList = [
  '604e5fcb3bc43b2440cf2323',
  '604e5fcc3bc43b2440cf2324',
  '604e5fcc3bc43b2440cf2325',
  '604e5fcc3bc43b2440cf2326',
  '604e5fcc3bc43b2440cf2327',
  '604e5fcc3bc43b2440cf2328',
  '604e5fcc3bc43b2440cf2329',
  '604e5fcc3bc43b2440cf232a',
]

module.exports.generateAttractionsTranslationOjbect = () => {
  let attractions = {}

  countryIdList.forEach((coutryId) => {
    attractions[`id${coutryId}`] = {
      en: attractionEn.filter((attraction) => attraction.idCountry === coutryId),
      ru: attractionRu.filter((attraction) => attraction.idCountry === coutryId),
      de: attractionDe.filter((attraction) => attraction.idCountry === coutryId),
    }
  })

  return attractions
}
