const spieler_taschen = {
  1: [],
  2: [],
}
const pokemons = [
  {name: 'letarking', hp: 4431, angriff: 290, verteidigung: 166, type: ['normal'], effektiv: ['geist']},
  {name: 'mewtu', hp: 4178, angriff: 300, verteidigung: 182, type: ['psycho'], effektiv: ['kampf', 'psycho']},
  {name: 'groudon', hp: 4115, angriff: 270, verteidigung: 228, type: ['boden'], effektiv: ['blitz', 'stein', 'gift']},
  {name: 'kyogre', hp: 4115, angriff: 270, verteidigung: 228, type: ['wasser'], effektiv: ['boden', 'feuer']},
  {name: 'zekrom', hp: 4038, angriff: 275, verteidigung: 211, type: ['blitz', 'drache'], effektiv: ['wasser', 'flug', 'drache']},
  {name: 'reshiram', hp: 4038, angriff: 275, verteidigung: 211, type: ['feuer', 'drache'], effektiv: ['pflanze', 'eis', 'käfer', 'stahl', 'drache']},
  {name: 'dialga', hp: 4038, angriff: 275, verteidigung: 211, type: ['drache', 'stahl'], effektiv: ['eis', 'stein', 'fee', 'drache']},
  {name: 'meloetta', hp: 3972, angriff: 250, verteidigung: 225, type: ['normal', 'psycho'], effektiv: ['kampf', 'psycho', 'geist']},
  {name: 'knakrack', hp: 3962, angriff: 261, verteidigung: 193, type: ['boden', 'drache'], effektiv: ['blitz', 'stein', 'gift', 'drache']},
  {name: 'ho-oh', hp: 3863, angriff: 239, verteidigung: 244, type: ['feuer', 'flug'], effektiv: ['eis', 'pflanze', 'stahl', 'käfer', 'gift']},
  {name: 'rayquaza', hp: 3835, angriff: 284, verteidigung: 170, type: ['drache', 'flug'], effektiv: ['drache', 'kampf', 'pflanze', 'eis', 'käfer']},
  {name: 'despotar', hp: 3834, angriff: 251, verteidigung: 207, type: ['unlicht', 'stein'], effektiv: ['psycho', 'geist']},
  {name: 'latios', hp: 3812, angriff: 268, verteidigung: 212, type: ['drache', 'psycho'], effektiv: ['kampf', 'psycho', 'drache']},
  {name: 'metagross', hp: 3791, angriff: 257, verteidigung: 228, type: ['stahl', 'psycho'], effektiv: ['kampf', 'psycho', 'fee', 'eis', 'stein']},
  {name: 'lugia', hp: 3703, angriff: 193, verteidigung: 310, type: ['flug', 'psycho'], effektiv: ['kampf', 'pflanze', 'käfer', 'psycho']},
  {name: 'trikephalo', hp: 3625, angriff: 256, verteidigung: 188, type: ['unlicht', 'drache'], effektiv: ['drache', 'psycho', 'geist']},
  {name: 'melmetal', hp: 3599, angriff: 226, verteidigung: 190, type: ['stahl'], effektiv: ['eis', 'stein', 'fee']},
  {name: 'garados', hp: 3391, angriff: 237, verteidigung: 186, type: ['wasser', 'flug'], effektiv: ['boden', 'feuer', 'pflanze', 'kampf', 'käfer']},
  {name: 'porygon-z', hp: 3266, angriff: 264, verteidigung: 150, type: ['normal'], effektiv: ['geist']},
  {name: 'mew', hp: 3265, angriff: 210, verteidigung: 210, type: ['psycho'], effektiv: ['kampf', 'psycho']},
]

const max_pokemon_auswaehlbar = 3

let ist_mitten_im_angriff = false
let auswaehlende_spieler
let angreifende_spieler
let verteidigende_spieler
let spieler_1_super_attacke = 0
let spieler_2_super_attacke = 0

const body = document.querySelector('body')
const pokemon_auswaehlen_liste = document.querySelector('.pokemon_auswaehlen_liste')
const pokemon_liste = pokemon_auswaehlen_liste.querySelector('.pokemon_liste')
const informations_tafel = document.querySelector('.informations_tafel')
const wuerfel = document.querySelector('.wuerfel')

const pokemon_auswaehlen_mp3 = new Audio('mp3/pokemon_auswaehlen.mp3')
pokemon_auswaehlen_mp3.loop = true

const super_attacke_voll_mp3 = new Audio('mp3/super_attacke_voll.mp3')
super_attacke_voll_mp3.loop = true

const schlagen_mp3 = new Audio('mp3/schlagen.mp3')
const geschlagen_mp3 = new Audio('mp3/geschlagen.mp3')
const sieger_mp3 = new Audio('mp3/sieger.mp3')

const pokemon_auswaehlen = (spieler) => {
  auswaehlende_spieler = spieler
  pokemon_liste_anzeigen()
  pokemon_auswaehlen_liste.classList.add('anzeigen')
}

const pokemon_liste_anzeigen = () => {
  pokemon_auswaehlen_mp3.play()
  pokemons.forEach((pokemon) => {
    const pokemon_bild = document.createElement('img')
    pokemon_bild.src = `./bilder/${pokemon.name}.webp`
    pokemon_bild.alt = pokemon.name
    pokemon_liste.appendChild(pokemon_bild)

    pokemon_bild.addEventListener('click', () => {
      waehle_pokemon_aus(pokemon_bild)
    })
  })
}

const waehle_pokemon_aus = (pokemon_bild) => {
  const pokemon_name = pokemon_bild.alt
  const pokemon = pokemons.find(e => e.name === pokemon_name)
  const wurde_schon_ausgewaehlt = spieler_taschen[auswaehlende_spieler].find(pokemon => pokemon.name === pokemon_name)

  if (wurde_schon_ausgewaehlt) {
    spieler_taschen[auswaehlende_spieler] = spieler_taschen[auswaehlende_spieler].filter(pokemon => pokemon.name !== pokemon_name)
    pokemon_bild.classList.toggle('ausgewaehlt')
  } else if (spieler_taschen[auswaehlende_spieler].length < max_pokemon_auswaehlbar) {
    const eigene_pokemon = JSON.parse(JSON.stringify(pokemon))
    spieler_taschen[auswaehlende_spieler].push(eigene_pokemon)
    pokemon_bild.classList.toggle('ausgewaehlt')
  }

  ist_fertig_ausgewaehlt_worden()
}

const ist_fertig_ausgewaehlt_worden = () => {
  if (spieler_taschen[auswaehlende_spieler].length === max_pokemon_auswaehlbar) {
    pokemon_auswaehlen_mp3.pause()
    pokemon_auswaehlen_mp3.currentTime = 0
    pokemon_auswaehlen_liste.classList.remove('anzeigen', 'fertig_ausgewaehlt')
    pokemon_liste.innerHTML = ''

    if (spieler_taschen[auswaehlende_spieler].length > 0) {
      document.querySelector(`.spieler_${auswaehlende_spieler} button`).style.display = 'none'
      document.querySelector(`.spieler_${auswaehlende_spieler} .pokemon_leiste`).classList.add('anzeigen')
      pokemon_platzieren(auswaehlende_spieler)
    }

    if (spieler_taschen[1].length > 0 && spieler_taschen[2].length > 0) {
      wuerfel.classList.add('anzeigen')

      angreifer_auswaehlen()
    }
  }
}

const pokemon_platzieren = (spieler) => {
  const pokemon_bild = document.querySelector(`.spieler_${spieler} .pokemon_bild`)

  pokemon_bild.innerHTML = ''

  for (let pokemon of spieler_taschen[spieler]) {
    if (pokemon.hp <= 0) {
      pokemon.ist_im_kampf = false
    }
    if (!pokemon.ist_im_kampf && pokemon.hp > 0) {
      pokemon_einsetzen(pokemon, spieler)
      pokemon_hp_aufladen(spieler)
      break
    }
  }
}

const pokemon_einsetzen = (pokemon, spieler) => {
  const pokemon_bild = document.createElement('img')
  pokemon_bild.src = `./bilder/${pokemon.name}.webp`
  pokemon_bild.alt = pokemon.name

  document.querySelector(`.spieler_${spieler} .pokemon_bild`).appendChild(pokemon_bild)
  pokemon.ist_im_kampf = true
}

const pokemon_hp_aufladen = (spieler) => {
  const pokemon_hp = document.querySelector(`.spieler_${spieler} .pokemon_hp`)
  pokemon_hp.querySelector('span').style.width = '100%'
}

const angreifer_auswaehlen = () => {
  angreifende_spieler = Math.floor(Math.random() * (2 - 1 + 1) + 1)
  verteidigende_spieler = angreifende_spieler === 2 ? 1 : 2

  informations_tafel.classList.add('anzeigen')
  informations_tafel.innerHTML = `Spieler ${angreifende_spieler} greift an`
}

const angriff_animieren = (schaden, hp_von_verteidiger) => {
  schlagen_mp3.play()
  schaden_animieren(schaden)
  schlag_animieren()
  if (schaden > 0) {
    pokemon_hp_reduzieren(hp_von_verteidiger)
  }
  if (hp_von_verteidiger <= 0) {
    geschlagen_mp3.play()
  }
}

const schaden_animieren = (schaden) => {
  const pokemon_schaden = document.querySelector(`.spieler_${verteidigende_spieler} .pokemon_schaden`)

  pokemon_schaden.innerHTML = schaden
  pokemon_schaden.classList.add('anzeigen')
  setTimeout(() => {
    pokemon_schaden.classList.remove('anzeigen')
  }, 1000)
}

const schlag_animieren = () => {
  const angreifer = document.querySelector(`.spieler_${angreifende_spieler}`)
  const pokemon_leiste = angreifer.querySelector('.pokemon_leiste')
  const pokemon_bild = document.querySelector(`.spieler_${verteidigende_spieler} .pokemon_bild`)

  pokemon_leiste.classList.remove('anzeigen')
  angreifer.classList.add('angreifen')
  setTimeout(() => {
    angreifer.classList.remove('angreifen')
    pokemon_leiste.classList.add('anzeigen')
    pokemon_bild.classList.add('geschlagen')
    setTimeout(() => {
      pokemon_bild.classList.remove('geschlagen')
    }, 900)
  }, 100)

}

const pokemon_hp_reduzieren = (hp) => {
  const pokemon_hp = document.querySelector(`.spieler_${verteidigende_spieler} .pokemon_hp`)
  const pokemon_von_verteidiger = spieler_taschen[verteidigende_spieler].find(pokemon => pokemon.ist_im_kampf === true)
  const pokemon_name = pokemon_von_verteidiger.name
  const pokemon = pokemons.find(pokemon => pokemon.name === pokemon_name)

  pokemon_hp.querySelector('span').style.width = `${Math.ceil((100 * hp) / pokemon.hp)}%`
}

const super_attacke_aufladen = () => {
  let super_attacke_punkt = 1
  const pokemon_super_attacke = document.querySelector(`.spieler_${angreifende_spieler} .pokemon_super_attacke`)
  let _super_attacke

  if (angreifende_spieler === 1) {
    spieler_1_super_attacke = spieler_1_super_attacke + super_attacke_punkt
    _super_attacke = spieler_1_super_attacke
  }
  if (angreifende_spieler === 2) {
    spieler_2_super_attacke = spieler_2_super_attacke + super_attacke_punkt
    _super_attacke = spieler_2_super_attacke
  }
  if (_super_attacke > 4) {
    _super_attacke = 4
  }

  pokemon_super_attacke.querySelector('span').style.width = `${Math.ceil((100 * _super_attacke) / 4)}%`
}

const ist_super_attacke_voll = () => {
  if (angreifende_spieler === 1) {
    return spieler_1_super_attacke >= 4
  }
  if (angreifende_spieler === 2) {
    return spieler_2_super_attacke >= 4
  }
}

const super_attacke_leeren = () => {
  const pokemon_super_attacke = document.querySelector(`.spieler_${angreifende_spieler} .pokemon_super_attacke`)
  if (angreifende_spieler === 1) {
    spieler_1_super_attacke = 0
  }
  if (angreifende_spieler === 2) {
    spieler_2_super_attacke = 0
  }
  pokemon_super_attacke.querySelector('span').style.width = 0
}

const schlagen = (pokemon_von_angreifer, pokemon_von_verteidiger, wuerfel_zahl) => {
  const effektiv = pokemon_von_angreifer.effektiv.some(v => pokemon_von_verteidiger.type.indexOf(v) !== -1)
  if (effektiv) {
    wuerfel_zahl = wuerfel_zahl + 3
  }
  let schaden = (pokemon_von_angreifer.angriff * wuerfel_zahl) - pokemon_von_verteidiger.verteidigung
  if (schaden < 0) {
    schaden = 0
  }
  if (ist_super_attacke_voll()) {
    super_attacke_leeren()
    schaden = schaden * 2
  } else {
    super_attacke_aufladen()
  }
  pokemon_von_verteidiger.hp = pokemon_von_verteidiger.hp - schaden
  angriff_animieren(schaden, pokemon_von_verteidiger.hp)
}

const rolle_wechseln = () => {
  if (angreifende_spieler === 1) {
    angreifende_spieler = 2
    verteidigende_spieler = 1
  } else {
    angreifende_spieler = 1
    verteidigende_spieler = 2
  }
  informations_tafel.innerHTML = `Spieler ${angreifende_spieler} greift an`
  if (ist_super_attacke_voll()) {
    super_attacke_voll_mp3.currentTime = 0
    super_attacke_voll_mp3.play()
    body.classList.add('super_attacke_voll')
  } else {
    super_attacke_voll_mp3.pause()
    body.classList.remove('super_attacke_voll')
  }
}

const wuerfel_animieren = (wuerfel_zahl) => {
  wuerfel.classList.add('schuettel', 'deaktivieren')
  setTimeout(() => {
    wuerfel.classList.remove('schuettel')
  }, 500)

  for (let i = 1; i <= 6; i++) {
    wuerfel.classList.remove('show-' + i)

    if (wuerfel_zahl === i) {
      wuerfel.classList.add('show-' + i)
    }
  }
}

const wuerfeln = () => {
  if (ist_mitten_im_angriff) {
    return
  }
  ist_mitten_im_angriff = true

  const wuerfel_zahl = Math.floor(Math.random() * (7 - 1) + 1)
  const pokemon_von_angreifer = spieler_taschen[angreifende_spieler].find(pokemon => pokemon.ist_im_kampf === true)
  const pokemon_von_verteidiger = spieler_taschen[verteidigende_spieler].find(pokemon => pokemon.ist_im_kampf === true)

  wuerfel_animieren(wuerfel_zahl)
  setTimeout(() => {
    schlagen(pokemon_von_angreifer, pokemon_von_verteidiger, wuerfel_zahl)
  }, 500)
  setTimeout(() => {
    if (pokemon_von_verteidiger.hp <= 0) {
      pokemon_platzieren(verteidigende_spieler)
    }
    wuerfel.classList.remove('deaktivieren')
    const sieger = finde_den_sieger()
    if (sieger > 0) {
      sieger_animieren(sieger)
    } else {
      rolle_wechseln()
    }
    ist_mitten_im_angriff = false
  }, 1500)
}

const finde_den_sieger = () => {
  const pokemon_von_verteidiger = spieler_taschen[verteidigende_spieler].find(pokemon => pokemon.ist_im_kampf === true)
  if (pokemon_von_verteidiger === undefined) {
    return angreifende_spieler
  }
  return 0
}

const sieger_animieren = (sieger) => {
  const verlierer = sieger === 1 ? 2 : 1
  informations_tafel.innerHTML = `Spieler ${sieger} hat gewonnen`
  document.querySelector(`.spieler_${verlierer}`).remove()

  body.classList.remove('super_attacke_voll')
  wuerfel.classList.remove('anzeigen')
  informations_tafel.classList.add('gewinner_gefunden')
  super_attacke_voll_mp3.pause()
  sieger_mp3.play()
}
