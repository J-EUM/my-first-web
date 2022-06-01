function openClose(){
    if(document.getElementById('contact-list').style.display === 'block') {
      document.getElementById('contact-list').style.display = 'none';
      document.getElementById('contact-toggle').style.textDecorationLine = 'none';
      
    } else {
      document.getElementById('contact-list').style.display = 'block';
      document.getElementById('contact-toggle').style.textDecorationLine = 'underline';
      
    }
  }