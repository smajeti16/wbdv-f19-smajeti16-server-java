function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001604056/users';
    var self = this;
    function createUser(user, callback) {
        fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => callback());
    }

    function findAllUsers(callback) {
        fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users")
                    .then(response => response.json()
                    .then(function(data) {
                        callback(data);
                    }));
    	
    }

    function findUserById(userId, callback) { 
    	fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users/" + userId)
                    .then(response => response.json()
                    .then(function(data) {
                        callback(data);
                    }));
    }

    function updateUser(userId, user, callback) {
    	fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users/" + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => callback());
    }

    function deleteUser(userId, callback) {
    	fetch("https://wbdv-generic-server.herokuapp.com/api/001604056/users/" + userId, {
			method: 'delete'})
		.then(response => callback());
    }
}
