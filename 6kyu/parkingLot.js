// Los autos no pueden moverse, por mas que haya tres lugares libres no significa q pueda entrar una van.

// Idea: crear un arr de longitud del size del pknglot e ir llenando los lugares con unos. Despues poner como condicion para parkear una van o un auto, que los lugares disponibles tengan que estar al lado.

class ParkingLot {
    constructor(size) {
      this.size = size
      this.availableSpaces = size
      this.parkedLicensePlates = []
      this.parkedSpaces = []
    }
    
    park(vehicle) {
      let vehicleType = vehicle.constructor
      let vehicleLicense = vehicle.license
      
      if (vehicleType === Van){
        if (this.availableSpaces >= 3) {
          this.availableSpaces -= 3
          this.parkedLicensePlates.push(vehicleLicense)
          this.parkedSpaces.push(3)
          return true
        }
        else {
          return false
        }
      }
      
      else if (vehicleType === Car){
        if (this.availableSpaces >= 2){
          this.availableSpaces -= 2
          this.parkedLicensePlates.push(vehicleLicense)
          this.parkedSpaces.push(2)
          return true
        }
        else {
          return false
        }
      }
      
      else if (vehicleType === Bike){
        if (this.availableSpaces >= 1) {
          this.availableSpaces -= 1
          this.parkedLicensePlates.push(vehicleLicense)
          this.parkedSpaces.push(1)
          return true
        }
        else {
          return false
        }
      }
      
      else {
        return false
      }
        
    }
    
    retrieve(license) {
      const index = this.parkedLicensePlates.indexOf(license)
      
      if (index >= 0){
        this.availableSpaces += this.parkedSpaces[index]    
        this.parkedLicensePlates.splice(index,1)
        this.parkedSpaces.splice(index,1)
        
        return true
      }
      
      else {
        return false
      }
      
    }
  }