require.config({baseUrl: "./",
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        jstree: '../bower_components/jstree/dist/jstree',
        confs: './JstreesConfigurations_forTesting',
        divTOjstree: '../src/divTOjstree',
        blanket: "./lib/blanket.min"
    }
});

requirejs(['confs','divTOjstree','jstree', 'jquery'], function (configurations,divTOjstree) {

    
    QUnit.test("creating jstree", function (assert) {
        assert.equal('function', typeof (divTOjstree), 'divTOjstree is function');
        assert.equal($('#idTest').html(),'', 'empty div tree');
        assert.ok(divTOjstree(configurations),'jstree creation'); //create the tree
        assert.ok($('#idTest').html().indexOf('jstree-container-ul jstree-children') > -1,'element modified');
    });
    
    
});