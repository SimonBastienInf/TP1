/**
 * @author Utilisateur
 */
/**  @author Johnny Tsheke */
$(document).ready(function(){
	var tr=$.XSLTransform({
						xmlurl:'../XML/comite.xsl',
						xslurl:'../XML/comite.xml'
					});
	$('#conteneur').html(tr);
});
