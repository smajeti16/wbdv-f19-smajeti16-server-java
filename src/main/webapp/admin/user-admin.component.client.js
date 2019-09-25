(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $updateBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tbody = $(".wbdv-tbody");

        $createBtn = $("#createBtn");
        $updateBtn = $("#updateBtn");

        findAllUsers();

        $createBtn.click(createUser);
    }

    function createUser() { 
        var username = $usernameFld.val();
        $usernameFld.val("");
        var password = $passwordFld.val();
        $passwordFld.val("");
        var firstName = $firstNameFld.val();
        $firstNameFld.val("");
        var lastName = $lastNameFld.val();
        $lastNameFld.val("");
        var role = $roleFld.val();
        var id = (new Date()).getTime();

        const user = {username:username, password:password, firstName:firstName, lastName:lastName, role:role, id:id}
        

        fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => findAllUsers())
    }

    function findAllUsers() {
        fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users")
                    .then(response => response.json()
                    .then(function(data) {
                        renderUsers(data);
                    }));
    }

    function findUserById() { 
        
    }


    function deleteUser(event) { 
        var button = $(event.currentTarget);
        var rmv = button.parents(".wbdv-template");
        rmv.remove();
    }


    function selectUser(event) { 
        var cur = $(event.currentTarget);
        var row = cur.parents(".wbdv-template");
        $usernameFld.val(row.find(".wbdv-username").text());
        $updateBtn.click(updateUser(row));
        // $usernameFld.val(row.find(".wbdv-username").text());

    }

    function updateUser(row) { 
        alert("updateUserClicked");
        row.find(".wbdv-username").text($usernameFld.val());
    }

    function renderUser(user) {
        var newUser = $userRowTemplate.clone();
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-username")
            .html(user.username);
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-password")
            .html(user.password);
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-first-name")
            .html(user.firstName);
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-last-name")
            .html(user.lastName);
        newUser
            .attr("id", user.id)
            .removeClass("wbdv-hidden")
            .find(".wbdv-role")
            .html(user.role);

        newUser
            .find(".wbdv-remove")
            .attr("id", user.id)
            .click(deleteUser);

        newUser
            .find(".wbdv-edit")
            .attr("id", user.id)
            .click(selectUser);

        $tbody.append(newUser);
    }


    function renderUsers(users) {
        $tbody.empty() 
        for(var i=0; i<users.length; i++) {
            renderUser(users[i]);
        }

    }



})();
