Angular Schema Form File-Upload
=================

This file upload add-on uses the [prdg-file-upload](https://github.com/JamesGuthrie/prdg-file-upload) plugin by James Guthrie to provide a file upload interface.

Installation
------------
The editor is an add-on to the Bootstrap decorator. To use it, just include
`angular-schema-form-prdg-file-upload.min.js`.

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install angular-schema-form-prdg-file-upload
```

You'll need to load a few additional files to use the editor:

**Be sure to load this projects files after you load angular schema form**

Example:

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" media="all" rel="stylesheet" />
<link href="/schema-form-file.css" media="all" rel="stylesheet" />

<script src="/bower_components/angular/angular.min.js" type="text/javascript"></script>
<script src="/bower_components/angular-messages/angular-messages.js" type="text/javascript"></script>
<script src="/bower_components/angular-sanitize/angular-sanitize.min.js" type="text/javascript"></script>
<script src="/bower_components/angular-translate/angular-translate.js" type="text/javascript"></script>
<script src="/bower_components/tv4/tv4.js" type="text/javascript"></script>
<script src="/bower_components/objectpath/lib/ObjectPath.js" type="text/javascript"></script>
<script src="/bower_components/angular-schema-form/dist/schema-form.min.js" type="text/javascript"></script>
<script src="/bower_components/angular-schema-form/dist/bootstrap-decorator.min.js" type="text/javascript"></script>
<script src="/bower_components/ng-file-upload/ng-file-upload-all.min.js" type="text/javascript"></script>
<script src="/schema-form-file.min.js" type="text/javascript"></script>
```

In your angular module, add the prodigi file upload as a dependency.

```javascript
angular.module('yourModule', ['schemaForm', 'pascalprecht.translate', 'prodigi.fileupload']);
```

Usage
-----
The add-on adds one new form type, `prdgFileUpload`, two default mappings.

| Schema                                       | Default Form type  |
|:--------------------------------------------:|:------------------:|
| "type": "array" and "format": "singlefile"   |   prdgFileUpload   |
| "type": "array" and "format": "multifile"    |   prdgFileUpload   |


Options
-------

### single- and multifile upload

**Example**

```javascript
{
   "schema": {
      "type":       "object",
      "title":      "Album",
      "properties": {
         "image":  {
            "title":         "Image",
            "type":          "array",
            "format":        "singlefile",
            "x-schema-form": {
               "type": "array"
            },
            "pattern":       {
               "mimeType":          "image/*",
               "validationMessage": "Falscher Dateityp: "
            },
            "maxSize":       {
               "maximum":            "2MB",
               "validationMessage":  "Erlaubte Dateigröße überschritten: ",
               "validationMessage2": "Aktuelle Dateigröße: "
            },
            "maxItems":      {
               "validationMessage": "Es wurden mehr Dateien hochgeladen als erlaubt."
            },
            "minItems":      {
               "validationMessage": "Sie müssen mindestens eine Datei hochladen"
            }
         },
         "images": {
            "title":         "Images",
            "type":          "array",
            "format":        "multifile",
            "x-schema-form": {
               "type": "array"
            },
            "pattern":       {
               "mimeType":          "image/*,!.gif",
               "validationMessage": "Falscher Dateityp: "
            },
            "maxSize":       {
               "maximum":            "2MB",
               "validationMessage":  "Erlaubte Dateigröße überschritten: ",
               "validationMessage2": "Aktuelle Dateigröße: "
            },
            "maxItems":      {
               "validationMessage": "Es wurden mehr Dateien hochgeladen als erlaubt."
            },
            "minItems":      {
               "validationMessage": "Sie müssen mindestens eine Datei hochladen"
            }
         }
      },
      "required":   [
         "images"
      ]
   },
   "form":   [
      {
         "key":      "image",
         "type":     "prdgFileUpload",
         "endpoint": "https://angular-file-upload-cors-srv.appspot.com/upload"
      },
      {
         "key":      "images",
         "type":     "prdgFileUpload",
         "endpoint": "https://angular-file-upload-cors-srv.appspot.com/upload"
      }
   ]
}
```


Example pictures
-------
**Initial state**

![alt tag](https://raw.githubusercontent.com/saburab/angular-schema-form-prdg-file-upload/master/upload_1.png)


**Preview**

![alt tag](https://raw.githubusercontent.com/saburab/angular-schema-form-prdg-file-upload/master/upload_2.png)


**On error**

![alt tag](https://raw.githubusercontent.com/saburab/angular-schema-form-prdg-file-upload/master/upload_3.png)
