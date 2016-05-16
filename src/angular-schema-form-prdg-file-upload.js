'use strict';

function processSchema(schema) {
    var defaultPatternMsg = 'Wrong file type. Allowed types are ',
        defaultMaxSizeMsg1 = 'This file is too large. Maximum size allowed is ',
        defaultMaxSizeMsg2 = 'Current file size:',
        defaultMinItemsMsg = 'You have to upload at least one file',
        defaultMaxItemsMsg = 'You can\'t upload more than one file.';

    if (schema.pattern && schema.pattern.mimeType && !schema.pattern.validationMessage) {
        schema.pattern.validationMessage = defaultPatternMsg;
    }
    if (schema.maxSize && schema.maxSize.maximum && !schema.maxSize.validationMessage) {
        schema.maxSize.validationMessage = defaultMaxSizeMsg1;
        schema.maxSize.validationMessage2 = defaultMaxSizeMsg2;
    }
    if (schema.minItems && schema.minItems.minimum && !schema.minItems.validationMessage) {
        schema.minItems.validationMessage = defaultMinItemsMsg;
    }
    if (schema.maxItems && schema.maxItems.maximum && !schema.maxItems.validationMessage) {
        schema.maxItems.validationMessage = defaultMaxItemsMsg;
    }
    return schema;
}

angular
    .module('schemaForm')
    .config(['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {
            var prdgSinglefileUpload = function (name, schema, options) {
                if (schema.type === 'array' && schema.format === 'singlefile') {
                    schema = processSchema(schema);

                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'prdgFileUpload';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.array.unshift(prdgSinglefileUpload);

            var prdgMultifileUpload = function (name, schema, options) {
                if (schema.type === 'array' && schema.format === 'multifile') {
                    schema = processSchema(schema);

                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'prdgFileUpload';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.array.unshift(prdgMultifileUpload);

            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'prdgFileUpload',
                'directives/decorators/bootstrap/angular-schema-form-prdg-file-upload/angular-schema-form-prdg-file-upload.html'
            );
        }
    ]);