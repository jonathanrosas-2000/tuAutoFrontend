import { carType } from '../types/typing';

export const products: carType[] = [
    {
       id: 'qmmly5nbkzrid563wpn',
       name: 'Promaster Rapi',
       brand: 'Dodge',
       year: 2020,
       color: 'blanco',
       description: 'El Dodge Promaster Rapi del año 2020 es un vehículo de carga versátil y confiable, ideal para aquellos que buscan eficiencia y capacidad en sus operaciones.\n\nEste modelo en particular se presenta en un elegante color blanco que resalta su diseño moderno y profesional.Equipado con un motor eficiente de 1.4L, el Promaster Rapi ofrece un rendimiento óptimo para las tareas diarias de transporte. Sus cuatro puertas facilitan el acceso al espacioso interior, el cual está complementado por vestiduras de color negro que añaden un toque de sofisticación.\n\nEn términos de tecnología, este vehículo cuenta con un sistema de entretenimiento AM/FM con conectividad Bluetooth, proporcionando comodidad y conectividad mientras estás en movimiento. Además, para garantizar la seguridad de sus ocupantes, incorpora bolsas de aire frontales.\n\nCon una considerable autonomía, demostrada por su kilometraje de 99,562 kilómetros, el Dodge Promaster Rapi representa una opción sólida para quienes buscan un vehículo de carga confiable. Su transmisión estándar ofrece un manejo preciso y eficiente.',
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
    },
    {
        id: 'qmoa20qbnrx8rcg43nl',
        name: 'March Active',
        brand: 'Nissan',
        year: 2018,
        color: 'blanco',
        description: '',
        doors: 5,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540461/principal/march/qyol6hnfp6ecramdjtaq.jpg'
        ],
        mileage: 78325,
        price: 148000,
        mortage: 29600,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.6L',
            'Rin 16 de acero',
            'AM/FM CD',
            'Bolsas de aire frontales',
        ]
    },
    {
        id: 'qmoa8m4dudtgqsas8u',
        name: 'Spark NG',
        brand: 'Chevrolet',
        year: 2017,
        color: 'blanco',
        description: '',
        doors: 5,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540531/principal/spark/mjojvurfzldeha0tlrzt.jpg'
        ],
        mileage: 100254,
        price: 155000,
        mortage: 31000,
        type: 'micro',
        transmission: 'estandar',
        extra: [
            'Motor 1.4L',
            'Rin 14 de acero',
            'AM/FM BLUETOOTH',
            'Bolsas de aire frontales',
        ]
    },
    {
        id: 'qmoadj0wojh3ej3em4',
        name: 'Sonic LT',
        brand: 'Chevrolet',
        year: 2016,
        color: 'blanco',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540631/principal/SonicLT/o5iqdt8uf4qzy37jzmbi.jpg'
        ],
        mileage: 93218,
        price: 136000,
        mortage: 27200,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.6L',
            'Rin 15 de acero',
            'AM/FM/ BLUETOOTH',
            'Bolsas de aire frontales',
            'Vestiduras Vicolor Cafe y Negro'
        ]
    },
    {
        id: 'qmoahmddd13dpya0od',
        name: 'Gol Imotion',
        brand: 'Volkswagen',
        year: 2017,
        color: 'blanco',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540704/principal/GolImotion/guywkejf7ijnybrd1yn8.jpg'
        ],
        mileage: 110625,
        price: 156000,
        mortage: 31200,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.6L',
            'Rin 14 de acero',
            'AM/FM/ BLUETOOTH',
            'Bolsas de aire frontales',
        ]
    },
    {
        id: 'qmoakbfxv5h1xdnxiwf',
        name: 'Gol Sedan',
        brand: 'Volkswagen',
        year: 2013,
        color: 'blanco',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540777/principal/GolSedan/gcltea4ucwoqa7eo1bxh.jpg'
        ],
        mileage: 89320,
        price: 115000,
        mortage: 23000,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.6L',
            'Rin 14 de acero',
            'AM/FM CD/BLUETOOTH',
            'Bolsas de aire frontales',
        ]
    },
    {
        id: 'qmoam7cvzvjfz9cndp',
        name: 'Kwid',
        brand: 'Renault',
        year: 2022,
        color: 'plata',
        description: '',
        doors: 5,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540831/principal/Kwid/poedfltyilmmu6b0ysdu.jpg'
        ],
        mileage: 31712,
        price: 195000,
        mortage: 39000,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.2L',
            'Rin 14 de acero',
            'AM/FM BLUETOOTH',
            'Bolsas de aire frontales',
        ]
    },
    {
        id: 'qmoapd6szqyzrxp02ph',
        name: 'Figo Impulse',
        brand: 'Ford',
        year: 2017,
        color: 'plata',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540899/principal/FordImpulse/yk8anvzjujzfsroygwcl.jpg'
        ],
        mileage: 110524,
        price: 158000,
        mortage: 31600,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.5L',
            'Rin 14 de acero',
            'AM/FM /CD/BLUETOTH',
            'Bolsas de aire frontales',
        ]
    },
    {
        id: 'qmoar84rpdxqvbriqve',
        name: 'City LX',
        brand: 'Honda',
        year: 2016,
        color: 'plata',
        description: '',
        doors: 4,
        images: [
            'https://res.cloudinary.com/ddbxdrsqz/image/upload/v1714540953/principal/CityLX/fu0oydqa8nz9dhf90qsu.jpg'
        ],
        mileage: 110238,
        price: 188000,
        mortage: 37600,
        type: 'sedan',
        transmission: 'estandar',
        extra: [
            'Motor 1.6L',
            'Rin 15 de acero',
            'AM/FM /CD/BLUETOTH',
            'Bolsas de aire frontales',
        ]
    },
]