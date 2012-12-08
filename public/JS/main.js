$(function () {
    function Structure() {
        var self = this;
        this.page = ko.observable("1");
        this.person1 = ko.observable("");
        this.person2 = ko.observable("");
        this.curPerson = ko.observable("");
        this.curEntry = ko.observable("");
        this.entries = ko.observableArray();
        this.submitP1 = function () {
            self.page(2);
            self.curPerson(self.person2());
            $("input#p2").focus();
        };
        this.submitP2 = function () {
            self.page(3);
            $("textarea#entry").focus();
        };
        this.submit = function () {
            self.curPerson(self.curPerson() == self.person1() ? self.person2() : self.person1());
            self.entries.push("<b>" + self.curPerson() + ": </b>" + self.curEntry());
            self.curEntry("");
        };
    }

    $("textarea#entry").bind('keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            $(this).parent().submit();
            return false;
        }
    });

    window.onbeforeunload = function () {
        return "Your transcript will be lost if you leave the page, are you sure?";
    };

    vm = new Structure();
    ko.applyBindings(vm);
});