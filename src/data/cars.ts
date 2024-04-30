import { carType } from '../types/typing';

export const products: carType[] = [
    {
       id: 'qmmly5nbkzrid563wpn',
       name: 'Promaster Rapi',
       brand: 'Dodge',
       year: 2020,
       color: 'blanco',
       description: '',
       doors: 4,
       images: [
        'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714452399/principal/promaster/qbfolzxt8o6rdhsnpplz.jpg',
        'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714452400/principal/promaster/r4wfmslxlwigxkzvbzel.jpg',
        'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714452400/principal/promaster/vq6pnycgym1tza5nybmx.jpg',
        'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714452401/principal/promaster/yt3kevyamugnm3pw6ifq.jpg',
        'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714452401/principal/promaster/x6s1dl4a9bzkp6kxynig.jpg'
       ],
       mileage: 99562,
       price:  198000,
       mortage: 39600,
       type: 'carga',
       transmission: 'estandar',
       extra: [
        'Motor 1.4L',
        'Vestiduras negras',
        'AM/FM BLUETOOTH',
        'Bolsas de aire frontales'
       ]
    },
    {
        id: 'qmmlylqqsus02vlx9f',
        name: 'Aveo LS',
        brand: 'Chevrolet',
        year: 2019,
        color: 'blanco',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714453316/principal/aveo/lo2exnyswnfdsazb91ik.jpg'
        ],
        mileage: 72500,
        price: 197000,
        mortage: 38000,
        type: 'hatchback',
        transmission: 'estandar',
        extra: [
            'Motor 1.5L',
            'Vestiduras negras',
            'AM/FM CD, BLUETOOHT',
            'Bolsas de aire frontales'
        ],
     },
     {
        id: 'qmmm1hhi4jg323h0ff6',
        name: 'Avanza',
        brand: 'Toyota',
        year: 2019,
        color: 'oro',
        description: '',
        doors: 5,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714453355/principal/avanza/ffsgmbv2spdaqc81vdya.jpg'
        ],
        mileage: 63870,
        price: 230000,
        mortage: 46000,
        type: 'minivan',
        transmission: 'estandar',
        extra: [
            'Motor 1.4L',
            'Rin 14 de acero',
            'Manual 5 V',
            'AM/FM CD, BLUETOOHT',
            'Bolsas de aire frontales'
        ]
    },
    {
        id: 'qmmm1p1r7bqn6xao66m',
        name: 'Versa Exclusive',
        brand: 'Nissan',
        year: 2019,
        color: 'plata',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714453435/principal/versa/fpwtubqday4xa88ymwmd.jpg'
        ],
        mileage: 36870,
        price: 238000,
        mortage: 47600,
        type: 'sedan',
        transmission: 'automatica',
        extra: [
            'Motor 1.6L',
            'Rin 16 aluminio',
            'Automático',
            'AM/FM CD, BLUETOOHT',
            'Bolsas de aire frontales y laterales'
        ]
    }
]