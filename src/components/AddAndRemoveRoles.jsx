import React from 'react'
import "../../styles/AddRoles.css"

const AddAndRemoveRoles = () => {
  return (
    <div className="App">
    <div className="contentholder">
        <h1>Update User Role</h1>
        <div className="search">
            <div className="searchUser"> <h4>Search User</h4></div>
            <div className="searchItem">
                <div class="row height d-flex justify-content-left align-items-center">
                    <div class="col-md-8">
                        <div class="search">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search by User ID or Full Name..." />
                            <button class="btn btn-primary form-control">Search</button>
                        </div>
                    </div>
                    <div className="userfound">
                        <div className="child"> David  <i class="bi bi-x-circle"></i></div>
                        <div className="child">David Dam  <i class="bi bi-x-circle"></i></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="passwordCheck height d-flex justify-content-left align-items-center">
            <h4 className="adminpass">Admin Password:</h4>
            
            <div class="form-floating">
                <input type="password" class="form-control pt-6 passMe" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
        </div>

        <div class="notification height d-flex justify-content-left align-items-center">
            <h4 className="sendnotify">Send Notification: </h4>
            <div className="notifyME">
                <input type="checkbox" name="notifyme" id="notifyme" />
                <label> Send the new user an email about their account </label>
            </div>
        </div>

        <div class="roledesign dropdown height d-flex justify-content-left align-items-center">
            <h4 className="role-role">Roles: </h4>
            <select class="selctpicker" data-style="btn-success">
                <option className="options">User</option>
                <option className="options">Admin</option>
                <option className="options">Super Admin</option>
            </select>
        </div>

        <button className="addrole">Add Role</button>
    </div>
    </div>
  )
}

export default AddAndRemoveRoles