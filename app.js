var app = angular.module("myApp", ["ngRoute"]);
app.service("myService", function () {
    this.myMethod = function () { }
})
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/html/home.html"
        })
        .when("/about", {
            templateUrl: "/html/about.html"
        })
        .when("/department", {
            templateUrl: "/html/department.html"
        })
        .when("/facility", {
            templateUrl: "/html/facility.html"
        })
        .when("/services", {
            templateUrl: "/html/services.html"
        })
        .when("/centres", {
            templateUrl: "/html/centres.html"
        })
        .when("/academic", {
            templateUrl: "/html/academic.html"
        })
        .when("/contact", {
            templateUrl: "/html/contact.html"
        })
        .when("/vacancies", {
            templateUrl: "/html/vacancies.html"
        })
        .when("/query", {
            templateUrl: "/html/query.html"
        })
        .when("/feedback", {
            templateUrl: "/html/feedback.html"
        })
        .when("/success", {
            templateUrl: "/html/success.html"
        })
        
})