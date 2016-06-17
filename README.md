Angular Schema Form File-Upload
=================

This file upload add-on uses the [prdg-file-upload](https://github.com/JamesGuthrie/prdg-file-upload) plugin to provide a file upload and management interface. The problem that this solves that other file upload modules do not is that you can obtain and modify the list of files which were uploaded to the endpoint.

Installation
------------

The simplest way to install this is with bower, which will also include dependencies:
```bash
bower install angular-schema-form-prdg-file-upload
```

The editor is an add-on to the Bootstrap decorator. To use it, just include
`angular-schema-form-prdg-file-upload.min.js`.

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


## Example

The following form field declaration provides an example of the required attributes.

```javascript
"form":   [
      {
         "key":      "image",
         "type":     "prdgFileUpload",
         "endpoint": "https://angular-file-upload-cors-srv.appspot.com/upload"
      },
```

### Endpoint

In order to provide links to the uploaded file, the file endpoint must return the following json representation:

```javascript
{
	name: "File Name",
	file_size: 1024, //(file size in bytes)
	download_url: "https://example.com/path/to/file"
}
```

This representation will be stored as a list in the form's model.

### Full Example

```javascript
{
  "schema": {
     "image":  {
       "title":         "Image",
       "type":          "array",
       "format":        "singlefile",     
     },
     required: [
       "image"
     ]
   },
   "form":   [
      {
         "key":      "image",
         "type":     "prdgFileUpload",
         "endpoint": "https://angular-file-upload-cors-srv.appspot.com/upload"
      }
   ]
}
```
