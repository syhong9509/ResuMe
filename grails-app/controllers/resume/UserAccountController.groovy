package resume

import grails.rest.RestfulController

import static org.springframework.http.HttpStatus.*



class UserAccountController extends RestfulController{

    static allowedMethods = [createAccount: 'POST']
    static responseFormats = ['json', 'xml']

    UserAccountController(){
        super(UserAccount)
    }

    def index() {
        // some default behaviour could be here
    }

    // Our first POST-enabled method
    // We just want to get the status text and save it to the profile.
    def create(){
        def uname = params.userName
        def upassword = params.password
        def account = UserAccount.find{userName == uname}
        if(account == null){
            account = new UserAccount(userName: uname, password: upassword)
            new Profile(ownerAccount: account).save()
            System.out.print('created')
            response.status = 200
        }
        else{
            // Find a better response code...
            System.out.print('already there')
            response.status = 404
        }
    }
}
