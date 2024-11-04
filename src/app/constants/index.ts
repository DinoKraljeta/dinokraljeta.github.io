export type GameKey = 'cyberpunk' | 'dune' | 'starWars';

export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface Dropdown {
  label: string;
  options: DropdownOption[];
}

export interface Game {
  base_src: GameKey;
  url: string;
  label: string;
  label_short: string;
  hasRandomizer: boolean;
  dropdowns: Dropdown[];
}

export type AIGamesType = {
  [key in GameKey]: Game;
};

export const AI_GAMES: AIGamesType = {
  cyberpunk: {
    base_src: 'cyberpunk',
    url: 'cyberpunk',
    label: 'Cyberpunk 2077: Gangs of Night City',
    label_short: 'Cyberpunk',
    hasRandomizer: false,
    dropdowns: [
      {
        label: 'Action Sequence',
        options: [
          { label: 'After activation', value: 3 },
          { label: 'After reclaim', value: 4 },
        ],
      },
      {
        label: 'Battle Sequence',
        options: [
          { label: 'Gang', value: 1 },
          { label: 'Edgerunner', value: 2 },
        ],
      },
    ],
  },
  dune: {
    base_src: 'dune',
    url: 'war-for-arrakis',
    label: 'Dune: War For Arrakis',
    label_short: 'Dune',
    hasRandomizer: false,
    dropdowns: [
      {
        label: 'Game Sequence',
        options: [
          { label: '0. Start of round', value: 1 },
          { label: '1a. Harvesters', value: 2 },
          { label: '1b. Carryalls & Ornithopters', value: 3 },
          { label: '2. Action resolution', value: 4 },
          {
            label: '3. Dezert hazards | Spice harvesting | Round end',
            value: 5,
          },
          { label: 'Special rules', value: 13 },
        ],
      },
      {
        label: 'Harkonnen Action',
        options: [
          { label: 'A1. Leadership - Attack a Sietch', value: 6 },
          { label: 'A2. Leadership - Attack a Legion', value: 7 },
          { label: 'A3. Leadership - Move the Legions', value: 8 },
          { label: 'B. Deployment', value: 9 },
          { label: 'C. Mentat', value: 10 },
          { label: 'D. House', value: 11 },
          { label: 'E. Combat', value: 12 },
        ],
      },
    ],
  },
  starWars: {
    base_src: 'starWars',
    url: 'outer-rim',
    label: 'Star Wars: Outer Rim',
    label_short: 'Star Wars',
    hasRandomizer: true,
    dropdowns: [
      {
        label: 'Oponent',
        options: [
          { label: 'Boba', value: 'Boba' },
          { label: 'Bossk', value: 'Bossk' },
          { label: 'DrAphra', value: 'DrAphra' },
          { label: 'HanSolo', value: 'HanSolo' },
          { label: 'IG-88', value: 'IG-88' },
          { label: 'Jyn', value: 'Jyn' },
          { label: 'Ketsu', value: 'Ketsu' },
          { label: 'Lando', value: 'Lando' },
        ],
      },
    ],
  },
};
