$(document).ready(function() {
    $('#ageModal').modal({
      backdrop: 'static',
      keyboard: false
    });
		$("#ageModal").modal("show"); 
   

});

function NoAccess()
{
  $("#clickEnter").html("You are not permitted to view the contents of this site.");  
  $("#clickEnter").css("color", "red");
  $("#clickEnter").css("font-weight", "bold");
  $("#age-footer").css("display", "none");
}