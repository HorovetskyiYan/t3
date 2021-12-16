function CreateUser (name, registered) {
  this.name = name
  this.registered = registered
  registered !== true ? this.data = null : this.data = new Date().toLocaleDateString()
  this.getInfo = function userInfo () {
  this.registered === true ?
    console.log(Дата регистрации: ${this.data}) :
      console.log(Незарегистрированный пользователь: ${this.name})
  }
}
