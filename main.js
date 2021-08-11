function sub() {
  if (arguments.length == 0) {
    return field("link")[0]
  }
  else if (arguments.length == 1) {
    field("link").forEach(function(element) {
      if (element.field("name") == arguments[0]) {
        return element
      }
    })
  }
}
