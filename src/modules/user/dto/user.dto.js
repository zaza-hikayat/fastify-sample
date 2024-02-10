class UserDto {
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(newPhoneNumber) {
    this._phoneNumber = newPhoneNumber;
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
  }
}

module.exports = UserDto;
