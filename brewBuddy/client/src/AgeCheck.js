import React from 'react';

export class AgeCheck extends React.Component {
   NoAccess()
  {
    // $("#clickEnter").html("You are not permitted to view the contents of this site.");  
    // $("#clickEnter").css("color", "red");
    // $("#clickEnter").css("font-weight", "bold");
    // $("#age-footer").css("display", "none");
  }
  render() {
    return (

      <div className="modal fade" id="ageModal" tabIndex={-1} role="dialog" aria-labelledby="ageModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">	 
              <p id="clickEnter">Are you at least 21 years of age?</p>
              <div id="age-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal" id="enterBtn">Yes</button>
                <div className="btn btn-danger" id="exitBtn" onclick={this.NoAccess()}>No</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


// $(document).ready(function() {
//     $('#ageModal').modal({
//       backdrop: 'static',
//       keyboard: false
//     });
//     $("#ageModal").modal("show"); 
   

// });

