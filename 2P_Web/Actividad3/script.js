class Conductor {
    #nombre;
    #apellido
    constructor(nombre, apellido, licencia) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.licencia = licencia;
        this.rutas = [];
    }

    obtenerNombre() {
        return this.#nombre;
    }

    obtenerApellido() {
        return this.#apellido;
    }

    registrarRuta(ruta) {
        console.log("El conductor " + this.#nombre + " esta registrado en la ruta: " + ruta);
        this.rutas.push(ruta);
    }
}

class Vehiculo {
    constructor(marca, modelo, placa) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
    }
    registrarVehiculo() {
        console.log("El vehiculo " + this.marca + " " + this.modelo + " con placa: " + this.placa +" ha sido registrado");
    }
}

class ConductorVIP extends Conductor {
    #telefono;
    constructor(nombre, apellido, licencia, telefono, vehiculoPreferido) {
        super(nombre, apellido, licencia);
        this.#telefono = telefono;
        this.vehiculoPreferido = vehiculoPreferido;
    }
    obtenerTelefono() {
        return this.#telefono;
    }
    asignarVehiculoPreferido(vehiculo) {
        if (vehiculo.modelo === this.vehiculoPreferido) {
            console.log(`${this.obtenerNombre()} a sido asignado a su vehículo preferido, modelo: ${vehiculo.modelo}`);
        } else {
            console.log(`${this.obtenerNombre()} ha sido asignado un vehículo diferente.`);
        }
    }
}

const vehiculo1 = new Vehiculo("Chevrolet", "Aveo", "PAC8874");
const vehiculo2 = new Vehiculo("Ford", "F150", "PAC9452");
const vehiculo3 = new Vehiculo("Nissan", "Skyline", "PBC0110");

const conductor1 = new Conductor("Luis", "Sagnay", "C");
const conductorVIP = new ConductorVIP("Carlos", "Torres", "D", "0987654321", "Skyline");

vehiculo1.registrarVehiculo();
vehiculo3.registrarVehiculo();

conductor1.registrarRuta("Quito - Sangolqui");
conductorVIP.registrarRuta("Quito - Ambato");

conductorVIP.asignarVehiculoPreferido(vehiculo3);
