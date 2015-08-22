

define(function () {

    var configurations = {};

    configurations["test1"] = {
        "onClickCallback": function (nodeElement) {
            return nodeElement;
        },
//        "serverBasePath": "./example_json.json"
      "serverBasePath": "stubServer.json"
    };


    return configurations;

});



