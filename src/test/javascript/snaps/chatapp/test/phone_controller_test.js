describe('snaps.chatapp.test.PhoneController', function() {

  it('should return "phones" model with 3 phones', function() {
    var controller = new snaps.chatapp.test.PhoneController();
    expect(controller.getPhoneSnippets().length).toBe(3);
  });    

  it('should add a phone', function() {
    var controller = new snaps.chatapp.test.PhoneController();
    controller.addPhoneSnippet(
        'Nexus Galaxy S',
        'Don\'t break the display like I did.');
    controller.addPhoneSnippet(
        'superduper',
        'whatever');
    expect(controller.getPhoneSnippets().length).toBe(5);
    expect(controller.getPhoneSnippets()[3].name).toBe('Nexus Galaxy S');
  })
});
