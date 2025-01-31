const datos = [
    {
        id:1,
        title: 'IRON',
        year: 2008
    },
    {
        id:2,
        title: 'IRONMAN',
        year: 2010
    },
    {
        id:3,
        title: 'BATMAN',
        year: 2015
    },
];

const getDatos = () => {
    return new Promise((resolve, reject)=>{
        if(datos.length === 0){
            reject(new Error('No hay datos'))
        }

        setTimeout(() => {
            resolve (datos);
        }, 1000);
    });
}

async function getDatosConAsync(){
    try {
        const datos1 = await getDatos();
        console.log(datos1)
    } catch (error) {
        console.log(error.message);
    }
}

getDatosConAsync();