define({ "api": [  {    "type": "get",    "url": "json/active_projects",    "title": "Get all active projects",    "version": "0.0.1",    "name": "GetAllActiveProjects",    "group": "JSON",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "projects",            "description": "<p>Array of projects</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.id",            "description": "<p>Project-UID</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.name",            "description": "<p>Project name</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.subtitle",            "description": "<p>Short description of the project</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.owner",            "description": "<p>Name of project-owner</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "projects.created",            "description": "<p>Project's create-timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.description",            "description": "<p>Longer description of the project's goal</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.goal",            "description": "<p>Project's funding-goal in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.current",            "description": "<p>Project's current funding</p> "          },          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "projects.pledges",            "description": "<p>Array of Pledges</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.pledges.user",            "description": "<p>Name of pledging user</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.pledges.public",            "description": "<p>Whether the pledge should publicly be displayed</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.pledges.amount",            "description": "<p>Pledge-Amount in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "projects.pledges.timestamp",            "description": "<p>Timestamp of Pledge-Submit</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.funded",            "description": "<p>True if the projects has been successfully funded</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.archived",            "description": "<p>True if project is archived; False if active</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nprojects: [\n    {\n        \"created\":\"2015-10-18T11:13:18.561Z\",\n        \"current\":7300,\n        \"description\":\"Lorem ipsum dolor sit amet.\",\n        \"funded\":false,\n        \"archived\":false,\n        \"goal\":86300,\n        \"id\":\"4ffd324c-30cf-43ef-b770-6432ccb669a8\",\n        \"name\":\"Fusion power plant\",\n        \"owner\":\"Bob\",\n        \"pledges\":[\n            {\n                \"amount\":7300,\n                \"public\":true,\n                \"timestamp\":\"2015-10-18T11:14:32.565Z\",\n                \"user\":\"Alice\"\n            }\n        ],\n        \"subtitle\":\"Revolutionize the world! Pure awesomeness.\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "routes/api-json.js",    "groupTitle": "JSON"  },  {    "type": "get",    "url": "json/active_projects",    "title": "Get all archived projects",    "version": "0.0.1",    "name": "GetAllArchivedProjects",    "group": "JSON",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "projects",            "description": "<p>Array of projects</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.id",            "description": "<p>Project-UID</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.name",            "description": "<p>Project name</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.subtitle",            "description": "<p>Short description of the project</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.owner",            "description": "<p>Name of project-owner</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "projects.created",            "description": "<p>Project's create-timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.description",            "description": "<p>Longer description of the project's goal</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.goal",            "description": "<p>Project's funding-goal in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.current",            "description": "<p>Project's current funding</p> "          },          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "projects.pledges",            "description": "<p>Array of Pledges</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.pledges.user",            "description": "<p>Name of pledging user</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.pledges.public",            "description": "<p>Whether the pledge should publicly be displayed</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.pledges.amount",            "description": "<p>Pledge-Amount in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "projects.pledges.timestamp",            "description": "<p>Timestamp of Pledge-Submit</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.funded",            "description": "<p>True if the projects has been successfully funded</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.archived",            "description": "<p>True if project is archived; False if active</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nprojects: [\n    {\n        \"created\":\"2015-10-18T11:13:18.561Z\",\n        \"current\":7300,\n        \"description\":\"Lorem ipsum dolor sit amet.\",\n        \"funded\":false,\n        \"archived\":true,\n        \"goal\":86300,\n        \"id\":\"4ffd324c-30cf-43ef-b770-6432ccb669a8\",\n        \"name\":\"Fusion power plant\",\n        \"owner\":\"Bob\",\n        \"pledges\":[\n            {\n                \"amount\":7300,\n                \"public\":true,\n                \"timestamp\":\"2015-10-18T11:14:32.565Z\",\n                \"user\":\"Alice\"\n            }\n        ],\n        \"subtitle\":\"Revolutionize the world! Pure awesomeness.\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "routes/api-json.js",    "groupTitle": "JSON"  },  {    "type": "get",    "url": "json/active_projects",    "title": "Get all projects (active & archived)",    "version": "0.0.1",    "name": "GetAllProjects",    "group": "JSON",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "projects",            "description": "<p>Array of projects</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.id",            "description": "<p>Project-UID</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.name",            "description": "<p>Project name</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.subtitle",            "description": "<p>Short description of the project</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.owner",            "description": "<p>Name of project-owner</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "projects.created",            "description": "<p>Project's create-timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.description",            "description": "<p>Longer description of the project's goal</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.goal",            "description": "<p>Project's funding-goal in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.current",            "description": "<p>Project's current funding</p> "          },          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "projects.pledges",            "description": "<p>Array of Pledges</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "projects.pledges.user",            "description": "<p>Name of pledging user</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.pledges.public",            "description": "<p>Whether the pledge should publicly be displayed</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "projects.pledges.amount",            "description": "<p>Pledge-Amount in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "projects.pledges.timestamp",            "description": "<p>Timestamp of Pledge-Submit</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.funded",            "description": "<p>True if the projects has been successfully funded</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "projects.archived",            "description": "<p>True if project is archived; False if active</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nprojects: [\n    {\n        \"created\":\"2015-10-18T11:13:18.561Z\",\n        \"current\":7300,\n        \"description\":\"Lorem ipsum dolor sit amet.\",\n        \"funded\":false,\n        \"archived\":true,\n        \"goal\":86300,\n        \"id\":\"4ffd324c-30cf-43ef-b770-6432ccb669a8\",\n        \"name\":\"Fusion power plant\",\n        \"owner\":\"Bob\",\n        \"pledges\":[\n            {\n                \"amount\":7300,\n                \"public\":true,\n                \"timestamp\":\"2015-10-18T11:14:32.565Z\",\n                \"user\":\"Alice\"\n            }\n        ],\n        \"subtitle\":\"Revolutionize the world! Pure awesomeness.\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "routes/api-json.js",    "groupTitle": "JSON"  },  {    "type": "get",    "url": "json/project/:id",    "title": "Get a specific project's data",    "version": "0.0.1",    "name": "GetProject",    "group": "JSON",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Project-UID</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Project name</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "subtitle",            "description": "<p>Short description of the project</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "owner",            "description": "<p>Name of project-owner</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "created",            "description": "<p>Project's create-timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "description",            "description": "<p>Longer description of the project's goal</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "goal",            "description": "<p>Project's funding-goal in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "current",            "description": "<p>Project's current funding</p> "          },          {            "group": "Success 200",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "pledges",            "description": "<p>Array of Pledges</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pledges.user",            "description": "<p>Name of pledging user</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "pledges.public",            "description": "<p>Whether the pledge should publicly be displayed</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pledges.amount",            "description": "<p>Pledge-Amount in cents</p> "          },          {            "group": "Success 200",            "type": "<p>Timestamp</p> ",            "optional": false,            "field": "pledges.timestamp",            "description": "<p>Timestamp of Pledge-Submit</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "funded",            "description": "<p>True if the projects has been successfully funded</p> "          },          {            "group": "Success 200",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "archived",            "description": "<p>True if project is archived; False if active</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"created\":\"2015-10-18T11:13:18.561Z\",\n    \"current\":7300,\n    \"description\":\"Lorem ipsum dolor sit amet.\",\n    \"funded\":false,\n    \"archived\":true,\n    \"goal\":86300,\n    \"id\":\"4ffd324c-30cf-43ef-b770-6432ccb669a8\",\n    \"name\":\"Fusion power plant\",\n    \"owner\":\"Bob\",\n    \"pledges\":[\n        {\n            \"amount\":7300,\n            \"public\":true,\n            \"timestamp\":\"2015-10-18T11:14:32.565Z\",\n            \"user\":\"Alice\"\n        }\n    ],\n    \"subtitle\":\"Revolutionize the world! Pure awesomeness.\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "ProjectNotFound",            "description": "<p>No project is associated with this UID.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"project_not_found\"\n}",          "type": "json"        }      ]    },    "filename": "routes/api-json.js",    "groupTitle": "JSON"  }] });