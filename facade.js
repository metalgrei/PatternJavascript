/**
 * Pattern Facade
 */
 var addMyEvent = function ( el, ev, fn ){
	 if( el.addEventListener ){
		 el.addEventListener( ev,fn, false );
	 }else if(el.attachEvent){
		el.attachEvent( 'on'+ ev, fn );
	 }else{{
		 el['on' + ev] = fn;
	 }}
 };
 
 function makeClick(){
    alert('hola');
};

window.onload = function load(){
	addMyEvent(document.getElementById('prueba'), 'click', makeClick);
};
 
