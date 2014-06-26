var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  },
  valid: function() {
    if((this.street === '') || (this.city === '') || (this.state === '')) {
      return false;
    } else {
      return true;
    }

    var goodInput = /^[\w ]+$/;


    if((!goodInput.test(this.street)) ||
      (!goodInput.test(this.city)) ||
      (!goodInput.test(this.state))) {
      return false;
    } else {
      return true;
    }
    
  }
};



var Phone = {
  valid: function() {
  if(this.number === ''){
      return false;
    } else {
      return true;
    }

    var goodInput = /^[\d ]+$/;
    if(!goodInput.test(this.number)) {
      return false;
    } else {
      return true;
    }
  }
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append(
      '<div class="new-address">' +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-state">State</label>' +
      '<input type="text" class="form-control new-state">' +
      '</div>' +
      '</div>'
    );
  });
  $("#add-phone").click(function() {
    $(".phone-numbers").append(
      '<div class"form-group">' +
      '<label for="phone-numbers">Phone Number</label>' +
      '<input type="text" class="form-control new" "phone-numbers">' +
      '</div>'
    );
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.addresses = [];
    newContact.phoneNumbers = [];

    $('.new-address').each(function() {
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find('input.new-state').val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      if(newAddress.valid()) {
        newContact.addresses.push(newAddress);
      } else {
        alert("Sorry, you must fill in a street, city and state, with only numbers and letter characters. Try again.");
      }
    });

    $('.phone-numbers').each(function() {
      var inputtedPhoneNumber = $(this).find('input.new-phone').val();

      var newPhone = Object.create(Phone);
      newPhone.number = inputtedPhoneNumber;

      if (newPhone.valid()) {
        newContact.phoneNumbers.push(newPhone);
      } else {
        alert("Sorry, you must fill in a phone number, and it must be only number characters.");
      }
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $('.contact').last().click(function() {
      $('#show-contact').show();

      $('#show-contact h2').text(newContact.fullName());
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);

      $('ul#addresses').text("");
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append('<li>' + address.fullAddress() + '</li>');
      });
      $('ul#phone-numbers').text("");
      newContact.phoneNumbers.forEach(function(phoneNumber) {
        $('ul#phone-numbers').append('<li>' + phoneNumber.number + '</li>');
      });
    });
  this.reset();
  });
});