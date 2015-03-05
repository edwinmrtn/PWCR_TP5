/*
 *	TP 5 : Animations *	
*/

// Au chargement de la page :
$(function(){
		/*
			EXEMPLE
		*/
	
		// Objet que l'on veut déplacer
		var $cible = $("#instructions") ;
		
		// On récupère ds un objet jSon les propriété css d'origine pour réinitialiser à la fin de l'animation
		var cssDefaut = {
			position : "relative", 					// Permet de déplacer la cible à partir de sa pos° d'origine
			left:$cible.css("left"),				// décalage à gauche (0)
			top:$cible.css("top"), 					// décalage en bas (0)
			fontSize : $cible.css("font-size"), 	// Taille du texte
			background:$cible.css("background"),	// Couleur de fond
			padding:$cible.css("padding"), 			// marge			
			width : $cible.width(),					// Largeur du bloc
			height : $cible.height()				// Hauteur du bloc
		}
				
		$("#cliquer-exemple").click(function(e){
		
			$cible
				// Réinitialise la css
				.css(cssDefaut) 
				 // Arrête l'animation en cours
				.stop( 
					true, // si vrai, vide la pile d'éxécution des animations.
					false // si vrai, force l'animation en cours a se terminer.
				)
				// Modification de la couleur de fond non géré par animate
				.css('background','#834442')
				// Effet : modification des dimensions				
				.animate(
					{width:"310px",height:"310px",fontSize:"10px",padding:"9px"},
					1000 // dure 1 seconde
				)
				// Effet : modification de la position				
				.animate(
					{top:200,left:100}, // modifie la position
					1000, // dure 1 seconde
					function(){ // Fonction de callback
						$cible.css('background','#537384'); // couleur de fond
					}
				)
				// pause d'une 1seconde
				.delay(1000) 
				// Effet modification de la position 
				.animate(
					{left:'+=350', top:'-=150px'}, // (valeurs relatives avec -= et +=)
					1000, // dure 1 seconde
					function(){ // Fonction de callback
						$cible.css('background','#5f8453'); // couleur de fond
					}
				)
				// pause d'une 1/2 seconde
				.delay(500) 
				// Retour à la position d'origine en 1 seconde
				.animate(
					{left:0,top:0 },
					1000,
					function(){ // Fonction de callback 
						$cible.css(cssDefaut) ;	// Réinitialise la css
					}
				) ;
			// Annule l'action par défaut du click :
			return false ;
		})
		
		// Pour aller directement à la fin de l'animation en cours et supprimer les animations suivantes
		// var clearQueue = true ;
		// var goToEnd = true ;
		// $("h1").click(function(){$cible.stop(clearQueue,goToEnd)});
		
		/*
			EXERCICE 1 :
			Masquer les items du menu déroulant.
			Quand on clique sur le lien qui a la classe «menu-tete». Le menu se déplie vers le bas.
		*/
		$(".menu-deroulant ul").hide();
		$(".menu-tete").click(function(){
			$(".menu-deroulant ul").slideToggle(250);
		});
		
		/*
			EXERCICE 2 :
			Cacher les tableaux.
			Quand on clique sur un lien du menu déroulant, le tableau lié apparaît avec un effet de votre choix.
			Le cas échéant, les autres tableaux disparaissent.
		*/
		
	
		var $ahrefmenu = $(".menu-deroulant ul").find("a") ; 
		$("#demo").css("overflow","hidden") ;
		var $tables = $("table").hide() ;

		
		$ahrefmenu.click(function(e){
				
			$tables.hide() ;
			$itemClique = $(this) ;
			var $tableselectionne = $tables.filter($itemClique.attr("href")) ;
			
				$tableselectionne.stop()
				$tableselectionne.css({position:"relative",left:"-1000px"})
				$tableselectionne.show()
				$tableselectionne.animate({left:"500"},500)
				$tableselectionne.animate({left:"0"},500) 
				
				$tableselectionne.animate({top:"500"},250) 
				$tableselectionne.animate({top:"500"},0,
				function(){ // Fonction de callback
						$tableselectionne.children().css('background','#1abc9c'); // couleur de fond
					})
				$tableselectionne.animate({top:"0"},250)
				
				
				$tableselectionne.animate({top:"500"},250) 
				$tableselectionne.animate({top:"500"},0,
				function(){ // Fonction de callback
						$tableselectionne.children().css('background','#2ecc71'); // couleur de fond
					})
				$tableselectionne.animate({top:"0"},250) 

				$tableselectionne.animate({top:"500"},250) 
				$tableselectionne.animate({top:"500"},0,
				function(){ // Fonction de callback
						$tableselectionne.children().css('background','#3498db'); // couleur de fond
					})
				$tableselectionne.animate({top:"0"},250)
				
				for (var i = 0; i < 3 ; i++){
				
				$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#8e44ad'); // couleur de fond
						})
					$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#f1c40f'); // couleur de fond
						})
					$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#27ae60'); // couleur de fond
						})
						
					$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#c0392b'); // couleur de fond
						})
				}
				for (var i = 0; i < 3 ; i++){
				
				$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#8e44ad'); // couleur de fond
						})
				$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.css('-webkit-transform', 'rotate(96deg)'); // couleur de fond
						})
						
					$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#f1c40f'); // couleur de fond
						})
				$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.css('-webkit-transform', 'rotate(215deg)'); // couleur de fond
						})
						
					$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#27ae60'); // couleur de fond
						})
				$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.css('-webkit-transform', 'rotate(0deg)'); // couleur de fond
						})
						
					$tableselectionne.animate({top:"0"},100,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','#c0392b'); // couleur de fond
						})
				}
				
				
				$tableselectionne.animate({top:"0"},1000,
					function(){ // Fonction de callback
							$tableselectionne.children().css('background','white'); // couleur de fond
						})
		
		});


		/*
			EXERCICE 3 :
			Créer un effet quand on survole les items du menu déroulant 
			(par exemple, modifier la propriété padding-left du style des liens).
		*/
		$ahrefmenu.hover(
		function(){
		$(this).css("background-color","green");
		$(this).animate({left: '250px',
        opacity: '0.5'
		 })},
		 function(){
		 $(this).animate({left: '250px',
        opacity: '1'
		 })
		 });
		/*
			EXERCICE 4 :
			Déstableselectionner les animations
			Déclencher l'évènement click sur le premier item
			Rétableselectionner les animations			
		*/
		$.fx.off = true ;
		$ahrefmenu.eq(0).click() ;
		$.fx.off = false ;
		
}); // Fin des instructions envoyées au chargement de la page
	

