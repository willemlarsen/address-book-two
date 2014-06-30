beforeEach(function() {
  Contact.all = [];
});

describe("Contact", function() {
  describe("create", function() {
    it("creates a new instance of Contact", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });

    it("initializes the contact", function() {
      var testContact = Contact.create("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });

    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });
    it('sets up an empty array for the addresses property', function() {
      var testContact = Object.create(Contact);
      testContact.initialize();
      testContact.addresses.should.eql([]);
    });
  });
  describe("fullName", function() {
    it("combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Parton";
      testContact.fullName().should.equal("Dolly Parton");
    });
  });
});
describe("Address", function() {
	describe("fullAddress", function() {
		it("returns the full address with nice formatting", function() {
			var testAddress = Object.create(Address);
			testAddress.street = "123 4th Ave";
			testAddress.city = "Portland";
			testAddress.state = "Oregon";
			testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
		});
	});
});