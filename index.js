const pokemons = [
  {name: 'mewtu', hp: 4178, angriff: 300, verteidigung: 182, super_attacke: 3, type: ['psycho'], effektiv: ['kampf', 'psycho']},
  {name: 'reshiram', hp: 4038, angriff: 275, verteidigung: 211, super_attacke: 4, type: ['feuer', 'drache'], effektiv: ['pflanze', 'eis', 'käfer', 'stahl', 'drache']},
  {name: 'dialga', hp: 4038, angriff: 275, verteidigung: 211, super_attacke: 5, type: ['drache', 'stahl'], effektiv: ['eis', 'stein', 'fee', 'drache']},
  {name: 'knakrack', hp: 3962, angriff: 261, verteidigung: 193, super_attacke: 3, type: ['boden', 'drache'], effektiv: ['blitz', 'stein', 'gift', 'drache']},
  {name: 'rameidon', hp: 3298, angriff: 295, verteidigung: 109, super_attacke: 3, type: ['stein'], effektiv: ['normal', 'flug', 'gift', 'feuer']},
  {name: 'maxax', hp: 3593, angriff: 284, verteidigung: 172, super_attacke: 3, type: ['drache'], effektiv: ['feuer', 'pflanze', 'wasser', 'blitz']},
  {name: 'zekrom', hp: 4038, angriff: 275, verteidigung: 211, super_attacke: 3, type: ['blitz', 'drache'], effektiv: ['wasser', 'flug', 'drache']},
  {name: 'deoxys', hp: 3160, angriff: 345, verteidigung: 115, super_attacke: 3, type: ['psycho'], effektiv: ['kampf', 'psycho']},
  {name: 'aeropteryx', hp: 3331, angriff: 292, verteidigung: 139, super_attacke: 3, type: ['stein', 'flug'], effektiv: ['kampf', 'boden', 'käfer', 'pflanze', 'normal', 'flug', 'gift', 'feuer']},
  {name: 'ho-oh', hp: 3863, angriff: 239, verteidigung: 244, super_attacke: 4, type: ['feuer', 'flug'], effektiv: ['eis', 'pflanze', 'stahl', 'käfer', 'gift']},
  {name: 'rayquaza', hp: 3835, angriff: 284, verteidigung: 170, super_attacke: 3, type: ['drache', 'flug'], effektiv: ['drache', 'kampf', 'pflanze', 'eis', 'käfer']},
  {name: 'groudon', hp: 4115, angriff: 270, verteidigung: 228, super_attacke: 5, type: ['boden'], effektiv: ['blitz', 'stein', 'gift']},
  {name: 'kyogre', hp: 4115, angriff: 270, verteidigung: 228, super_attacke: 5, type: ['wasser'], effektiv: ['boden', 'feuer']},
  {name: 'zwirrfinst', hp: 2388, angriff: 180, verteidigung: 254, super_attacke: 4, type: ['geist'], effektiv: ['normal', 'kampf', 'gift', 'käfer']},
  {name: 'brutalanda', hp: 3749, angriff: 277, verteidigung: 168, super_attacke: 4, type: ['drache', 'flug'], effektiv: ['drache', 'kampf', 'pflanze', 'eis', 'käfer']},
  {name: 'skelabra', hp: 3268, angriff: 271, verteidigung: 182, super_attacke: 3, type: ['geist', 'feuer'], effektiv: ['normal', 'kampf', 'gift', 'käfer', 'stahl', 'pflanze', 'eis', 'fee']},
  {name: 'despotar', hp: 3834, angriff: 251, verteidigung: 207, super_attacke: 5, type: ['unlicht', 'stein'], effektiv: ['psycho', 'geist']},
  {name: 'letarking', hp: 4431, angriff: 290, verteidigung: 166, super_attacke: 4, type: ['normal'], effektiv: ['geist']},
  {name: 'regigigas', hp: 4346, angriff: 287, verteidigung: 210, super_attacke: 4, type: ['normal'], effektiv: ['geist']},
  {name: 'latios', hp: 3812, angriff: 268, verteidigung: 212, super_attacke: 3, type: ['drache', 'psycho'], effektiv: ['kampf', 'psycho', 'drache']},
  {name: 'metagross', hp: 3791, angriff: 257, verteidigung: 228, super_attacke: 4, type: ['stahl', 'psycho'], effektiv: ['kampf', 'psycho', 'fee', 'eis', 'stein']},
  {name: 'lugia', hp: 3703, angriff: 193, verteidigung: 310, super_attacke: 4, type: ['flug', 'psycho'], effektiv: ['kampf', 'pflanze', 'käfer', 'psycho']},
  {name: 'meloetta', hp: 3972, angriff: 250, verteidigung: 225, super_attacke: 3, type: ['normal', 'psycho'], effektiv: ['kampf', 'psycho', 'geist']},
  {name: 'trikephalo', hp: 3625, angriff: 256, verteidigung: 188, super_attacke: 3, type: ['unlicht', 'drache'], effektiv: ['drache', 'psycho', 'geist']},
  {name: 'melmetal', hp: 3599, angriff: 226, verteidigung: 190, super_attacke: 4, type: ['stahl'], effektiv: ['eis', 'stein', 'fee']},
  {name: 'garados', hp: 3391, angriff: 237, verteidigung: 186, super_attacke: 3, type: ['wasser', 'flug'], effektiv: ['boden', 'feuer', 'pflanze', 'kampf', 'käfer']},
  {name: 'porygon-z', hp: 3266, angriff: 264, verteidigung: 150, super_attacke: 3, type: ['normal'], effektiv: ['geist']},
  {name: 'mew', hp: 3265, angriff: 210, verteidigung: 210, super_attacke: 3, type: ['psycho'], effektiv: ['kampf', 'psycho']},
]

const spieler_taschen = {
  1: {
    super_attacke: 0,
    pokemons: [],
  },
  2: {
    super_attacke: 0,
    pokemons: [],
  },
}

const max_pokemon_auswaehlbar = 4
let ist_mitten_im_angriff = false
let auswaehlende_spieler
let angreifende_spieler
let verteidigende_spieler

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
  pokemon_auswaehlen_mp3.play()
  pokemon_auswaehlen_liste.classList.add('anzeigen')
  pokemon_liste_befuellen()
}

const pokemon_liste_befuellen = () => {
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
  const wurde_schon_ausgewaehlt = spieler_taschen[auswaehlende_spieler].pokemons.find(pokemon => pokemon.name === pokemon_name)

  pokemon_bild.classList.toggle('ausgewaehlt')

  if (wurde_schon_ausgewaehlt) {
    spieler_taschen[auswaehlende_spieler].pokemons = spieler_taschen[auswaehlende_spieler].pokemons.filter(pokemon => pokemon.name !== pokemon_name)
  } else if (spieler_taschen[auswaehlende_spieler].pokemons.length < max_pokemon_auswaehlbar) {
    spieler_taschen[auswaehlende_spieler].pokemons.push(JSON.parse(JSON.stringify(pokemon)))
  }

  ist_fertig_ausgewaehlt_worden()
}

const ist_fertig_ausgewaehlt_worden = () => {
  if (spieler_taschen[auswaehlende_spieler].pokemons.length === max_pokemon_auswaehlbar) {
    pokemon_auswaehlen_mp3.pause()
    pokemon_auswaehlen_mp3.currentTime = 0
    pokemon_auswaehlen_liste.classList.remove('anzeigen')
    pokemon_liste.innerHTML = ''

    document.querySelector(`.spieler_${auswaehlende_spieler} button`).style.display = 'none'
    document.querySelector(`.spieler_${auswaehlende_spieler} .pokemon_leiste`).classList.add('anzeigen')
    pokemon_platzieren(auswaehlende_spieler)
  }
  if (spieler_taschen[1].pokemons.length === max_pokemon_auswaehlbar && spieler_taschen[2].pokemons.length === max_pokemon_auswaehlbar) {
    wuerfel.classList.add('anzeigen')

    angreifer_auswaehlen()
  }
}

const pokemon_platzieren = (spieler) => {
  const pokemon_bild = document.querySelector(`.spieler_${spieler} .pokemon_bild`)

  pokemon_bild.innerHTML = ''

  for (let pokemon of spieler_taschen[spieler].pokemons) {
    if (pokemon.hp <= 0) {
      pokemon.ist_im_kampf = false
    }
    if (!pokemon.ist_im_kampf && pokemon.hp > 0) {
      pokemon_name_aktualisieren(pokemon, spieler)
      pokemon_einsetzen(pokemon, spieler)
      pokemon_hp_aufladen(spieler)
      super_attacke_leeren(spieler)
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

const pokemon_name_aktualisieren = (pokemon, spieler) => {
  const pokemon_name = document.querySelector(`.spieler_${spieler} .pokemon_name`)
  pokemon_name.innerHTML = pokemon.name
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
  const pokemon_name = pokemon_von_verteidiger().name
  const pokemon = pokemons.find(pokemon => pokemon.name === pokemon_name)

  pokemon_hp.querySelector('span').style.width = `${Math.ceil((100 * hp) / pokemon.hp)}%`
}

const super_attacke_aufladen = () => {
  const pokemon = pokemon_von_angreifer()
  const pokemon_super_attacke = document.querySelector(`.spieler_${angreifende_spieler} .pokemon_super_attacke`)
  spieler_taschen[angreifende_spieler].super_attacke = spieler_taschen[angreifende_spieler].super_attacke + 1

  if (spieler_taschen[angreifende_spieler].super_attacke > pokemon.super_attacke) {
    spieler_taschen[angreifende_spieler].super_attacke = pokemon.super_attacke
  }

  pokemon_super_attacke.querySelector('span').style.width = `${Math.ceil((100 * spieler_taschen[angreifende_spieler].super_attacke) / pokemon.super_attacke)}%`
}

const ist_super_attacke_voll = () => {
  return spieler_taschen[angreifende_spieler].super_attacke >= pokemon_von_angreifer().super_attacke
}

const super_attacke_leeren = (spieler) => {
  const pokemon_super_attacke = document.querySelector(`.spieler_${spieler} .pokemon_super_attacke`)

  pokemon_super_attacke.querySelector('span').style.width = 0
  spieler_taschen[spieler].super_attacke = 0
}

const super_attacke_schaden_berechnen = (schaden, angreifer_pokemon) => {
  if (ist_super_attacke_voll()) {
    super_attacke_leeren(angreifende_spieler)
    schaden = schaden * angreifer_pokemon.super_attacke
  } else {
    super_attacke_aufladen()
  }

  return schaden
}

const schlagen = ( wuerfel_zahl) => {
  const angreifer_pokemon = pokemon_von_angreifer()
  const verteidiger_pokemon = pokemon_von_verteidiger()
  const effektiv = angreifer_pokemon.effektiv.some(v => verteidiger_pokemon.type.indexOf(v) !== -1)
  if (effektiv) {
    wuerfel_zahl = wuerfel_zahl + 2
  }
  let schaden = (angreifer_pokemon.angriff * wuerfel_zahl) - verteidiger_pokemon.verteidigung
  if (schaden < 0) {
    schaden = 0
  }
  schaden = super_attacke_schaden_berechnen(schaden, angreifer_pokemon)
  verteidiger_pokemon.hp = verteidiger_pokemon.hp - schaden
  angriff_animieren(schaden, verteidiger_pokemon.hp)
}

const rolle_wechseln = () => {
  const verteidigender = verteidigende_spieler
  verteidigende_spieler = angreifende_spieler
  angreifende_spieler = verteidigender
  informations_tafel.innerHTML = `Spieler ${angreifende_spieler} greift an`
}

const super_attacke_animieren = () => {
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

  wuerfel_animieren(wuerfel_zahl)
  setTimeout(() => {
    schlagen(wuerfel_zahl)
  }, 500)
  setTimeout(() => {
    if (pokemon_von_verteidiger().hp <= 0) {
      pokemon_platzieren(verteidigende_spieler)
    }
    wuerfel.classList.remove('deaktivieren')
    const sieger = finde_den_sieger()
    if (sieger > 0) {
      sieger_animieren(sieger)
      return
    }
    rolle_wechseln()
    super_attacke_animieren()
    ist_mitten_im_angriff = false
  }, 1500)
}

const finde_den_sieger = () => {
  if (pokemon_von_verteidiger() === undefined) {
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

const pokemon_von_angreifer = () => {
  return spieler_taschen[angreifende_spieler].pokemons.find(pokemon => pokemon.ist_im_kampf === true)
}

const pokemon_von_verteidiger = () => {
  return spieler_taschen[verteidigende_spieler].pokemons.find(pokemon => pokemon.ist_im_kampf === true)
}
