import carLogoImage from '../../../../assets/img/car_manufacturer.png';

interface CarManufacturerProps {
    carId: number;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

// Size classes for the car logo
const sizeClasses = {
    sm: 'text-[1em]',
    md: 'text-[1.5em]',
    lg: 'text-[2em]',
};

const carLogoPositions: Record<string, { x: string; y: number }> = {
    
    unknown: { x: '0', y: 0 },
    iracing: { x: '0', y: 1 },
    skipbarber: { x: '0', y: 2 },
    sk: { x: '0', y: 3 },
    pontiac: { x: '0', y: 4 },
    promazda: { x: '0', y: 5 },
    legendsford: { x: '0', y: 6 },
    chevrolet: { x: '0', y: 7 },
    radical: { x: '0', y: 8 },
    silvercrown: { x: '0', y: 9 },
    riley: { x: '0', y: 10 },
    scca: { x: '0', y: 11 },
    lotus: { x: '0', y: 12 },
    vw: { x: '0', y: 13 },
    ford: { x: '0', y: 14 },
    indy: { x: '0', y: 15 },
    williams: { x: '0', y: 16 },
    mazda: { x: '0', y: 17 },
    street: { x: '0', y: 18 },
    hpd: { x: '0', y: 19 },
    cadillac: { x: '0', y: 20 },
    mclaren: { x: '0', y: 21 },
    kia: { x: '0', y: 22 },
    ruf: { x: '0', y: 23 },
    superlate: { x: '0', y: 24 },
    bmw: { x: '0', y: 25 },
    toyota: { x: '0', y: 26 },
    holden: { x: '0', y: 27 },
    aston: { x: '0', y: 28 },
    mercedes: { x: '0', y: 29 },
    audi: { x: '0', y: 30 },
    renaultf2: { x: '0', y: 31 },
    nissan: { x: '0', y: 32 },
    dirt: { x: '0', y: 33 },
    dirtsuper: { x: '0', y: 34 },
    dirt410: { x: '0', y: 35 },
    dirt360: { x: '0', y: 36 },
    porsche: { x: '0', y: 37 },
    ferrari: { x: '0', y: 38 },
    midget: { x: '0', y: 39 },
    subaru: { x: '0', y: 40 },
    truck: { x: '0', y: 41 },
    renaultf3: { x: '0', y: 42 },
    dallara: { x: '0', y: 43 },
    indy2000: { x: '0', y: 44 },
    usf2000: { x: '0', y: 45 },
    dirtBigBlock: { x: '0', y: 46 },
    lamborghini: { x: '0', y: 47 },
    vee: { x: '0', y: 48 },
    hyundai: { x: '0', y: 49 },
    honda: { x: '0', y: 50 },
    latemodel: { x: '0', y: 51 },
    buick: { x: '0', y: 52 },
    renault: { x: '0', y: 53 },
    rayff1600: { x: '0', y: 54 },
    acura: { x: '0', y: 55 },
    ligier: { x: '0', y: 56 },
    superformula: { x: '0', y: 57 },
    superformulalight: { x: '0', y: 58 },
    srx: { x: '0', y: 59 },
};

// Cars models
export const CAR_ID_TO_CAR_MANUFACTURER: Record<number, string> = {
    1: 'skipbarber', // Skip Barber Formula 2000
    2: 'sk', // Modified - SK
    3: 'pontiac', // Pontiac Solstice
    4: 'promazda', // [Legacy] Pro Mazda
    5: 'legendsford', // Legends Ford '34 Coupe
    10: 'pontiac', // Pontiac Solstice - Rookie
    11: 'legendsford', // [Retired] Legends Ford '34 Coupe - Rookie
    12: 'chevrolet', // [Retired] Chevrolet Monte Carlo SS
    13: 'radical', // Radical SR8
    18: 'silvercrown', // Silver Crown
    20: 'chevrolet', // [Legacy] NASCAR Truck Chevrolet Silverado - 2008
    21: 'riley', // [Legacy] Riley MkXX Daytona Prototype - 2008
    22: 'chevrolet', // [Legacy] NASCAR Cup Chevrolet Impala COT - 2009
    23: 'scca', // SCCA Spec Racer Ford
    24: 'chevrolet', // [Legacy] ARCA Menards Chevrolet Impala
    25: 'lotus', // Lotus 79
    26: 'chevrolet', // Chevrolet Corvette C6.R GT1
    27: 'vw', // VW Jetta TDI Cup
    28: 'ford', // [Legacy] V8 Supercar Ford Falcon - 2009
    29: 'indy', // [Legacy] Dallara IR-05
    30: 'ford', // Ford Mustang FR500S
    31: 'sk', // Modified - NASCAR Whelen Tour
    33: 'williams', // Williams-Toyota FW31
    34: 'mazda', // [Legacy] Mazda MX-5 Cup - 2010
    35: 'mazda', // [Legacy] Mazda MX-5 Roadster - 2010
    36: 'street', // Street Stock - Panther C1
    37: 'iracing', // Sprint Car
    38: 'chevrolet', // [Legacy] NASCAR Nationwide Chevrolet Impala - 2012
    39: 'hpd', // HPD ARX-01c
    40: 'ford', // Ford GT GT2
    41: 'cadillac', // Cadillac CTS-V Racecar
    42: 'lotus', // Lotus 49
    43: 'mclaren', // [Legacy] McLaren MP4-12C GT3
    44: 'kia', // Kia Optima
    45: 'chevrolet', // [Legacy] NASCAR Cup Chevrolet SS - 2013
    46: 'ford', // [Legacy] NASCAR Cup Ford Fusion - 2016
    48: 'ruf', // Ruf RT 12R AWD
    49: 'ruf', // Ruf RT 12R RWD
    50: 'ruf', // Ruf RT 12R Track
    51: 'ford', // [Legacy] NASCAR Xfinity Ford Mustang - 2016
    52: 'ruf', // Ruf RT 12R C-Spec
    54: 'superlate', // Super Late Model
    55: 'bmw', // [Legacy] BMW Z4 GT3
    56: 'toyota', // NASCAR Cup Series Toyota Camry
    57: 'indy', // [Legacy] Dallara DW12
    58: 'chevrolet', // [Legacy] NASCAR Xfinity Chevrolet Camaro - 2014
    59: 'ford', // Ford GT GT3
    60: 'holden', // [Legacy] V8 Supercar Holden VF Commodore - 2014
    61: 'ford', // [Legacy] V8 Supercar Ford FG Falcon - 2014
    62: 'toyota', // [Retired] NASCAR Gander Outdoors Toyota Tundra
    63: 'chevrolet', // [Retired] NASCAR Trucks Series Chevrolet Silverado - 2018
    64: 'aston', // Aston Martin DBR9 GT1
    67: 'mazda', // Global Mazda MX-5 Cup
    69: 'toyota', // [Legacy] NASCAR Xfinity Toyota Camry - 2015
    70: 'chevrolet', // Chevrolet Corvette C7 Daytona Prototype
    71: 'mclaren', // McLaren MP4-30
    72: 'mercedes', // [Legacy] Mercedes-AMG GT3
    73: 'audi', // [Legacy] Audi R8 LMS GT3
    74: 'renaultf2', // Formula Renault 2.0
    76: 'audi', // Audi 90 GTO
    77: 'nissan', // Nissan GTP ZX-T
    78: 'dirt', // Dirt Late Model - Limited
    79: 'dirt', // Dirt Street Stock
    80: 'dirt', // Dirt Sprint Car - 305
    81: 'ford', // Ford Fiesta RS WRC
    82: 'legendsford', // Dirt Legends Ford '34 Coupe
    83: 'dirt', // Dirt Late Model - Pro
    84: 'dirtsuper', // Dirt Late Model - Super
    85: 'dirt360', // Dirt Sprint Car - 360
    86: 'dirt410', // Dirt Sprint Car - 410
    87: 'dirt', // Dirt Sprint Car - 360 Non-Winged
    88: 'porsche', // [Legacy] Porsche 911 GT3 Cup (991)
    89: 'dirt', // Dirt Sprint Car - 410 Non-Winged
    91: 'vw', // VW Beetle
    92: 'ford', // Ford GTE
    93: 'ferrari', // Ferrari 488 GTE
    94: 'ferrari', // [Legacy] Ferrari 488 GT3
    95: 'dirt', // Dirt UMP Modified
    96: 'midget', // Dirt Midget
    98: 'audi', // Audi R18
    99: 'indy', // Dallara IR18
    100: 'porsche', // Porsche 919
    101: 'subaru', // Subaru WRX STI
    102: 'porsche', // Porsche 911 RSR
    103: 'chevrolet', // NASCAR Cup Series Chevrolet Camaro ZL1
    104: 'truck', // Lucas Oil Off Road Pro 2 Truck
    105: 'renaultf3', // Formula Renault 3.5
    106: 'dallara', // Dallara F3
    107: 'truck', // Lucas Oil Off Road Pro 4 Truck
    109: 'bmw', // BMW M8 GTE
    110: 'ford', // NASCAR Cup Series Ford Mustang
    111: 'chevrolet', // NASCAR Truck Chevrolet Silverado
    112: 'audi', // Audi RS 3 LMS TCR
    113: 'truck', // Lucas Oil Off Road Pro 2 Lite
    114: 'chevrolet', // NASCAR XFINITY Chevrolet Camaro
    115: 'ford', // NASCAR XFINITY Ford Mustang
    116: 'toyota', // NASCAR XFINITY Toyota Supra
    117: 'holden', // [Legacy] Supercars Holden ZB Commodore
    118: 'ford', // [Legacy] Supercars Ford Mustang GT
    119: 'porsche', // Porsche 718 Cayman GT4 Clubsport MR
    120: 'indy2000', // Indy Pro 2000 PM-18
    121: 'usf2000', // USF 2000
    122: 'bmw', // BMW M4 F82 GT4 - 2018
    123: 'ford', // NASCAR Truck Ford F150
    124: 'chevrolet', // NASCAR Legends Chevrolet Monte Carlo - 1987
    125: 'ford', // NASCAR Legends Ford Thunderbird - 1987
    127: 'chevrolet', // Chevrolet Corvette C8.R GTE
    128: 'dallara', // Dallara P217
    129: 'dallara', // Dallara iR-01
    131: 'dirtBigBlock', // Dirt Big Block Modified
    132: 'bmw', // BMW M4 GT3 EVO
    133: 'lamborghini', // Lamborghini Huracán GT3 EVO
    134: 'dirtBigBlock', // Dirt 358 Modified
    135: 'mclaren', // McLaren 570S GT4
    137: 'porsche', // [Legacy] Porsche 911 GT3 R
    138: 'vw', // VW Beetle - Lite
    139: 'chevrolet', // NASCAR Cup Series Next Gen Chevrolet Camaro ZL1
    140: 'ford', // NASCAR Cup Series Next Gen Ford Mustang
    141: 'toyota', // NASCAR Cup Series Next Gen Toyota Camry
    142: 'vee', // Formula Vee
    143: 'porsche', // Porsche 911 GT3 Cup (992)
    144: 'ferrari', // Ferrari 488 GT3 Evo 2020
    145: 'mercedes', // Mercedes-AMG W12 E Performance
    146: 'hyundai', // Hyundai Elantra N TCR
    147: 'honda', // Honda Civic Type R TCR
    148: 'iracing', // FIA F4
    149: 'radical', // Radical SR10
    150: 'aston', // Aston Martin Vantage GT4
    151: 'chevrolet', // Stock Car Brasil Chevrolet Cruze
    152: 'toyota', // Stock Car Brasil Toyota Corolla
    153: 'hyundai', // Hyundai Veloster N TCR
    154: 'buick', // NASCAR Legends Buick LeSabre - 1987
    155: 'toyota', // NASCAR Truck Toyota Tundra TRD Pro
    156: 'mercedes', // Mercedes-AMG GT3 2020
    157: 'mercedes', // Mercedes-AMG GT4
    158: 'porsche', // Porsche Mission R
    159: 'bmw', // BMW M Hybrid V8
    160: 'toyota', // Toyota GR86
    161: 'mercedes', // Mercedes-AMG W13 E Performance
    162: 'renault', // Renault Clio
    163: 'rayff1600', // Ray FF1600
    164: 'latemodel', // Late Model Stock
    165: 'ligier', // Ligier JS P320
    167: 'chevrolet', // [Legacy] Gen 4 Cup
    168: 'cadillac', // Cadillac V-Series.R GTP
    169: 'porsche', // Porsche 911 GT3 R (992)
    170: 'acura', // Acura ARX-06 GTP
    171: 'superformula', // Super Formula SF23 - Toyota
    172: 'superformula', // Super Formula SF23 - Honda
    173: 'ferrari', // Ferrari 296 GT3
    174: 'porsche', // Porsche 963 GTP
    175: 'pontiac', // NASCAR Legends Pontiac Grand Prix - 1987
    176: 'audi', // Audi R8 LMS EVO II GT3
    178: 'superformulalight', // Super Formula Lights
    179: 'srx', // SRX
    180: 'dirt', // Dirt Micro Sprint Car - Winged
    181: 'dirt', // Dirt Micro Sprint Car - Non-Winged
    182: 'dirt', // Dirt Outlaw Micro Sprint Car - Winged
    183: 'dirt', // Dirt Outlaw Micro Sprint Car - Non-Winged
    184: 'chevrolet', // Chevrolet Corvette Z06 GT3.R
    185: 'ford', // Ford Mustang GT3
    186: 'street', // Street Stock - Casino M2
    187: 'street', // Street Stock - Eagle T3
    188: 'mclaren', // McLaren 720S GT3 EVO
    189: 'bmw', // BMW M4 G82 GT4 Evo
    190: 'ford', // Supercars Ford Mustang Gen 3
    191: 'iracing', // Mini Stock
    192: 'chevrolet', // Supercars Chevrolet Camaro Gen 3
    193: 'iracing', // Dirt Mini Stock
    194: 'acura', // Acura NSX GT3 EVO 22
    195: 'bmw', // BMW M2 CS Racing
    196: 'ferrari', // Ferrari 499P
    198: 'chevrolet', // ARCA Chevrolet SS
    199: 'ford', // ARCA Ford Mustang
    200: 'toyota', // ARCA Toyota Camry
    201: 'chevrolet', // Gen 4 Chevrolet Monte Carlo - 2003
    202: 'ford', // Gen 4 Ford Taurus - 2003
    203: 'ferrari', // Ferrari 296 Challenge
    204: 'ford', // Ford Mustang GT4
    205: 'indy', // Dallara IL-15
    206: 'aston', // Aston Martin Vantage GT3 EVO
};

export const CarManufacturer = ({
    carId,
    size = 'md',
}: CarManufacturerProps) => {
    const imagesize = 7680; // pixel height of sprite sheet
    const spriteHeight = 128; // pixel height of sprites
    const imagescale = (imagesize - spriteHeight) / 100;
    const carManufacturer = CAR_ID_TO_CAR_MANUFACTURER[carId] || 'unknown';

    if (carId < 0 || !Object.keys(carLogoPositions).includes(carManufacturer)) {
        return null;
    }

    return (
        <span
            className={`inline-block w-[1em] h-[1em] bg-no-repeat bg-size-[100%_auto] ${sizeClasses[size]}`}
            style={{
                backgroundImage: `url(${carLogoImage})`,
                backgroundPosition: `${carLogoPositions[carManufacturer].x} ${(carLogoPositions[carManufacturer].y / imagescale * spriteHeight).toString() + '%'}`,
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform',
            }}
        />
    );
};
