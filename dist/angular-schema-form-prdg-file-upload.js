/**
 * angular-schema-form-prdg-file-upload - Upload file type for Angular Schema Form
 * @version v0.1.5
 * @link https://github.com/JamesGuthrie/angular-schema-form-prdg-file-upload
 * @license MIT
 */
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
angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/angular-schema-form-prdg-file-upload/angular-schema-form-prdg-file-upload.html","<div class=\"form-group {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n    <label class=\"control-label {{form.labelHtmlClass}}\"\n           ng-show=\"form.title && form.notitle !== true\"\n           ng-class=\"{\'sr-only\': !showTitle(), \'text-danger\': form.$error.required}\">\n        {{ form.title }}\n    </label>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n    <div class=\"well well-sm bg-white form-control\" style=\"height:auto;\">\n         <!-- ng-class=\"{\'has-error border-danger\': form.$error.required || (hasError() && errorMessage(schemaError()))}\">-->\n        <prdg-file-upload url=\"form.endpoint\"\n                          files=\"$$value$$\"\n                          multiple=\"form.schema.format !== \'singlefile\'\"\n                          ng-disabled=\"form.readonly\"\n                          schema-validate=\"form\"\n                          ng-model=\"$$value$$\"></prdg-file-upload>\n    </div>\n    <span ng-if=\"form.feedback !== false\"\n          class=\"form-control-feedback\"\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n          aria-hidden=\"true\"></span>\n\n    <span ng-if=\"hasError() || hasSuccess()\"\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n</div>\n");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItc2NoZW1hLWZvcm0tcHJkZy1maWxlLXVwbG9hZC5qcyIsInRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs4RUMvREEiLCJmaWxlIjoiYW5ndWxhci1zY2hlbWEtZm9ybS1wcmRnLWZpbGUtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBwcm9jZXNzU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBkZWZhdWx0UGF0dGVybk1zZyA9ICdXcm9uZyBmaWxlIHR5cGUuIEFsbG93ZWQgdHlwZXMgYXJlICcsXG4gICAgICAgIGRlZmF1bHRNYXhTaXplTXNnMSA9ICdUaGlzIGZpbGUgaXMgdG9vIGxhcmdlLiBNYXhpbXVtIHNpemUgYWxsb3dlZCBpcyAnLFxuICAgICAgICBkZWZhdWx0TWF4U2l6ZU1zZzIgPSAnQ3VycmVudCBmaWxlIHNpemU6JyxcbiAgICAgICAgZGVmYXVsdE1pbkl0ZW1zTXNnID0gJ1lvdSBoYXZlIHRvIHVwbG9hZCBhdCBsZWFzdCBvbmUgZmlsZScsXG4gICAgICAgIGRlZmF1bHRNYXhJdGVtc01zZyA9ICdZb3UgY2FuXFwndCB1cGxvYWQgbW9yZSB0aGFuIG9uZSBmaWxlLic7XG5cbiAgICBpZiAoc2NoZW1hLnBhdHRlcm4gJiYgc2NoZW1hLnBhdHRlcm4ubWltZVR5cGUgJiYgIXNjaGVtYS5wYXR0ZXJuLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIHNjaGVtYS5wYXR0ZXJuLnZhbGlkYXRpb25NZXNzYWdlID0gZGVmYXVsdFBhdHRlcm5Nc2c7XG4gICAgfVxuICAgIGlmIChzY2hlbWEubWF4U2l6ZSAmJiBzY2hlbWEubWF4U2l6ZS5tYXhpbXVtICYmICFzY2hlbWEubWF4U2l6ZS52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICBzY2hlbWEubWF4U2l6ZS52YWxpZGF0aW9uTWVzc2FnZSA9IGRlZmF1bHRNYXhTaXplTXNnMTtcbiAgICAgICAgc2NoZW1hLm1heFNpemUudmFsaWRhdGlvbk1lc3NhZ2UyID0gZGVmYXVsdE1heFNpemVNc2cyO1xuICAgIH1cbiAgICBpZiAoc2NoZW1hLm1pbkl0ZW1zICYmIHNjaGVtYS5taW5JdGVtcy5taW5pbXVtICYmICFzY2hlbWEubWluSXRlbXMudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgc2NoZW1hLm1pbkl0ZW1zLnZhbGlkYXRpb25NZXNzYWdlID0gZGVmYXVsdE1pbkl0ZW1zTXNnO1xuICAgIH1cbiAgICBpZiAoc2NoZW1hLm1heEl0ZW1zICYmIHNjaGVtYS5tYXhJdGVtcy5tYXhpbXVtICYmICFzY2hlbWEubWF4SXRlbXMudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgc2NoZW1hLm1heEl0ZW1zLnZhbGlkYXRpb25NZXNzYWdlID0gZGVmYXVsdE1heEl0ZW1zTXNnO1xuICAgIH1cbiAgICByZXR1cm4gc2NoZW1hO1xufVxuXG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnc2NoZW1hRm9ybScpXG4gICAgLmNvbmZpZyhbJ3NjaGVtYUZvcm1Qcm92aWRlcicsICdzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyJywgJ3NmUGF0aFByb3ZpZGVyJyxcbiAgICAgICAgZnVuY3Rpb24gKHNjaGVtYUZvcm1Qcm92aWRlciwgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgc2ZQYXRoUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHZhciBwcmRnU2luZ2xlZmlsZVVwbG9hZCA9IGZ1bmN0aW9uIChuYW1lLCBzY2hlbWEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3NpbmdsZWZpbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IHByb2Nlc3NTY2hlbWEoc2NoZW1hKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHNjaGVtYUZvcm1Qcm92aWRlci5zdGRGb3JtT2JqKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGYua2V5ID0gb3B0aW9ucy5wYXRoO1xuICAgICAgICAgICAgICAgICAgICBmLnR5cGUgPSAncHJkZ0ZpbGVVcGxvYWQnO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmxvb2t1cFtzZlBhdGhQcm92aWRlci5zdHJpbmdpZnkob3B0aW9ucy5wYXRoKV0gPSBmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzY2hlbWFGb3JtUHJvdmlkZXIuZGVmYXVsdHMuYXJyYXkudW5zaGlmdChwcmRnU2luZ2xlZmlsZVVwbG9hZCk7XG5cbiAgICAgICAgICAgIHZhciBwcmRnTXVsdGlmaWxlVXBsb2FkID0gZnVuY3Rpb24gKG5hbWUsIHNjaGVtYSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnbXVsdGlmaWxlJykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBwcm9jZXNzU2NoZW1hKHNjaGVtYSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBzY2hlbWFGb3JtUHJvdmlkZXIuc3RkRm9ybU9iaihuYW1lLCBzY2hlbWEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBmLmtleSA9IG9wdGlvbnMucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgZi50eXBlID0gJ3ByZGdGaWxlVXBsb2FkJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5sb29rdXBbc2ZQYXRoUHJvdmlkZXIuc3RyaW5naWZ5KG9wdGlvbnMucGF0aCldID0gZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2NoZW1hRm9ybVByb3ZpZGVyLmRlZmF1bHRzLmFycmF5LnVuc2hpZnQocHJkZ011bHRpZmlsZVVwbG9hZCk7XG5cbiAgICAgICAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICAgICAgICAncHJkZ0ZpbGVVcGxvYWQnLFxuICAgICAgICAgICAgICAgICdkaXJlY3RpdmVzL2RlY29yYXRvcnMvYm9vdHN0cmFwL2FuZ3VsYXItc2NoZW1hLWZvcm0tcHJkZy1maWxlLXVwbG9hZC9hbmd1bGFyLXNjaGVtYS1mb3JtLXByZGctZmlsZS11cGxvYWQuaHRtbCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICBdKTsiLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
