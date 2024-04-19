//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    players: {
      name: 'Players',
      fields: {
        eyePowers: 'Eye Powers',
        firePowers: 'Fire Powers',
        waterPowers: 'Water Powers',
        earthPowers: 'Earth Powers',
        id: 'id',
      },
    },
    roles: {
      name: 'Roles',
      fields: {
        guardingKeyAreas: 'Guarding Key Areas',
        secretRoomForBossStage: 'Secret Room For Boss Stage',
        id: 'id',
      },
    },
    tasks: {
      name: 'Tasks',
      fields: {
        awareness: 'Awareness',
        enemyTransformationDetection: 'Enemy Transformation Detection',
        spotEnemies: 'Spot Enemies',
        id: 'id',
      },
    },
    transformations: {
      name: 'Transformations',
      fields: {
        evolutionProcess: 'Evolution Process',
        targetCharacter: 'Target Character',
        suitabilityToPosition: 'Suitability To Position',
        id: 'id',
      },
    },
    pokemons: {
      name: 'Pokemons',
      fields: {
        giganticPowerActivation: 'Gigantic Power Activation',
        powerMaximization: 'Power Maximization',
        attackMechanism: 'Attack Mechanism',
        id: 'id',
      },
    },
    upgrades: {
      name: 'Upgrades',
      fields: { eyesOfTheSharingan: 'Eyes Of The Sharingan', id: 'id' },
    },
    ninjutsus: { name: 'Ninjutsus', fields: { level: 'Level', id: 'id' } },
    voteCall: {
      name: 'Vote Call',
      fields: {
        spotImposter: 'Spot Imposter',
        knockOut: 'Knock Out',
        id: 'id',
      },
    },
    characters: {
      name: 'Characters',
      fields: {
        richness: 'Richness',
        lifeLike: 'Life Like',
        traditionalCostumes: 'Traditional Costumes',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    players: {
      name: 'Players (fr)',
      fields: {
        eyePowers: 'Eye Powers (fr)',
        firePowers: 'Fire Powers (fr)',
        waterPowers: 'Water Powers (fr)',
        earthPowers: 'Earth Powers (fr)',
        id: 'id',
      },
    },
    roles: {
      name: 'Roles (fr)',
      fields: {
        guardingKeyAreas: 'Guarding Key Areas (fr)',
        secretRoomForBossStage: 'Secret Room For Boss Stage (fr)',
        id: 'id',
      },
    },
    tasks: {
      name: 'Tasks (fr)',
      fields: {
        awareness: 'Awareness (fr)',
        enemyTransformationDetection: 'Enemy Transformation Detection (fr)',
        spotEnemies: 'Spot Enemies (fr)',
        id: 'id',
      },
    },
    transformations: {
      name: 'Transformations (fr)',
      fields: {
        evolutionProcess: 'Evolution Process (fr)',
        targetCharacter: 'Target Character (fr)',
        suitabilityToPosition: 'Suitability To Position (fr)',
        id: 'id',
      },
    },
    pokemons: {
      name: 'Pokemons (fr)',
      fields: {
        giganticPowerActivation: 'Gigantic Power Activation (fr)',
        powerMaximization: 'Power Maximization (fr)',
        attackMechanism: 'Attack Mechanism (fr)',
        id: 'id',
      },
    },
    upgrades: {
      name: 'Upgrades (fr)',
      fields: { eyesOfTheSharingan: 'Eyes Of The Sharingan (fr)', id: 'id' },
    },
    ninjutsus: {
      name: 'Ninjutsus (fr)',
      fields: { level: 'Level (fr)', id: 'id' },
    },
    voteCall: {
      name: 'Vote Call (fr)',
      fields: {
        spotImposter: 'Spot Imposter (fr)',
        knockOut: 'Knock Out (fr)',
        id: 'id',
      },
    },
    characters: {
      name: 'Characters (fr)',
      fields: {
        richness: 'Richness (fr)',
        lifeLike: 'Life Like (fr)',
        traditionalCostumes: 'Traditional Costumes (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);