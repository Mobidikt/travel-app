const { contriesDe, contriesEn, contriesRu } = require('./translationConfig')

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
