const apiKey = import.meta.env.REACT_APP_TMDB_API
export const API_Option = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            `Bearer${apiKey}`,
    },
}

export const Card_Img = 'https://image.tmdb.org/t/p/w200/'
export const BG_Img =
    'https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg'

export const Multi_lang = {
    en: {
        search: 'Search',
        placeHolderText: 'What do you want to watch today?',
    },
    Hindi: {
        search: 'खोज',
        placeHolderText: 'आज तुम क्या देखना चाहते हो?',
    },
    Spanish: {
        search: 'buscar',
        placeHolderText: '¿Qué quieres ver hoy?',
    },
    French: {
        search: 'recherche',
        placeHolderText: 'Que veux-tu regarder aujourd’hui ?',
    },
}

export const Total_Lang = [
  {langkey:'en',
    lang:'English'
  },
  {langkey:'Hindi',
    lang:'Hindi'
  },
  {langkey:'French',
    lang:'French'
  },
  {langkey:'Spanish',
    lang:'Spanish'
  },
]

