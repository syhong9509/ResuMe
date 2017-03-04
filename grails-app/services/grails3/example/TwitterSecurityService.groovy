package grails3.example

import grails.transaction.Transactional
import org.grails.twitter.auth.Person

@Transactional
class TwitterSecurityService {

    static transactional = false

    def springSecurityService

    User getCurrent(){
        springSecurityService.currentUser

    }

    String getCurrentUsername() {
        springSecurityService.principal.username
    }

    User loadCurrent() {
        User.load.springSecurityService.principal.id
    }

}
