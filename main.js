$(document).ready(function(){
    let fields = document.querySelectorAll('.field');
    let form = document.forms[0];
    let icons = document.querySelectorAll('i')
for(let i = 0, l = fields.length; i<l; i++){
    fields[i].addEventListener('blur', function(){
        checkField(this, `${this.id} can not be empty`)
        for(let j=0; j<icons.length;j++){
            if(fields[i].value === ''){
                icons[i].style.display = 'inline-block'
                
            } else{
                icons[i].style.display = 'none'
            }}

    })
}
//console.log(fields)

form.addEventListener('submit',function(e){
    for(let i= 0; i<fields.length; i++){
        if(fields[i].value === ''){
            e.preventDefault()
        }
    }
})


function checkField(el, message){
    if(el.value === ''){
        if($(el).next('span')){
            $(el).next('span').remove()
    
            let span = document.createElement('span')
            span.className = 'message'
            span.innerHTML = message;
            el.after(span);
            el.classList.add('error')
            el.style.borderColor = 'hsl(0, 100%, 74%)'
        }
        
    } else {
        el.classList.remove('error')
        $(el).next('span').remove()
        el.style.borderColor = 'hsl(246, 25%, 77%)'
    }
}



})

