console.log('epiTerra.js ...')
setTimeout(function(){
    epiTerraScript = document.createElement('script')
    //epiTerraScript.src='http://localhost:8000/terra/epiTerra.js'
    epiTerraScript.src='https://episphere.github.io/terra/epiTerra.js'
    console.log('... appended at '+Date()+' by a content script ...')
    document.head.appendChild(epiTerraScript)
},3000)
