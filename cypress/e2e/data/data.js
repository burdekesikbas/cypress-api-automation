class Data {

    headerPayload() {
        const headerBody = {
            "accept": "application/json",
        }
        return headerBody;
    }
    bodyPayload() {
        const postData = {
            "id": 1,
            "username": "burde",
            "firstName": "burde",
            "lastName": "kesikbas",
            "email": "burde@hotmail.com",
            "password": "12345",
            "phone": "12345678909",
            "userStatus": 0
        }
        return postData;
    }
    updatePayload(firstName, lastName) {
        const postData = {
            "id": 2,
            "username": "bürde",
            "firstName": "firstname",
            "lastName": "lastname",
            "email": "burde@hotmail.com",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        }
        return postData;
    }
    bodyPayload2() {
        const postData = {
            "id": 1,
            "petId": 1,
            "quantity": 1,
            "shipDate": "2024-08-09T16:17:47.340Z",
            "status": "placed",
            "complete": true
        }
        return postData;
    }

    bodyPayload3() {
        const postData = {
            "id": 1,
            "category": {
                "id": 1,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 1,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        return postData;
    }

    updatePayload2() {
        const postData = {
            "id": 2,
            "category": {
                "id": 2,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 2,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        return postData;
    }

    updatePayload3() {
        const postData = {
            "id": 2,
            "category": {
                "id": 2,
                "name": "string"
            },
            "name": "golden",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 2,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        return postData;
    }



}

export default Data;