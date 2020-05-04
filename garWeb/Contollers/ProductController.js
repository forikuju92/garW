garApp.controller("ProductController", function ($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "GAR Technical";

    $scope.student = {
        firstName: "Mahesh",
        lastName: "Parashar",

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});