/**
 * @author Utilisateur
 */
$(document).ready(function(){
	$("#universites").click(function(){
		$("#contenu").DataTable({
			columns:[
			{data:"nom"},
			{data:"date"}]
		});
});
