require.config({baseUrl: "./",
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        jstree: '../bower_components/jstree/dist/jstree',
        confs: './JstreesConfigurations_forTesting',
        divTOjstree: '../src/divTOjstree',
        blanket: "./lib/blanket.min"
    }
});

requirejs(['confs'], function (configurations) {
    QUnit.test("test configuration: test_preparingConfigurationToUse ", function (assert) {
        assert.equal('object', typeof (configurations.test1), 'configurations.test1 is oject');
        assert.strictEqual("stringTotest", configurations.test1.onClickCallback("stringTotest"), "onClickCallback ok");
    });
});