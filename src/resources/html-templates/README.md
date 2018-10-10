EMAIL TEMPLATES and ATTACHMENTS

!IMPORTANT: Always GET the email template before updating to make sure you have the latest version

https://www.freeformatter.com/json-escape.html

POST https://istack-pdf-services.com/templates

```
{
    
    "name": "",
    "__v": 0,
    "attachments": [
        {
            "name": "",
            "filename": "{PDF Attachment Filename}.pdf",
            "content": "", // Escaped HTML Template String for attachment
            "_id": "5b1e464c9b56b611fb588fc2" // is attachment ID required?
        }
    ],
    "email": {
        "subject": "{Email Subject}",
        "body": "", // Escaped HTML Template String for Email Body
        "from": "{Sender Text}"
    }
}
```

GET https://istack-pdf-services.com/templates/{template-id}

PUT https://istack-pdf-services.com/templates/{template-id}

```
{
    "id": "{template-id}",
    "name": "",
    "__v": 0,
    "attachments": [
        {
            "name": "",
            "filename": "{PDF Attachment Filename}.pdf",
            "content": "", // Escaped HTML Template String for attachment
            "_id": "5b1e464c9b56b611fb588fc2" // is attachment ID required?
        }
    ],
    "email": {
        "subject": "{Email Subject}",
        "body": "", // Escaped HTML Template String for Email Body
        "from": "{Sender Text}"
    }
}
```

POST https://istack-pdf-services.com/pdf-generators?templateId={template-id}

```
{ 
    "to" : "jayson+test@istackmanila.com", 
    "emailData" : { 
        "full_name" : "Harold Niones", 
        "invoice_number" : "INV-000338", 
        "invoice_date" : "2018-07-03", 
        "currency_symbol" : "$", 
        "total" : 11 
    }, 
    "content" : { 
        "full_name" : "Harold Niones", 
        "email" : "harold+test@istackmanila.com", 
        "line1" : "", 
        "line2" : "", 
        "line3" : "", 
        "line4" : "", 
        "invoice_number" : "INV-000338", 
        "invoice_date" : "2018-07-03", 
        "currency_symbol" : "$", 
        "total_amount" : 11, 
        "invoice_items" : [
            { 
                "description" : "ECML Europe 2018 Single USD", 
                "amount" : 11, 
                "currency_symbol" : "$" 
            }
        ]
    }, 
    "email" : true 
}
```
