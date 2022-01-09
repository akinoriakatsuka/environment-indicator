let production_domain = [
  // https://example.com,
  // http://example.com
]
if(location.href.indexOf('http://localhost') != -1){
  var div = document.createElement('div');
  div.setAttribute('style','height:20px;background-color:green;');
  document.querySelector('body').prepend(div);
};
production_domain.forEach(element => {
  if(location.href.indexOf(element) != -1){
    var div = document.createElement('div');
    div.setAttribute('style','height:20px;background-color:red;');
    document.querySelector('body').prepend(div);
  }
})