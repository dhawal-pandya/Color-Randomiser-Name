//Important Variables
const color = document.querySelector('.color');
const text = document.querySelector('.text');
const subtext = document.querySelector('.subtext');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let colorList = [
  {
    hex: '#FFFFFF',
    name: 'White',
  },
];
let nowColor = colorList[colorList.length - 1].hex;
let index = 0;
const crayolaColors = [
  { name: 'Red', hex: '#ED0A3F' },
  { name: 'Maroon', hex: '#C32148' },
  { name: 'Scarlet', hex: '#FD0E35' },
  { name: 'Brick Red', hex: '#C62D42' },
  { name: 'English Vermilion', hex: '#CC474B' },
  { name: 'Madder Lake', hex: '#CC3336' },
  { name: 'Permanent Geranium Lake', hex: '#E12C2C' },
  { name: 'Maximum Red', hex: '#D92121' },
  { name: 'Indian Red', hex: '#B94E48' },
  { name: 'Orange-Red', hex: '#FF5349' },
  { name: 'Sunset Orange', hex: '#FE4C40' },
  { name: 'Bittersweet', hex: '#FE6F5E' },
  { name: 'Dark Venetian Red', hex: '#B33B24' },
  { name: 'Venetian Red', hex: '#CC553D' },
  { name: 'Light Venetian Red', hex: '#E6735C' },
  { name: 'Vivid Tangerine', hex: '#FF9980' },
  { name: 'Middle Red', hex: '#E58E73' },
  { name: 'Burnt Orange', hex: '#FF7F49' },
  { name: 'Red-Orange', hex: '#FF681F' },
  { name: 'Orange', hex: '#FF8833' },
  { name: 'Macaroni and Cheese', hex: '#FFB97B' },
  { name: 'Middle Yellow Red', hex: '#ECB176' },
  { name: 'Mango Tango', hex: '#E77200' },
  { name: 'Yellow-Orange', hex: '#FFAE42' },
  { name: 'Maximum Yellow Red', hex: '#F2BA49' },
  { name: 'Banana Mania', hex: '#FBE7B2' },
  { name: 'Maize', hex: '#F2C649' },
  { name: 'Orange-Yellow', hex: '#F8D568' },
  { name: 'Goldenrod', hex: '#FCD667' },
  { name: 'Dandelion', hex: '#FED85D' },
  { name: 'Yellow', hex: '#FBE870' },
  { name: 'Green-Yellow', hex: '#F1E788' },
  { name: 'Middle Yellow', hex: '#FFEB00' },
  { name: 'Olive Green', hex: '#B5B35C' },
  { name: 'Spring Green', hex: '#ECEBBD' },
  { name: 'Maximum Yellow', hex: '#FAFA37' },
  { name: 'Canary', hex: '#FFFF99' },
  { name: 'Lemon Yellow', hex: '#FFFF9F' },
  { name: 'Maximum Green Yellow', hex: '#D9E650' },
  { name: 'Middle Green Yellow', hex: '#ACBF60' },
  { name: 'Inchworm', hex: '#AFE313' },
  { name: 'Light Chrome Green', hex: '#BEE64B' },
  { name: 'Yellow-Green', hex: '#C5E17A' },
  { name: 'Maximum Green', hex: '#5E8C31' },
  { name: 'Asparagus', hex: '#7BA05B' },
  { name: 'Granny Smith Apple', hex: '#9DE093' },
  { name: 'Fern', hex: '#63B76C' },
  { name: 'Middle Green', hex: '#4D8C57' },
  { name: 'Green', hex: '#3AA655' },
  { name: 'Medium Chrome Green', hex: '#6CA67C' },
  { name: 'Forest Green', hex: '#5FA777' },
  { name: 'Sea Green', hex: '#93DFB8' },
  { name: 'Shamrock', hex: '#33CC99' },
  { name: 'Mountain Meadow', hex: '#1AB385' },
  { name: 'Jungle Green', hex: '#29AB87' },
  { name: 'Caribbean Green', hex: '#00CC99' },
  { name: 'Tropical Rain Forest', hex: '#00755E' },
  { name: 'Middle Blue Green', hex: '#8DD9CC' },
  { name: 'Pine Green', hex: '#01786F' },
  { name: 'Maximum Blue Green', hex: '#30BFBF' },
  { name: "Robin's Egg Blue", hex: '#00CCCC' },
  { name: 'Teal Blue', hex: '#008080' },
  { name: 'Light Blue', hex: '#8FD8D8' },
  { name: 'Aquamarine', hex: '#95E0E8' },
  { name: 'Turquoise Blue', hex: '#6CDAE7' },
  { name: 'Outer Space', hex: '#2D383A' },
  { name: 'Sky Blue', hex: '#76D7EA' },
  { name: 'Middle Blue', hex: '#7ED4E6' },
  { name: 'Blue-Green', hex: '#0095B7' },
  { name: 'Pacific Blue', hex: '#009DC4' },
  { name: 'Cerulean', hex: '#02A4D3' },
  { name: 'Maximum Blue', hex: '#47ABCC' },
  { name: 'Blue (I)', hex: '#4997D0' },
  { name: 'Cerulean Blue', hex: '#339ACC' },
  { name: 'Cornflower', hex: '#93CCEA' },
  { name: 'Green-Blue', hex: '#2887C8' },
  { name: 'Midnight Blue', hex: '#00468C' },
  { name: 'Navy Blue', hex: '#0066CC' },
  { name: 'Denim', hex: '#1560BD' },
  { name: 'Blue (III)', hex: '#0066FF' },
  { name: 'Cadet Blue', hex: '#A9B2C3' },
  { name: 'Periwinkle', hex: '#C3CDE6' },
  { name: 'Blue (II)', hex: '#4570E6' },
  { name: 'Wild Blue Yonder', hex: '#7A89B8' },
  { name: 'Indigo', hex: '#4F69C6' },
  { name: 'Manatee', hex: '#8D90A1' },
  { name: 'Cobalt Blue', hex: '#8C90C8' },
  { name: 'Celestial Blue', hex: '#7070CC' },
  { name: 'Blue Bell', hex: '#9999CC' },
  { name: 'Maximum Blue Purple', hex: '#ACACE6' },
  { name: 'Violet-Blue', hex: '#766EC8' },
  { name: 'Blue-Violet', hex: '#6456B7' },
  { name: 'Ultramarine Blue', hex: '#3F26BF' },
  { name: 'Middle Blue Purple', hex: '#8B72BE' },
  { name: 'Purple Heart', hex: '#652DC1' },
  { name: 'Royal Purple', hex: '#6B3FA0' },
  { name: 'Violet (II)', hex: '#8359A3' },
  { name: 'Medium Violet', hex: '#8F47B3' },
  { name: 'Wisteria', hex: '#C9A0DC' },
  { name: 'Lavender (I)', hex: '#BF8FCC' },
  { name: 'Vivid Violet', hex: '#803790' },
  { name: 'Maximum Purple', hex: '#733380' },
  { name: "Purple Mountains' Majesty", hex: '#D6AEDD' },
  { name: 'Fuchsia', hex: '#C154C1' },
  { name: 'Pink Flamingo', hex: '#FC74FD' },
  { name: 'Violet (I)', hex: '#732E6C' },
  { name: 'Brilliant Rose', hex: '#E667CE' },
  { name: 'Orchid', hex: '#E29CD2' },
  { name: 'Plum', hex: '#8E3179' },
  { name: 'Medium Rose', hex: '#D96CBE' },
  { name: 'Thistle', hex: '#EBB0D7' },
  { name: 'Mulberry', hex: '#C8509B' },
  { name: 'Red-Violet', hex: '#BB3385' },
  { name: 'Middle Purple', hex: '#D982B5' },
  { name: 'Maximum Red Purple', hex: '#A63A79' },
  { name: 'Jazzberry Jam', hex: '#A50B5E' },
  { name: 'Eggplant', hex: '#614051' },
  { name: 'Magenta', hex: '#F653A6' },
  { name: 'Cerise', hex: '#DA3287' },
  { name: 'Wild Strawberry', hex: '#FF3399' },
  { name: 'Lavender (II)', hex: '#FBAED2' },
  { name: 'Cotton Candy', hex: '#FFB7D5' },
  { name: 'Carnation Pink', hex: '#FFA6C9' },
  { name: 'Violet-Red', hex: '#F7468A' },
  { name: 'Razzmatazz', hex: '#E30B5C' },
  { name: 'Pig Pink', hex: '#FDD7E4' },
  { name: 'Carmine', hex: '#E62E6B' },
  { name: 'Blush', hex: '#DB5079' },
  { name: 'Mauvelous', hex: '#F091A9' },
  { name: 'Salmon', hex: '#FF91A4' },
  { name: 'Middle Red Purple', hex: '#A55353' },
  { name: 'Mahogany', hex: '#CA3435' },
  { name: 'Melon', hex: '#FEBAAD' },
  { name: 'Pink Sherbert', hex: '#F7A38E' },
  { name: 'Burnt Sienna', hex: '#E97451' },
  { name: 'Brown', hex: '#AF593E' },
  { name: 'Sepia', hex: '#9E5B40' },
  { name: 'Fuzzy Wuzzy', hex: '#87421F' },
  { name: 'Beaver', hex: '#926F5B' },
  { name: 'Tumbleweed', hex: '#DEA681' },
  { name: 'Raw Sienna', hex: '#D27D46' },
  { name: 'Van Dyke Brown', hex: '#664228' },
  { name: 'Tan', hex: '#D99A6C' },
  { name: 'Desert Sand', hex: '#EDC9AF' },
  { name: 'Peach', hex: '#FFCBA4' },
  { name: 'Burnt Umber', hex: '#805533' },
  { name: 'Apricot', hex: '#FDD5B1' },
  { name: 'Almond', hex: '#EED9C4' },
  { name: 'Raw Umber', hex: '#665233' },
  { name: 'Shadow', hex: '#837050' },
  { name: 'Raw Sienna (I)', hex: '#E6BC5C' },
  { name: 'Timberwolf', hex: '#D9D6CF' },
  { name: 'Gold (I)', hex: '#92926E' },
  { name: 'Gold (II)', hex: '#E6BE8A' },
  { name: 'Silver', hex: '#C9C0BB' },
  { name: 'Copper', hex: '#DA8A67' },
  { name: 'Antique Brass', hex: '#C88A65' },
  { name: 'Black', hex: '#000000' },
  { name: 'Charcoal Gray', hex: '#736A62' },
  { name: 'Gray', hex: '#8B8680' },
  { name: 'Blue-Gray', hex: '#C8C8CD' },
  { name: 'Radical Red', hex: '#FF355E' },
  { name: 'Wild Watermelon', hex: '#FD5B78' },
  { name: 'Outrageous Orange', hex: '#FF6037' },
  { name: 'Atomic Tangerine', hex: '#FF9966' },
  { name: 'Neon Carrot', hex: '#FF9933' },
  { name: 'Sunglow', hex: '#FFCC33' },
  { name: 'Laser Lemon', hex: '#FFFF66' },
  { name: 'Unmellow Yellow', hex: '#FFFF66' },
  { name: 'Electric Lime', hex: '#CCFF00' },
  { name: "Screamin' Green", hex: '#66FF66' },
  { name: 'Magic Mint', hex: '#AAF0D1' },
  { name: 'Blizzard Blue', hex: '#50BFE6' },
  { name: 'Shocking Pink', hex: '#FF6EFF' },
  { name: 'Razzle Dazzle Rose', hex: '#EE34D2' },
  { name: 'Hot Magenta', hex: '#FF00CC' },
  { name: 'Purple Pizzazz', hex: '#FF00CC' },
  { name: 'Sizzling Red', hex: '#FF3855' },
  { name: 'Red Salsa', hex: '#FD3A4A' },
  { name: 'Tart Orange', hex: '#FB4D46' },
  { name: 'Orange Soda', hex: '#FA5B3D' },
  { name: 'Bright Yellow', hex: '#FFAA1D' },
  { name: 'Yellow Sunshine', hex: '#FFF700' },
  { name: 'Slimy Green', hex: '#299617' },
  { name: 'Green Lizard', hex: '#A7F432' },
  { name: 'Denim Blue', hex: '#2243B6' },
  { name: 'Blue Jeans', hex: '#5DADEC' },
  { name: 'Plump Purple', hex: '#5946B2' },
  { name: 'Purple Plum', hex: '#9C51B6' },
  { name: 'Sweet Brown', hex: '#A83731' },
  { name: 'Brown Sugar', hex: '#AF6E4D' },
  { name: 'Eerie Black', hex: '#1B1B1B' },
  { name: 'Black Shadows', hex: '#BFAFB2' },
  { name: 'Fiery Rose', hex: '#FF5470' },
  { name: 'Sizzling Sunrise', hex: '#FFDB00' },
  { name: 'Heat Wave', hex: '#FF7A00' },
  { name: 'Lemon Glacier', hex: '#FDFF00' },
  { name: 'Spring Frost', hex: '#87FF2A' },
  { name: 'Absolute Zero', hex: '#0048BA' },
  { name: 'Winter Sky', hex: '#FF007C' },
  { name: 'Frostbite', hex: '#E936A7' },
  { name: 'Alloy Orange', hex: '#C46210' },
  { name: "B'dazzled Blue", hex: '#2E5894' },
  { name: "Big Dip O' Ruby", hex: '#9C2542' },
  { name: 'Bittersweet Shimmer', hex: '#BF4F51' },
  { name: 'Blast Off Bronze', hex: '#A57164' },
  { name: 'Cyber Grape', hex: '#58427C' },
  { name: 'Deep Space Sparkle', hex: '#4A646C' },
  { name: 'Gold Fusion', hex: '#85754E' },
  { name: 'Illuminating Emerald', hex: '#319177' },
  { name: 'Metallic Seaweed', hex: '#0A7E8C' },
  { name: 'Metallic Sunburst', hex: '#9C7C38' },
  { name: 'Razzmic Berry', hex: '#8D4E85' },
  { name: 'Sheen Green', hex: '#8FD400' },
  { name: 'Shimmering Blush', hex: '#D98695' },
  { name: 'Sonic Silver', hex: '#757575' },
  { name: 'Steel Blue', hex: '#0081AB' },
  { name: 'Aztec Gold', hex: '#C39953' },
  { name: 'Burnished Brown', hex: '#A17A74' },
  { name: 'Cerulean Frost', hex: '#6D9BC3' },
  { name: 'Cinnamon Satin', hex: '#CD607E' },
  { name: 'Copper Penny', hex: '#AD6F69' },
  { name: 'Cosmic Cobalt', hex: '#2E2D88' },
  { name: 'Glossy Grape', hex: '#AB92B3' },
  { name: 'Granite Gray', hex: '#676767' },
  { name: 'Green Sheen', hex: '#6EAEA1' },
  { name: 'Lilac Luster', hex: '#AE98AA' },
  { name: 'Misty Moss', hex: '#BBB477' },
  { name: 'Mystic Maroon', hex: '#AD4379' },
  { name: 'Pearly Purple', hex: '#B768A2' },
  { name: 'Pewter Blue', hex: '#8BA8B7' },
  { name: 'Polished Pine', hex: '#5DA493' },
  { name: 'Quick Silver', hex: '#A6A6A6' },
  { name: 'Rose Dust', hex: '#9E5E6F' },
  { name: 'Rusty Red', hex: '#DA2C43' },
  { name: 'Shadow Blue', hex: '#778BA5' },
  { name: 'Shiny Shamrock', hex: '#5FA778' },
  { name: 'Steel Teal', hex: '#5F8A8B' },
  { name: 'Sugar Plum', hex: '#914E75' },
  { name: 'Twilight Lavender', hex: '#8A496B' },
  { name: 'Wintergreen Dream', hex: '#56887D' },
  { name: 'Baby Powder', hex: '#FEFEFA' },
  { name: 'Banana', hex: '#FFD12A' },
  { name: 'Blueberry', hex: '#4F86F7' },
  { name: 'Bubble Gum', hex: '#FFD3F8' },
  { name: 'Cedar Chest', hex: '#C95A49' },
  { name: 'Cherry', hex: '#DA2647' },
  { name: 'Chocolate', hex: '#BD8260' },
  { name: 'Coconut', hex: '#FEFEFE' },
  { name: 'Daffodil', hex: '#FFFF31' },
  { name: 'Dirt', hex: '#9B7653' },
  { name: 'Eucalyptus', hex: '#44D7A8' },
  { name: 'Fresh Air', hex: '#A6E7FF' },
  { name: 'Grape', hex: '#6F2DA8' },
  { name: 'Jelly Bean', hex: '#DA614E' },
  { name: 'Leather Jacket', hex: '#253529' },
  { name: 'Lemon', hex: '#FFFF38' },
  { name: 'Licorice', hex: '#1A1110' },
  { name: 'Lilac', hex: '#DB91EF' },
  { name: 'Lime', hex: '#B2F302' },
  { name: 'Lumber', hex: '#FFE4CD' },
  { name: 'New Car', hex: '#214FC6' },
  { name: 'Orange', hex: '#FF8866' },
  { name: 'Peach', hex: '#FFD0B9' },
  { name: 'Pine', hex: '#45A27D' },
  { name: 'Rose', hex: '#FF5050' },
  { name: 'Shampoo', hex: '#FFCFF1' },
  { name: 'Smoke', hex: '#738276' },
  { name: 'Soap', hex: '#CEC8EF' },
  { name: 'Strawberry', hex: '#FC5A8D' },
  { name: 'Tulip', hex: '#FF878D' },
  { name: 'Amethyst', hex: '#64609A' },
  { name: 'Citrine', hex: '#933709' },
  { name: 'Emerald', hex: '#14A989' },
  { name: 'Jade', hex: '#469A84' },
  { name: 'Jasper', hex: '#D05340' },
  { name: 'Lapis Lazuli', hex: '#436CB9' },
  { name: 'Malachite', hex: '#469496' },
  { name: 'Moonstone', hex: '#3AA8C1' },
  { name: 'Onyx', hex: '#353839' },
  { name: 'Peridot', hex: '#ABAD48' },
  { name: 'Pink Pearl', hex: '#B07080' },
  { name: 'Rose Quartz', hex: '#BD559C' },
  { name: 'Ruby', hex: '#AA4069' },
  { name: 'Sapphire', hex: '#2D5DA1' },
  { name: 'Smokey Topaz', hex: '#832A0D' },
  { name: "Tiger's Eye", hex: '#B56917' },
  { name: 'Alien Armpit', hex: '#84DE02' },
  { name: 'Big Foot Feet', hex: '#E88E5A' },
  { name: 'Booger Buster', hex: '#DDE26A' },
  { name: 'Dingy Dungeon', hex: '#C53151' },
  { name: 'Gargoyle Gas', hex: '#FFDF46' },
  { name: "Giant's Club", hex: '#B05C52' },
  { name: 'Magic Potion', hex: '#FF4466' },
  { name: "Mummy's Tomb", hex: '#828E84' },
  { name: 'Ogre Odor', hex: '#FD5240' },
  { name: 'Pixie Powder', hex: '#391285' },
  { name: 'Princess Perfume', hex: '#FF85CF' },
  { name: 'Sasquatch Socks', hex: '#FF4681' },
  { name: 'Sea Serpent', hex: '#4BC7CF' },
  { name: 'Smashed Pumpkin', hex: '#FF6D3A' },
  { name: 'Sunburnt Cyclops', hex: '#FF404C' },
  { name: 'Winter Wizard', hex: '#A0E6FF' },
  { name: 'Almond', hex: '#EFDECD' },
  {
    name: 'Antique Brass',
    hex: '#CD9575',
  },
  {
    hex: '#FDD9B5',
    name: 'Apricot',
  },
  {
    hex: '#78DBE2',
    name: 'Aquamarine',
  },
  {
    hex: '#87A96B',
    name: 'Asparagus',
  },
  {
    hex: '#FFA474',
    name: 'Atomic Tangerine',
  },
  {
    hex: '#FAE7B5',
    name: 'Banana Mania',
  },
  {
    hex: '#9F8170',
    name: 'Beaver',
  },
  {
    hex: '#FD7C6E',
    name: 'Bittersweet',
  },
  {
    hex: '#000000',
    name: 'Black',
  },
  {
    hex: '#ACE5EE',
    name: 'Blizzard Blue',
  },
  {
    hex: '#1F75FE',
    name: 'Blue',
  },
  {
    hex: '#A2A2D0',
    name: 'Blue Bell',
  },
  {
    hex: '#6699CC',
    name: 'Blue Gray',
  },
  {
    hex: '#0D98BA',
    name: 'Blue Green',
  },
  {
    hex: '#7366BD',
    name: 'Blue Violet',
  },
  {
    hex: '#DE5D83',
    name: 'Blush',
  },
  {
    hex: '#CB4154',
    name: 'Brick Red',
  },
  {
    hex: '#B4674D',
    name: 'Brown',
  },
  {
    hex: '#FF7F49',
    name: 'Burnt Orange',
  },
  {
    hex: '#EA7E5D',
    name: 'Burnt Sienna',
  },
  {
    hex: '#B0B7C6',
    name: 'Cadet Blue',
  },
  {
    hex: '#FFFF99',
    name: 'Canary',
  },
  {
    hex: '#1CD3A2',
    name: 'Caribbean Green',
  },
  {
    hex: '#FFAACC',
    name: 'Carnation Pink',
  },
  {
    hex: '#DD4492',
    name: 'Cerise',
  },
  {
    hex: '#1DACD6',
    name: 'Cerulean',
  },
  {
    hex: '#BC5D58',
    name: 'Chestnut',
  },
  {
    hex: '#DD9475',
    name: 'Copper',
  },
  {
    hex: '#9ACEEB',
    name: 'Cornflower',
  },
  {
    hex: '#FFBCD9',
    name: 'Cotton Candy',
  },
  {
    hex: '#FDDB6D',
    name: 'Dandelion',
    rgb: '(253, 219, 109)',
  },
  {
    hex: '#2B6CC4',
    name: 'Denim',
    rgb: '(43, 108, 196)',
  },
  {
    hex: '#EFCDB8',
    name: 'Desert Sand',
    rgb: '(239, 205, 184)',
  },
  {
    hex: '#6E5160',
    name: 'Eggplant',
    rgb: '(110, 81, 96)',
  },
  {
    hex: '#CEFF1D',
    name: 'Electric Lime',
    rgb: '(206, 255, 29)',
  },
  {
    hex: '#71BC78',
    name: 'Fern',
    rgb: '(113, 188, 120)',
  },
  {
    hex: '#6DAE81',
    name: 'Forest Green',
    rgb: '(109, 174, 129)',
  },
  {
    hex: '#C364C5',
    name: 'Fuchsia',
    rgb: '(195, 100, 197)',
  },
  {
    hex: '#CC6666',
    name: 'Fuzzy Wuzzy',
    rgb: '(204, 102, 102)',
  },
  {
    hex: '#E7C697',
    name: 'Gold',
    rgb: '(231, 198, 151)',
  },
  {
    hex: '#FCD975',
    name: 'Goldenrod',
    rgb: '(252, 217, 117)',
  },
  {
    hex: '#A8E4A0',
    name: 'Granny Smith Apple',
    rgb: '(168, 228, 160)',
  },
  {
    hex: '#95918C',
    name: 'Gray',
    rgb: '(149, 145, 140)',
  },
  {
    hex: '#1CAC78',
    name: 'Green',
    rgb: '(28, 172, 120)',
  },
  {
    hex: '#1164B4',
    name: 'Green Blue',
    rgb: '(17, 100, 180)',
  },
  {
    hex: '#F0E891',
    name: 'Green Yellow',
    rgb: '(240, 232, 145)',
  },
  {
    hex: '#FF1DCE',
    name: 'Hot Magenta',
    rgb: '(255, 29, 206)',
  },
  {
    hex: '#B2EC5D',
    name: 'Inchworm',
    rgb: '(178, 236, 93)',
  },
  {
    hex: '#5D76CB',
    name: 'Indigo',
    rgb: '(93, 118, 203)',
  },
  {
    hex: '#CA3767',
    name: 'Jazzberry Jam',
    rgb: '(202, 55, 103)',
  },
  {
    hex: '#3BB08F',
    name: 'Jungle Green',
    rgb: '(59, 176, 143)',
  },
  {
    hex: '#FEFE22',
    name: 'Laser Lemon',
    rgb: '(254, 254, 34)',
  },
  {
    hex: '#FCB4D5',
    name: 'Lavender',
    rgb: '(252, 180, 213)',
  },
  {
    hex: '#FFF44F',
    name: 'Lemon Yellow',
    rgb: '(255, 244, 79)',
  },
  {
    hex: '#FFBD88',
    name: 'Macaroni and Cheese',
    rgb: '(255, 189, 136)',
  },
  {
    hex: '#F664AF',
    name: 'Magenta',
    rgb: '(246, 100, 175)',
  },
  {
    hex: '#AAF0D1',
    name: 'Magic Mint',
    rgb: '(170, 240, 209)',
  },
  {
    hex: '#CD4A4C',
    name: 'Mahogany',
    rgb: '(205, 74, 76)',
  },
  {
    hex: '#EDD19C',
    name: 'Maize',
    rgb: '(237, 209, 156)',
  },
  {
    hex: '#979AAA',
    name: 'Manatee',
    rgb: '(151, 154, 170)',
  },
  {
    hex: '#FF8243',
    name: 'Mango Tango',
    rgb: '(255, 130, 67)',
  },
  {
    hex: '#C8385A',
    name: 'Maroon',
    rgb: '(200, 56, 90)',
  },
  {
    hex: '#EF98AA',
    name: 'Mauvelous',
    rgb: '(239, 152, 170)',
  },
  {
    hex: '#FDBCB4',
    name: 'Melon',
    rgb: '(253, 188, 180)',
  },
  {
    hex: '#1A4876',
    name: 'Midnight Blue',
    rgb: '(26, 72, 118)',
  },
  {
    hex: '#30BA8F',
    name: 'Mountain Meadow',
    rgb: '(48, 186, 143)',
  },
  {
    hex: '#C54B8C',
    name: 'Mulberry',
    rgb: '(197, 75, 140)',
  },
  {
    hex: '#1974D2',
    name: 'Navy Blue',
    rgb: '(25, 116, 210)',
  },
  {
    hex: '#FFA343',
    name: 'Neon Carrot',
    rgb: '(255, 163, 67)',
  },
  {
    hex: '#BAB86C',
    name: 'Olive Green',
    rgb: '(186, 184, 108)',
  },
  {
    hex: '#FF7538',
    name: 'Orange',
    rgb: '(255, 117, 56)',
  },
  {
    hex: '#FF2B2B',
    name: 'Orange Red',
    rgb: '(255, 43, 43)',
  },
  {
    hex: '#F8D568',
    name: 'Orange Yellow',
    rgb: '(248, 213, 104)',
  },
  {
    hex: '#E6A8D7',
    name: 'Orchid',
    rgb: '(230, 168, 215)',
  },
  {
    hex: '#414A4C',
    name: 'Outer Space',
    rgb: '(65, 74, 76)',
  },
  {
    hex: '#FF6E4A',
    name: 'Outrageous Orange',
    rgb: '(255, 110, 74)',
  },
  {
    hex: '#1CA9C9',
    name: 'Pacific Blue',
    rgb: '(28, 169, 201)',
  },
  {
    hex: '#FFCFAB',
    name: 'Peach',
    rgb: '(255, 207, 171)',
  },
  {
    hex: '#C5D0E6',
    name: 'Periwinkle',
    rgb: '(197, 208, 230)',
  },
  {
    hex: '#FDDDE6',
    name: 'Piggy Pink',
    rgb: '(253, 221, 230)',
  },
  {
    hex: '#158078',
    name: 'Pine Green',
    rgb: '(21, 128, 120)',
  },
  {
    hex: '#FC74FD',
    name: 'Pink Flamingo',
    rgb: '(252, 116, 253)',
  },
  {
    hex: '#F78FA7',
    name: 'Pink Sherbet',
    rgb: '(247, 143, 167)',
  },
  {
    hex: '#8E4585',
    name: 'Plum',
    rgb: '(142, 69, 133)',
  },
  {
    hex: '#7442C8',
    name: 'Purple Heart',
    rgb: '(116, 66, 200)',
  },
  {
    hex: '#9D81BA',
    name: "Purple Mountain's Majesty",
    rgb: '(157, 129, 186)',
  },
  {
    hex: '#FE4EDA',
    name: 'Purple Pizzazz',
    rgb: '(254, 78, 218)',
  },
  {
    hex: '#FF496C',
    name: 'Radical Red',
    rgb: '(255, 73, 108)',
  },
  {
    hex: '#D68A59',
    name: 'Raw Sienna',
    rgb: '(214, 138, 89)',
  },
  {
    hex: '#714B23',
    name: 'Raw Umber',
    rgb: '(113, 75, 35)',
  },
  {
    hex: '#FF48D0',
    name: 'Razzle Dazzle Rose',
    rgb: '(255, 72, 208)',
  },
  {
    hex: '#E3256B',
    name: 'Razzmatazz',
    rgb: '(227, 37, 107)',
  },
  {
    hex: '#EE204D',
    name: 'Red',
    rgb: '(238,32 ,77 )',
  },
  {
    hex: '#FF5349',
    name: 'Red Orange',
    rgb: '(255, 83, 73)',
  },
  {
    hex: '#C0448F',
    name: 'Red Violet',
    rgb: '(192, 68, 143)',
  },
  {
    hex: '#1FCECB',
    name: "Robin's Egg Blue",
    rgb: '(31, 206, 203)',
  },
  {
    hex: '#7851A9',
    name: 'Royal Purple',
    rgb: '(120, 81, 169)',
  },
  {
    hex: '#FF9BAA',
    name: 'Salmon',
    rgb: '(255, 155, 170)',
  },
  {
    hex: '#FC2847',
    name: 'Scarlet',
    rgb: '(252, 40, 71)',
  },
  {
    hex: '#76FF7A',
    name: "Screamin' Green",
    rgb: '(118, 255, 122)',
  },
  {
    hex: '#9FE2BF',
    name: 'Sea Green',
    rgb: '(159, 226, 191)',
  },
  {
    hex: '#A5694F',
    name: 'Sepia',
    rgb: '(165, 105, 79)',
  },
  {
    hex: '#8A795D',
    name: 'Shadow',
    rgb: '(138, 121, 93)',
  },
  {
    hex: '#45CEA2',
    name: 'Shamrock',
    rgb: '(69, 206, 162)',
  },
  {
    hex: '#FB7EFD',
    name: 'Shocking Pink',
    rgb: '(251, 126, 253)',
  },
  {
    hex: '#CDC5C2',
    name: 'Silver',
    rgb: '(205, 197, 194)',
  },
  {
    hex: '#80DAEB',
    name: 'Sky Blue',
    rgb: '(128, 218, 235)',
  },
  {
    hex: '#ECEABE',
    name: 'Spring Green',
    rgb: '(236, 234, 190)',
  },
  {
    hex: '#FFCF48',
    name: 'Sunglow',
    rgb: '(255, 207, 72)',
  },
  {
    hex: '#FD5E53',
    name: 'Sunset Orange',
    rgb: '(253, 94, 83)',
  },
  {
    hex: '#FAA76C',
    name: 'Tan',
    rgb: '(250, 167, 108)',
  },
  {
    hex: '#18A7B5',
    name: 'Teal Blue',
    rgb: '(24, 167, 181)',
  },
  {
    hex: '#EBC7DF',
    name: 'Thistle',
    rgb: '(235, 199, 223)',
  },
  {
    hex: '#FC89AC',
    name: 'Tickle Me Pink',
    rgb: '(252, 137, 172)',
  },
  {
    hex: '#DBD7D2',
    name: 'Timberwolf',
    rgb: '(219, 215, 210)',
  },
  {
    hex: '#17806D',
    name: 'Tropical Rain Forest',
    rgb: '(23, 128, 109)',
  },
  {
    hex: '#DEAA88',
    name: 'Tumbleweed',
    rgb: '(222, 170, 136)',
  },
  {
    hex: '#77DDE7',
    name: 'Turquoise Blue',
    rgb: '(119, 221, 231)',
  },
  {
    hex: '#FFFF66',
    name: 'Unmellow Yellow',
    rgb: '(255, 255, 102)',
  },
  {
    hex: '#926EAE',
    name: 'Violet (Purple)',
    rgb: '(146, 110, 174)',
  },
  {
    hex: '#324AB2',
    name: 'Violet Blue',
    rgb: '(50, 74, 178)',
  },
  {
    hex: '#F75394',
    name: 'Violet Red',
    rgb: '(247, 83, 148)',
  },
  {
    hex: '#FFA089',
    name: 'Vivid Tangerine',
    rgb: '(255, 160, 137)',
  },
  {
    hex: '#8F509D',
    name: 'Vivid Violet',
    rgb: '(143, 80, 157)',
  },
  {
    hex: '#FFFFFF',
    name: 'White',
    rgb: '(255, 255, 255)',
  },
  {
    hex: '#A2ADD0',
    name: 'Wild Blue Yonder',
    rgb: '(162, 173, 208)',
  },
  {
    hex: '#FF43A4',
    name: 'Wild Strawberry',
    rgb: '(255, 67, 164)',
  },
  {
    hex: '#FC6C85',
    name: 'Wild Watermelon',
    rgb: '(252, 108, 133)',
  },
  {
    hex: '#CDA4DE',
    name: 'Wisteria',
    rgb: '(205, 164, 222)',
  },
  {
    hex: '#FCE883',
    name: 'Yellow',
    rgb: '(252, 232, 131)',
  },
  {
    hex: '#C5E384',
    name: 'Yellow Green',
    rgb: '(197, 227, 132)',
  },
  {
    hex: '#FFAE42',
    name: 'Yellow Orange',
    rgb: '(255, 174, 66)',
  },
];

//to get random colors from the list.
function newColor() {
  let ran = Math.floor(Math.random() * crayolaColors.length);
  let pushedColor = {};
  pushedColor.hex = crayolaColors[ran].hex;
  pushedColor.name = crayolaColors[ran].name;
  colorList.push(pushedColor);
}

//the actual effect on Dom
function theAction() {
  let newColorHex = colorList[index].hex;
  let newColorName = colorList[index].name;
  color.style.backgroundColor = `${newColorHex}`;
  text.textContent = `${newColorName}`;
  subtext.textContent = `${newColorHex}`;
  colorChange(newColorHex);
}

function moving(kee) {
  if (kee == 'd') {
    if ((nowColor = colorList[colorList.length - 1].hex)) {
      index++;
      newColor();
      theAction();
      console.log(index);
    } else {
      theAction();
      console.log(index);
    }
  }
  if (kee == 'a') {
    if (nowColor == colorList[0].hex) {
      theAction();
      console.log(index);
    } else if (index > 0) {
      index--;
      theAction();
      console.log(index);
    } else return;
  }
}

//Events.
//(keypress)
document.addEventListener('keypress', function (e) {
  let nowColor = color.style.background;
  moving(e.key);
});
//(click/tap)
right.addEventListener('click', function () {
  let kee = 'd';
  moving(kee);
});
left.addEventListener('click', function () {
  let kee = 'a';
  moving(kee);
});

//detects color bright or not
function colorChange(c) {
  var c = c.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 160) {
    text.style.color = 'white';
    text.style.opacity = '0.9';
    subtext.style.color = 'white';
    subtext.style.opacity = '0.9';
  } else {
    text.style.color = 'black';
    text.style.opacity = '0.6';
    subtext.style.color = 'black';
    subtext.style.opacity = '0.6';
  }
}
