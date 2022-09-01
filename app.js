const input = document.querySelector( '.info-holder input' );
const code = document.getElementById( 'code' );
const key = document.getElementById( 'text' );

window.addEventListener( 'keypress', e => {
    showCode( e.charCode );
    showKey( e.key );
} )

window.addEventListener( 'load', e => {
    input.focus();
} )


function showCode( word ){
    code.textContent = word;
}

function showKey( word ){
    key.textContent = word;
}

input.addEventListener( 'keydown', ()=>{
    input.value = '';
} )
