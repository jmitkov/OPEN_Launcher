var CreateUserPage = function() {




    var createBtnFirstPage = element(by.id("createUser"));
    var enterName = element(by.id("username"));
    var createBtnSecondPage = element(by.id("createNewUser"));
    var createdProfilMsg = element(by.xpath("/html/body/app/div/login/div/div/div[1]/label"));
    var alertmessage = element(by.id("messagelabel"));
    var image = element.all(by.className("img-circle"));
    var backBtn = element(by.id("backToLogin"));
    var name;
    var imageNumber;
    var randomNo;
    var autoGenerateUserName;




    this.get = function(value) {
        browser.get(value);
    };


    this.clickCreateBtn = function() {
        createBtnFirstPage.click();
    };

            SelectRandomPicture = function() {
            image.count().then(function(counted) {
            console.log(counted);
            imageNumber = parseInt(counted);
            randomNo = Math.floor(Math.random() * (imageNumber-1))+1;
            image.get(randomNo).click();
            
        });

    };

    this.clickCreateBtnAfter = function() {
        createBtnSecondPage.click();
    };

    this.CreateAutoGenerateUserName = function() {
        createBtnFirstPage.click();
        autoGenerateUserName = "Auto-UserName-";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 3; i++){
        autoGenerateUserName += possible.charAt(Math.floor(Math.random() * possible.length));
    };
        enterName.sendKeys(autoGenerateUserName);
        SelectRandomPicture();
        createBtnSecondPage.click();
    };


    this.CreatePredefinedUserName = function(name) {
        createBtnFirstPage.click();
        enterName.sendKeys(name);
        SelectRandomPicture();
        createBtnSecondPage.click();
    };



    this.writeName = function(name) {
        enterName.sendKeys(name);
    };

    this.selectPicture = function() {
        SelectRandomPicture();
    };

    this.checkText = function() {
        return createdProfilMsg.getText();
    };


    this.clickBack = function() {
        backBtn.click();
    };

    this.ReturnMessage = function() {
        var message = alertmessage.getText();
        return message;

    };

    this.isCreateBtnEnabled = function() {
        var isDisabled = createBtnSecondPage.isEnabled();
        return isDisabled;
    };

    this.FilterUsername = function(filter) {
        enterName.sendKeys(filter);

    };

    this.ClearFilter = function() {
        enterName.clear();
    };
    
    this.GetCurrentUrl = function() {
        return browser.getCurrentUrl();
    };





};

module.exports = new CreateUserPage();