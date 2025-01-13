class Conductor {
    #nombre;
    #apellido;
    #licencia;

    constructor(nombre, apellido, licencia) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#licencia = licencia;
        this.rutas = [];
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get apellido() {
        return this.#apellido;
    }

    get licencia() {
        return this.#licencia;
    }

    // Setters
    set licencia(nuevaLicencia) {
        if (["A", "B", "C", "D", "E"].includes(nuevaLicencia)) {
            this.#licencia = nuevaLicencia;
        } else {
            console.error("Licencia no válida.");
        }
    }

    registrarRuta(ruta) {
        console.log(`El conductor ${this.#nombre} está registrado en la ruta: ${ruta}`);
        this.rutas.push(ruta);
    }
}

class Vehiculo {
    #marca;
    #modelo;
    #placa;

    constructor(marca, modelo, placa) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#placa = placa;
    }

    // Getters
    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }

    get placa() {
        return this.#placa;
    }

    // Setters
    set placa(nuevaPlaca) {
        if (/^[A-Z]{3}\d{4}$/.test(nuevaPlaca)) {
            this.#placa = nuevaPlaca;
        } else {
            console.error("Placa no válida.");
        }
    }

    registrarVehiculo() {
        console.log(`El vehículo ${this.#marca} ${this.#modelo} con placa: ${this.#placa} ha sido registrado.`);
    }
}

class ConductorVIP extends Conductor {
    #telefono;
    #vehiculoPreferido;

    constructor(nombre, apellido, licencia, telefono, vehiculoPreferido) {
        super(nombre, apellido, licencia);
        this.#telefono = telefono;
        this.#vehiculoPreferido = vehiculoPreferido;
    }

    // Getters
    get telefono() {
        return this.#telefono;
    }

    get vehiculoPreferido() {
        return this.#vehiculoPreferido;
    }

    // Setters
    set telefono(nuevoTelefono) {
        if (/^\d{10}$/.test(nuevoTelefono)) {
            this.#telefono = nuevoTelefono;
        } else {
            console.error("Teléfono no válido.");
        }
    }

    set vehiculoPreferido(nuevoVehiculo) {
        this.#vehiculoPreferido = nuevoVehiculo;
    }

    asignarVehiculoPreferido(vehiculo) {
        if (vehiculo.modelo === this.#vehiculoPreferido) {
            console.log(`${this.nombre} ha sido asignado a su vehículo preferido, modelo: ${vehiculo.modelo}`);
        } else {
            console.log(`${this.nombre} ha sido asignado un vehículo diferente.`);
        }
    }
}

const vehiculo1 = new Vehiculo("Chevrolet", "Aveo", "PAC8874");
const vehiculo3 = new Vehiculo("Nissan", "Skyline", "PBC0110");

const conductor1 = new Conductor("Luis", "Sagnay", "C");
const conductorVIP = new ConductorVIP("Carlos", "Torres", "D", "0987654321", "Skyline");

vehiculo1.registrarVehiculo();
vehiculo3.registrarVehiculo();

conductor1.registrarRuta("Quito - Sangolquí");
conductorVIP.registrarRuta("Quito - Ambato");

conductorVIP.asignarVehiculoPreferido(vehiculo3);
