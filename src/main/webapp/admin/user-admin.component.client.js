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

        $createBtn.click(createUser);
        $updateBtn.click(updateBtn);
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


        var timeStamp = (new Date()).getTime();


        var newUser = $userRowTemplate.clone();
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-username")
            .html(username);
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-password")
            .html(password);
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-first-name")
            .html(firstName);
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-last-name")
            .html(lastName);
        newUser
            .attr("id", timeStamp)
            .removeClass("wbdv-hidden")
            .find(".wbdv-role")
            .html(role);

        var removeTime = (new Date()).getTime();
        newUser
            .find(".wbdv-remove")
            .attr("id", removeTime)
            .click(deleteUser);


        var editTime = (new Date()).getTime();
        newUser
            .find(".wbdv-edit")
            .attr("id", editTime)
            .click(selectUser);

        $tbody.append(newUser);
    }
    function findAllUsers() { }
    function findUserById() { }
    function deleteUser(event) { 
        var button = $(event.currentTarget);
        var rmv = button.parents(".wbdv-template");
        rmv.remove();
    }
    function selectUser(event) { 
        
    }
    function updateUser() { 
        
    }
    function renderUser(user) { }
    function renderUsers(users) { }
})();
