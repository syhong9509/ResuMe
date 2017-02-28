package resume

class UserAccount {

    // hasOne property should be on the owning object
    // e.g. UserAccount owns the Profile
    static hasOne = [userProfile : Profile, userName: String, userPassword: String]

    def getProfile(){
        return userProfile
    }

    static constraints = {
        userProfile nullable: true // Allows a UserAccount to be created without a Profile
        userProfile unique: true // Ensures that UserAccounts must be associated with unique Profiles
    }
}