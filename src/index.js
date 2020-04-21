function component() {
    const element = document.createElement('div');

    if (ENVIRONMENT === 'production') {
        element.innerHTML = "This is production code."
    } else {
        element.innerHTML = "This is dev code."
    }
    
  }
  
  document.body.appendChild(component());