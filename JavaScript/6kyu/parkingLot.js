// Your job is to incrementally develop a fully robotized parking lot management system.

// In this first step, we just want to manage a row of adjacent parking spots.

// All parking spots have a width of 1 meter.
// We allow motorbikes, regular cars and vans to park. Motorbikes occupy exactly 1 spot, regular cars take 2 adjacent spots, and vans need 3 (also adjacent) spots.
// All vehicles have a unique license number.
// The arrival/departure dock is at one end of the row. In order to save both time and power consumption, vehicles are always parked as close as possible to the dock.
// Once a vehicle is parked, the system does not move it.
// You will get the following helper classes : Bike, Car, and Van. All constructors only take the license plate as argument...

// const b=new Bike('AB-123') const c=new Car('CD-456') const v=new Van('EF-789')

// ... which can be accessed using the license attribute ...

// console.log(v.license); > 'EF-789'

// Your job is to implement a ParkingLot class, with one constructor and two methods.

// new ParkingLot(size), which creates a ParkingLot with size spots, all initially empty.
// park(vehicle), which returns true if the vehicle was parked successfully, false otherwise.
// retrieve(license), which returns true if the vehicle was retrieved successfully, false otherwise.
// Good luck!

class ParkingLot {
  constructor(size) {
    this.size = size
    this.parkingSpots = new Array(size).fill(0)
    this.parkedVehiclesLocation = {}
    this.parkedVehiclesType = {}
    
  }
  
  // Method que devuelve el parking spot (indice del this.parkingSpots donde entra el vehiculo) y si no entra devuelve false
  canItBeParked(vehicle) {
    // Esta me tiene que decir donde estacionar

    let vehicleType = vehicle.constructor
    let parkingSpot = false

    if (vehicleType === Van){
      // Encontrar en this.parkingSpots 3 spots vacios contiguos
      let aux = 0
      let i = 0
      for (let spot of this.parkingSpots) {
        if (spot === 0 & aux < 3){
            aux = aux + 1
            if (aux === 3) {
                parkingSpot = i - 2
                return parkingSpot
            }
        } 
        else {
            aux = 0
        }
        i += 1
      }

      return parkingSpot

    }

    else if (vehicleType === Car) {
      // Encontrar en this.parkingSpots 2 spots vacios contiguos
      let aux = 0
      let i = 0

      for (let spot of this.parkingSpots) {
        if (spot === 0 & aux < 2){
            aux = aux + 1
            if (aux === 2) {
                parkingSpot = i - 1
                return parkingSpot
            }
        } 
        else {
            aux = 0
        }
        i += 1
      }
      
      return parkingSpot

    }

    else if (vehicleType === Bike) {
      // Encontrar en this.parkingSpots 1 spot vacío

      if (this.parkingSpots.includes(0)){
        let parkingSpot = this.parkingSpots.indexOf(0)
        return parkingSpot
      }

      return parkingSpot

    }
    
  }
  
  // Method que estaciona el vehiculo: llena this.parkingSpots con tantos 1 corresponda y almacena el tipo de vehiculo y donde se estacionó en this.parkedVehiclesType y this.parkedVehiclesLocation
  park(vehicle) {
    let vehicleType = vehicle.constructor
    let vehicleLicense = vehicle.license
    
    if (vehicleType === Van){
      let parkingLocation = this.canItBeParked(vehicle) 

      if (parkingLocation !== false){
        this.parkedVehiclesLocation[`${vehicleLicense}`] = parkingLocation
        this.parkedVehiclesType[`${vehicleLicense}`] = vehicleType
        this.parkingSpots[parkingLocation] = 1
        this.parkingSpots[parkingLocation+1] = 1
        this.parkingSpots[parkingLocation+2] = 1
        return true
      }
    
      else {
        return false
      }
    }
    
    else if (vehicleType === Car){
      let parkingLocation = this.canItBeParked(vehicle)

      if (parkingLocation !== false){
        this.parkedVehiclesLocation[`${vehicleLicense}`] = parkingLocation
        this.parkedVehiclesType[`${vehicleLicense}`] = vehicleType
        this.parkingSpots[parkingLocation] = 1
        this.parkingSpots[parkingLocation+1] = 1
        return true
      }
    
      else {
        return false
      }
    }
    
    else if (vehicleType === Bike){
      let parkingLocation = this.canItBeParked(vehicle) 

      if (parkingLocation !== false){
        this.parkedVehiclesLocation[`${vehicleLicense}`] = parkingLocation
        this.parkedVehiclesType[`${vehicleLicense}`] = vehicleType
        this.parkingSpots[parkingLocation] = 1
        return true
      }
    
      else {
        return false
      }
      
  }
}
  
  // Method que retira el vehiculo: se fija en this.parkedVehiclesType y this.parkedVehiclesLocation y llena this.parkingSpots con tantos 0 corresponda en la posición que estaba estacionado y luego borra ese vehículo de this.parkedVehiclesType y this.parkedVehiclesLocation
  retrieve(license) {
    let parkingSpot = this.parkedVehiclesLocation[license]
    let vehicleType = this.parkedVehiclesType[license]
    
    if (parkingSpot >= 0){
      
      if (vehicleType === Van){
        this.parkingSpots[parkingSpot] = 0
        this.parkingSpots[parkingSpot+1] = 0
        this.parkingSpots[parkingSpot+2] = 0

        delete this.parkedVehiclesLocation[license]
        delete this.parkedVehiclesType[license]

        return true
      }

      else if (vehicleType === Car){
        this.parkingSpots[parkingSpot] = 0
        this.parkingSpots[parkingSpot+1] = 0

        delete this.parkedVehiclesLocation[license]
        delete this.parkedVehiclesType[license]

        return true
      }

      else if (vehicleType === Bike){
        this.parkingSpots[parkingSpot] = 0

        delete this.parkedVehiclesLocation[license]
        delete this.parkedVehiclesType[license]

        return true
      }

    }
    
    else {
      return false
    }
    
  }
}
