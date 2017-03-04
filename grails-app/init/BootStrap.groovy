import grails3.example.Role
import grails3.example.User
import grails3.example.UserRole

class BootStrap {

    def init = { servletContext ->
        Role roleUser = new Role(authority: 'ROLE_USER').save(failOnError: true)
        def createAccount = { String firstName, String lastName ->
            def User = new User(firstName: firstName, lastName: lastName, userName: firstName.toLowerCase(),
            password: 'password').save(failOnError: true)
            UserRole.create User, roleUser
        }
        createAccount 'Harry', 'Potter'
        createAccount 'James', 'Dean'

    }


    def destroy = {
    }
}
