describe('acme.sandbox.PhoneController', function() {
  var scope, $browser, controller;
  var startPhonesValue = [ 
    { "modelNumber":"123", "name":"Nexus S", "snippet":"blah blah." },
    { "modelNumber":"456", "name":"Motorola DROID", "snippet":"blah" }
  ];
  
  beforeEach(function() {
    scope = angular.scope();
    $browser = scope.$service('$browser');
    $browser.xhr.expectGET('/chatapp/rest/sandbox/phones').respond({"phone": startPhonesValue});
    controller = scope.$new(acme.sandbox.PhoneController);
  });

  it('should initialize with with 2 phones', function() {
    expect(controller.phones).toBeUndefined();
    $browser.xhr.flush();
    expect(controller.phones).toEqual(startPhonesValue);
  });

  it('should add a phone', function() {
    $browser.xhr.flush();
    controller.addPhoneSnippet(
        '32423423',
        'Nexus Galaxy S',
        'Don\'t break the display like I did.');
    controller.addPhoneSnippet(
        'blahblah',
        'superduper',
        'whatever');
    expect(controller.getPhoneSnippets().length).toBe(4);
    expect(controller.getPhoneSnippets()[2].name).toBe('Nexus Galaxy S');
  })
});