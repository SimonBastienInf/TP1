/**
 * @author Samuel Ethier et Simon Bastien
 */
var bd=null;//simulation base de donnees avec localStorage et json
function ajoutInfo()
{   	//var nom=$( "#nom option:selected" ).val();
    	//var fimage=$( "#image option:selected" ).val();
		var cap=$("#capacite option:selected").val();
		var acc=$('input[name="acces"]:first').val();
		var env=$('input[name="environnement"]:first').val();
		//var date=$('input[name="date"]:first').val();
		
	lireBdJson();
	var descJsonObjects=bd.descriptions;
	var jsonObject={ //creation de json
		//"nom":nom,
		//"image":fimage,
		"capacite":cap,
		"acces":acc,
		"environemment":env,
		//"date":date,
	};
	descJsonObjects.push(jsonObject);//ajout dans le tableau des description
	bd.descriptions=descJsonObjects;
	localStorage.setItem('bdjson', JSON.stringify(bd));	
	return(true);
	}

function initialiserBdJson()
{
	var bdjson={
		"descriptions":[],
		"users":{"admin":"Inf2005"}
	   };	
	$("#fajout").eq(0).hide();
	localStorage.setItem('bdjson', JSON.stringify(bdjson));	
	bd=bdjson;
}

function lireBdJson()
{
	bd=localStorage.getItem('bdjson');
	if((bd=="undefined")||(bd==null))
	{//ici on doit initialiser la bd
	initialiserBdJson();
	
	}
	else{
		bd=JSON.parse(bd);//parsing de objet json
	}
	connecte=sessionStorage.getItem("connecte");
	if((connecte=="undefined")||(connecte==null)){
		$("#fajout").eq(0).css({"display":"none"});
		$("#fconnexion").eq(0).css({"display":"block"});
		
	}
	else{
		$("#fajout").css({"display":"block"});
		$("#fconnexion").css({"display":"none"});
	}
	var descJsonObjects=bd.descriptions;
	var hr="<hr>";
	 $("#contenu:first").append(hr);
	
	for(var i=0;i<descJsonObjects.length;i++)
	{
		var jsonObject=null;
		jsonObject=descJsonObjects[i];
		var div='<div class="ajoutjson">';
		    //div=div+'<h3 class="nom">'+jsonObject.nom+'</h3>';
		    //div=div+'<img src='+jsonObject.image+'>';
		    div=div+'<div class="capacite">'+"Capacite: "+jsonObject.capacite+'</div>';
		    div=div+'<div class="acces">'+"Acces: "+jsonObject.acces+'</div>';
		    div=div+'<div class="environemment">'+"Environemment: "+jsonObject.environemment+'</div>';
		    //div=div+'<div class="date">'+"Date de mise en service: "+jsonObject.date+'</div>';
		  div=div+'</div>'; 
		  $("#contenu:first").append(div);//on ajoute à la fin de l'élément
	}
	$("#contenu:first").append(hr);//on ajoute une ligne hrizontale
	
}

function mettreAJourBdJson()
{
	initialiserBdJson();
	var descJsonObjects=bd.descriptions;
	$('div[class="ajoutjson"]').each(function(){
		//var nom=$(this).find('h3[class="nom"]:first').html();
		//var fimage=$(this).find('img:first').attr('src');
		var cap=$(this).find('div[class="capacite"]:first').html();
		var acc=$(this).find('div[class="acces"]:first').html();
		var env=$(this).find('div[class="environemment"]:first').html();
		//var date=$(this).find('div[class="date"]:first').html();
		var jsonObject={ //creation de json
		//"nom":nom,
		//"image":fimage,
		"capacite":cap,
		"acces":acc,
		"environemment":env,
		//"date":date,
	      };
	     descJsonObjects.push(jsonObject);
	});
	bd.descriptions=descJsonObjects;
	localStorage.setItem('bdjson', JSON.stringify(bd));
	//Si on a fait la mise a jour, c'est qu'on est connecté	
	$("#fajout").css({"display":"block"});
	$("#fconnexion").css({"display":"none"});
}

function connexion()
{   
	//récupération des info du formulaire
	login=$("#login").val();
	pwd=$('input[name="passwd"]:first').val();
	//vérification dans la BD
	bd=localStorage.getItem('bdjson');
	if((bd=="undefined")||(bd==null))
	{//ici on doit initialiser la bd
	initialiserBdJson();
	
	}
	else{
		bd=JSON.parse(bd);//parsing de objet json
	}
	users=bd.users;
	
	if(pwd==users[login]){
		//si le mot de passe est bon
		sessionStorage.setItem("connecte","connecte");
	}else{//mot de passe erroné
		//supprimer la variable enregistré dans sessionStorage
		sessionStorage.removeItem('connecte');
	}
	
}

function seDeconnecter(){
	sessionStorage.removeItem('connecte');
	$("#fajout").css({"display":"none"});
	$("#fconnexion").css({"display":"block"});
	
}

function supprimerInfo(){
	localStorage.removeItem('bdjson'); //supression de la bd localStorage
	
}
function stade(nom){

	bd=localStorage.getItem('bdjson');
	if((bd=="undefined")||(bd==null))
	{//ici on doit initialiser la bd
	initialiserBdJson();
	
	}
	else{
		bd=JSON.parse(bd);//parsing de objet json
	}
	connecte=sessionStorage.getItem("connecte");
	if((connecte=="undefined")||(connecte==null)){
		$("#fajout").eq(0).css({"display":"none"});
		$("#fconnexion").eq(0).css({"display":"block"});
		
	}
	else{
		$("#fajout").css({"display":"block"});
		$("#fconnexion").css({"display":"none"});
	}
	var descJsonObjects=bd.descriptions;
	var hr="<hr>";
	 $("#contenu1:first").append(hr);
	var pos=-1;
	for(var i=0;i<descJsonObjects.length;i++){
		jsonObject=descJsonObjects[i];
		if(jsonObject.nom==nom){
		pos=i;
		}
	}if(pos==-1){	var hra="Les informations sur ce stade ne sont pas encore disponible.";
	 $("#contenu1:first").append(hra);
		    }
		var jsonObject=null;
		jsonObject=descJsonObjects[pos];
		var div='<div class="ajoutjson">';
		    //div=div+'<h3 class="nom">'+jsonObject.nom+'</h3>';
		    //div=div+'<img src='+jsonObject.image+'>';
		    div=div+'<div class="capacite">'+"Capacite: "+jsonObject.capacite+'</div>';
		    div=div+'<div class="acces">'+"Acces: "+jsonObject.acces+'</div>';
		    div=div+'<div class="environemment">'+"Environemment: "+jsonObject.environemment+'</div>';
		    //div=div+'<div class="date">'+"Date de mise en service: "+jsonObject.date+'</div>';

		  div=div+'</div>'; 
		  $("#contenu1:first").append(div);//on ajoute à la fin de l'élément
		  		    
	
	$("#contenu1:first").append(hr);//on ajoute une ligne hrizontale
	
}

$(document).ready(function(){
	lireBdJson();


	$("#submit").click( function(){
		return ajoutInfo();
	});
	$("#supprimer").click( function(){
		supprimerInfo();
	});
	$("#deconnexion").click( function(){
		seDeconnecter();
	});
	$("#fconnexion").submit( function(){
		return connexion();
	});	
	
});