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
        $updateBtn.click(updateUser);
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
        
        userService.createUser(user, findAllUsers);

    }

    function findAllUsers() {
        userService.findAllUsers(renderUsers);

    }

    function findUserById(userId) { 
        userService.findUserById(userId, updateFld);
    }


    function deleteUser(event) { 
        var user = $(event.target);
        var userId = user.attr("id");
        userService.deleteUser(userId, findAllUsers);
    }


    function selectUser(event) { 
        var curUser = $(event.currentTarget);
        var userId = curUser.attr("id");
        const td = curUser.parent();
        const tr = td.parent().parent().parent().parent();
        tr.find(".wbdv-update").attr("id", userId);
        // console.log(tr.find(".wbdv-update").attr("id"));
        findUserById(userId);

    }

    function updateFld(user) {
        $usernameFld.val(user.username);
        $passwordFld.val(user.password);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $roleFld.val( user.role);
    }

    function updateUser(event) {
        var curUser = $(event.currentTarget);
        var userId = curUser.attr("id");
        const user = {username:$usernameFld.val(), 
            password:$passwordFld.val(), 
            firstName:$firstNameFld.val(), 
            lastName:$lastNameFld.val(), 
            role:$roleFld.val(), id:userId};
        $usernameFld.val("");
        $passwordFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        userService.updateUser(userId, user, findAllUsers);
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
