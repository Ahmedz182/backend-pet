const products = [
    {
        "id": 1,
        "title": "Bella",
        "category": "Cat",
        "vendor": "5485451651",
        "tags": [
            "Cat",
            "Ragdoll"
        ],
        "breed": "Ragdoll",
        "age": 1.5,
        "weight": 2.5,
        "color": "white",
        "adobtAvailabilty": false,
        "price": 20000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/ragdoll/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/ragdoll/thumbnail.png"
    },
    {
        "id": 2,
        "title": "Daisy",
        "category": "Cat",
        "vendor": "5485451652",
        "tags": [
            "Cat",
            "Maine coon"
        ],
        "breed": "Maine Coon",
        "age": 1,
        "weight": 5,
        "color": "brown",
        "adobtAvailabilty": true,
        "price": 55000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/maine-coon/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/maine-coon/thumbnail.png"
    },
    {
        "id": 3,
        "title": "Casper",
        "category": "Cat",
        "vendor": "5485451653",
        "tags": [
            "Cat",
            "Persian"
        ],
        "breed": "Persian",
        "age": 1,
        "weight": 5,
        "color": "white",
        "adobtAvailabilty": true,
        "price": 23000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/persian/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/persian/thumbnail.png"
    },
    {
        "id": 4,
        "title": "Alice",
        "category": "Cat",
        "vendor": "5485451654",
        "tags": [
            "Cat",
            "Siamese"
        ],
        "breed": "Siamese",
        "age": 2,
        "weight": 5,
        "color": "white",
        "adobtAvailabilty": true,
        "price": 20000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/siamese/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/siamese/thumbnail.png"
    },
    {
        "id": 5,
        "title": "Ariel",
        "category": "Cat",
        "vendor": "5485451655",
        "tags": [
            "Cat",
            "British Shorthair"
        ],
        "breed": "British Shorthair",
        "age": 1.5,
        "weight": 7,
        "color": "grey",
        "adobtAvailabilty": true,
        "price": 230000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/british-shorthair/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/british-shorthair/thumbnail.png"
    },
    {
        "id": 6,
        "title": "Luna",
        "category": "Cat",
        "vendor": "5485451656",
        "tags": [
            "Cat",
            "Sphynx"
        ],
        "breed": "Sphynx",
        "age": 1.5,
        "weight": 3,
        "color": "grey",
        "adobtAvailabilty": true,
        "price": 155000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/sphynx/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/sphynx/thumbnail.png"
    },
    {
        "id": 7,
        "title": "Cristy",
        "category": "Cat",
        "vendor": "5485451657",
        "tags": [
            "Cat",
            "Scottish fold"
        ],
        "breed": "Scottish Fold",
        "age": 2,
        "weight": 6,
        "color": "white",
        "adobtAvailabilty": true,
        "price": 200000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/scottish-fold/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/scottish-fold/thumbnail.png"
    },
    {
        "id": 8,
        "title": "Cleoco",
        "category": "Cat",
        "vendor": "5485451658",
        "tags": [
            "Cat",
            "Devon rex"
        ],
        "breed": "Devon Rex",
        "age": 1.5,
        "weight": 5,
        "color": "grey",
        "adobtAvailabilty": true,
        "price": 25000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/devon-rex/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/devon-rex/thumbnail.png"
    },
    {
        "id": 9,
        "title": "Oliver",
        "category": "Cat",
        "vendor": "5485451659",
        "tags": [
            "Cat",
            "American Shorthair"
        ],
        "breed": "American Shorthair",
        "age": 1,
        "weight": 4,
        "color": "white",
        "adobtAvailabilty": true,
        "price": 20000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/american-shorthair/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/american-shorthair/thumbnail.png"
    },
    {
        "id": 10,
        "title": "Vinston",
        "category": "Cat",
        "vendor": "5485451660",
        "tags": [
            "Cat",
            "Abyssinian"
        ],
        "breed": "Abyssinian",
        "age": 1,
        "weight": 3,
        "color": "brown",
        "adobtAvailabilty": true,
        "price": 55000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Basic",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/abyssinian/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/abyssinian/thumbnail.png"
    },
    {
        "id": 11,
        "title": "Luna",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Shih tzu"
        ],
        "breed": "Shih Tzu",
        "age": 3,
        "weight": 7.5, // Average of 5-10 kg
        "color": "Brown/White",
        "adobtAvailabilty": true,
        "price": 60000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Very Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/shih-tzu/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/dog/shih-tzu/thumbnail.png"
    },
    {
        "id": 12,
        "title": "Jasper",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "German Shepherd"
        ],
        "breed": "German Shepherd",
        "age": 2,
        "weight": 16.5, // Average of 15-18 kg
        "color": "Black/Tan",
        "adobtAvailabilty": true,
        "price": 150000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "9 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/german-shepherd/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/german-shepherd/thumbnail.png"
    },
    {
        "id": 13,
        "title": "Cooper",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Labrador"
        ],
        "breed": "Labrador Retriever",
        "age": 1.5,
        "weight": 16.5, // Average of 15-18 kg
        "color": "Yellow",
        "adobtAvailabilty": true,
        "price": 50000,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "9.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/labrador/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/labrador/thumbnail.png"
    },
    {
        "id": 14,
        "title": "Max",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Golden Retriever"
        ],
        "breed": "Golden Retriever",
        "age": 1,
        "weight": 16.5, // Average of 14-19 kg
        "color": "Golden",
        "adobtAvailabilty": true,
        "price": 105000,
        "gender": "Female",
        "size": "Medium-Large",
        "vendorLocation": "DHA Defence, KRC",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Medium",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/golden-retriever/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/golden-retriever/thumbnail.png"
    },
    {
        "id": 15,
        "title": "Hanery",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Siberian Husky"
        ],
        "breed": "Siberian Husky",
        "age": 2,
        "weight": 18, // Average of 16-20 kg
        "color": "Gray/White",
        "adobtAvailabilty": true,
        "price": 65000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "8.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/siberian-husky/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/siberian-husky/thumbnail.png"
    },
    {
        "id": 16,
        "title": "Louie",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Beagle"
        ],
        "breed": "Beagle",
        "age": 1,
        "weight": 8.5, // Average of 7-10 pounds
        "color": "Tricolor",
        "adobtAvailabilty": true,
        "price": 10000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "DHA Defence, KRC",
        "humanFriendlyLevel": "High",
        "energyLevel": "7.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/beagle/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/beagle/thumbnail.png"
    },
    {
        "id": 17,
        "title": "Wiskers",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Alaskan Malamute"
        ],
        "breed": "Alaskan Malamute",
        "age": 1.5,
        "weight": 26.5, // Average of 24-29 kg
        "color": "Gray/White",
        "adobtAvailabilty": true,
        "price": 77000,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/alaskan-malamute/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/alaskan-malamute/thumbnail.png"
    },
    {
        "id": 18,
        "title": "Cloea",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Australian Cattle Dog"
        ],
        "breed": "Australian Cattle Dog",
        "age": 2,
        "weight": 22.5, // Average of 20-25 kg
        "color": "Blue/Red",
        "adobtAvailabilty": true,
        "price": 65000,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/australian-cattle-dog/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/australian-cattle-dog/thumbnail.png"
    },
    {
        "id": 19,
        "title": "Scout",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Rottweiler"
        ],
        "breed": "Rottweiler",
        "age": 1,
        "weight": 38, // Average of 36-40 kg
        "color": "Black/Tan",
        "adobtAvailabilty": true,
        "price": 70000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "9.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/rottweiler/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/rottweiler/thumbnail.png"
    },
    {
        "id": 20,
        "title": "Ace",
        "category": "Dog",
        "vendor": "5485451651",
        "tags": [
            "Dog", 
            "Border Collie"
        ],
        "breed": "Border Collie",
        "age": 1,
        "weight": 38, // Average of 36-40 kg
        "color": "Black/Tan",
        "adobtAvailabilty": true,
        "price": 70000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "9.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/rottweiler/1.png"
        ],
          "thumbnail": "https://cdn.dummyjson.com/products/images/dog/rottweiler/thumbnail.png"
    },
    {
        "id": 21,
        "title": "Jax",
        "category": "Puppy",
        "vendor": "VendorLocation_Karachi",
        "tags": [
            "Puppy", 
            "Yorkshire Terrier"
        ],
        "breed": "Yorkshire Terrier",
        "age": 0.7,
        "weight": 1.5,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 40000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "High",
        "energyLevel": "7.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/yorkshire-terrier/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/yorkshire-terrier/thumbnail.png"
    },
    {
        "id": 22,
        "title": "Rufus",
        "category": "Puppy",
        "vendor": "VendorLocation_Lahore",
        "tags": [
            "Puppy", 
            "Pomeranian"
        ],
        "breed": "Pomeranian",
        "age": 0.58,
        "weight": 1.4,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 180000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "7 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/pomeranian/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/pomeranian/thumbnail.png"
    },
    {
        "id": 23,
        "title": "Appolo",
        "category": "Puppy",
        "vendor": "VendorLocation_Islamabad",
        "tags": [
            "Puppy", 
            "Maltese Dog"
        ],
        "breed": "Maltese Dog",
        "age": 0.42,
        "weight": 2.5,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 50000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/maltese/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/maltese/thumbnail.png"
    },
    {
        "id": 24,
        "title": "Luci",
        "category": "Puppy",
        "vendor": "VendorLocation_Multan",
        "tags": [
            "Puppy", 
            "Chihuahua"
        ],
        "breed": "Chihuahua",
        "age": 0.33,
        "weight": 1,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 220000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/chihuahua/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/chihuahua/thumbnail.png"
    },
    {
        "id": 25,
        "title": "Max",
        "category": "Puppy",
        "vendor": "VendorLocation_Lahore",
        "tags": [
            "Puppy", 
            "Bichon Frise"
        ],
        "breed": "Bichon Frise",
        "age": 0.42,
        "weight": 3,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 333000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "7.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
             "https://cdn.dummyjson.com/products/images/dog/bichon-frise/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/bichon-frise/thumbnail.png"
    },
    {
        "id": 26,
        "title": "Pearl",
        "category": "Puppy",
        "vendor": "VendorLocation_Islamabad",
        "tags": [
            "Puppy", 
            "Havanese"
        ],
        "breed": "Havanese",
        "age": 0.5,
        "weight": 2,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 420000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Easy",
        "images": [
             "https://cdn.dummyjson.com/products/images/dog/havanese/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/havanese/thumbnail.png"
    },
    {
        "id": 27,
        "title": "Trixie",
        "category": "Puppy",
        "vendor": "VendorLocation_Lahore",
        "tags": [
            "Puppy", 
            "Chow Chow"
        ],
        "breed": "Chow Chow",
        "age": 0.67,
        "weight": 2.5,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 290000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "8 on 10",
        "easeOfTraining": "Easy",
        "images": [
                "https://cdn.dummyjson.com/products/images/dog/chow-chow/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/chow-chow/thumbnail.png"
    },
    {
        "id": 28,
        "title": "Skye",
        "category": "Puppy",
        "vendor": "VendorLocation_Karachi",
        "tags": [
            "Puppy", 
            "Bolognese Dog"
        ],
        "breed": "Bolognese Dog",
        "age": 0.67,
        "weight": 2.5,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 278000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "High",
        "energyLevel": "8.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/bolognese/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/bolognese/thumbnail.png"
    },
    {
        "id": 29,
        "title": "Stella",
        "category": "Puppy",
        "vendor": "VendorLocation_Lahore",
        "tags": [
            "Puppy", 
            "Morkie"
        ],
        "breed": "Morkie",
        "age": 0.42,
        "weight": 2,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 40000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "9 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/morkie/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/morkie/thumbnail.png"
    },
    {
        "id": 30,
        "title": "Ellie",
        "category": "Puppy",
        "vendor": "VendorLocation_Multan",
        "tags": [
            "Puppy", 
            "Maltipoo"
        ],
        "breed": "Maltipoo",
        "age": 0.67,
        "weight": 1.5,
        "color": "N/A",
        "adoptAvailability": true,
        "price": 75000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "High",
        "energyLevel": "9.5 on 10",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/dog/maltipoo/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/dog/maltipoo/thumbnail.png"
    },
    {
        "id": 31,
        "title": "Luna",
        "category": "Kitten",
        "vendor": "5485451652",
        "tags": [
            "Kitten",
            "Persian"
        ],
        "breed": "Persian",
        "age": 2.0,
        "weight": 3.0,
        "color": "gray",
        "adobtAvailabilty": true,
        "price": 18000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "High",
        "energyLevel": "Low",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/persian/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/persian/thumbnail.png"
    },
    {
        "id": 32,
        "title": "Milo",
        "category": "Kitten",
        "vendor": "5485451653",
        "tags": [
            "Kitten",
            "Maine coon"
        ],
        "breed": "Maine Coon",
        "age": 1.2,
        "weight": 4.5,
        "color": "brown",
        "adobtAvailabilty": true,
        "price": 22000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "Very High",
        "energyLevel": "High",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/mainecoon/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/mainecoon/thumbnail.png"
    },
    {
        "id": 33,
        "title": "Oliver",
        "category": "Kitten",
        "vendor": "5485451654",
        "tags": [
            "Kitten",
            "British Shorthair"
        ],
        "breed": "British Shorthair",
        "age": 0.8,
        "weight": 2.3,
        "color": "blue-gray",
        "adobtAvailabilty": true,
        "price": 16000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/britishshorthair/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/britishshorthair/thumbnail.png"
    },
    {
        "id": 34,
        "title": "Cleo",
        "category": "Kitten",
        "vendor": "5485451655",
        "tags": [
            "Kitten",
            "Siamese"
        ],
        "breed": "Siamese",
        "age": 1.1,
        "weight": 2.8,
        "color": "seal point",
        "adobtAvailabilty": false,
        "price": 19000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Faisalabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/siamese/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/siamese/thumbnail.png"
    },
    {
        "id": 35,
        "title": "Simba",
        "category": "Kitten",
        "vendor": "5485451656",
        "tags": [
            "Kitten",
            "Bengal"
        ],
        "breed": "Bengal",
        "age": 0.9,
        "weight": 3.5,
        "color": "spotted",
        "adobtAvailabilty": true,
        "price": 25000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Rawalpindi",
        "humanFriendlyLevel": "Very High",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/bengal/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/bengal/thumbnail.png"
    },
    {
        "id": 36,
        "title": "Nala",
        "category": "Kitten",
        "vendor": "5485451657",
        "tags": [
            "Kitten",
            "Scottish Fold"
        ],
        "breed": "Scottish Fold",
        "age": 1.6,
        "weight": 2.7,
        "color": "white",
        "adobtAvailabilty": true,
        "price": 23000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Peshawar",
        "humanFriendlyLevel": "Very High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/scottishfold/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/scottishfold/thumbnail.png"
    },
    {
        "id": 37,
        "title": "Leo",
        "category": "Kitten",
        "vendor": "5485451658",
        "tags": [
            "Kitten",
            "Sphynx"
        ],
        "breed": "Sphynx",
        "age": 1.3,
        "weight": 3.0,
        "color": "pink",
        "adobtAvailabilty": false,
        "price": 27000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/sphynx/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/sphynx/thumbnail.png"
    },
    {
        "id": 38,
        "title": "Willow",
        "category": "Kitten",
        "vendor": "5485451659",
        "tags": [
            "Kitten",
            "Burmese"
        ],
        "breed": "Burmese",
        "age": 1.0,
        "weight": 3.2,
        "color": "chocolate",
        "adobtAvailabilty": true,
        "price": 24000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "Very High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/burmese/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/cat/burmese/thumbnail.png"
    },
    {
        "id": 39,
        "title": "Daisy",
        "category": "Kitten",
        "vendor": "5485451660",
        "tags": [
            "Kitten",
            "American Shorthair"
        ],
        "breed": "American Shorthair",
        "age": 1.4,
        "weight": 3.1,
        "color": "tabby",
        "adobtAvailabilty": true,
        "price": 20000,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Quetta",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/americanshorthair/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/americanshorthair/thumbnail.png"
    },
    {
        "id": 40,
        "title": "Charlie",
        "category": "Kitten",
        "vendor": "5485451661",
        "tags": [
            "Kitten",
            "Abyssinian"
        ],
        "breed": "Abyssinian",
        "age": 1.7,
        "weight": 3.4,
        "color": "ruddy",
        "adobtAvailabilty": true,
        "price": 26000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Sialkot",
        "humanFriendlyLevel": "High",
        "energyLevel": "Very High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/cat/abyssinian/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/cat/abyssinian/thumbnail.png"
    },        
    {
        "id": 41,
        "title": "Nemo",
        "category": "Fish",
        "vendor": "5485451701",
        "tags": [
            "Fish",
            "Clownfish"
        ],
        "breed": "Clownfish",
        "age": 1.0,
        "weight": 0.1,
        "color": "orange and white",
        "adobtAvailabilty": true,
        "price": 3000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Karachi",
        "energyLevel": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/clownfish/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fish/clownfish/thumbnail.png"
    },
    {
        "id": 42,
        "title": "Bubbles",
        "category": "Fish",
        "vendor": "5485451702",
        "tags": [
            "Fish",
            "Goldfish"
        ],
        "breed": "Goldfish",
        "age": 1.2,
        "weight": 0.2,
        "color": "golden",
        "adobtAvailabilty": true,
        "price": 1500,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Lahore",
        "energyLevel": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/goldfish/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fish/goldfish/thumbnail.png"
    },
    {
        "id": 43,
        "title": "Dory",
        "category": "Fish",
        "vendor": "5485451703",
        "tags": [
            "Fish",
            "Blue Tang"
        ],
        "breed": "Blue Tang",
        "age": 1.5,
        "weight": 0.3,
        "color": "blue and yellow",
        "adobtAvailabilty": false,
        "price": 4500,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Islamabad",
        "energyLevel": "High",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/bluetang/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fish/bluetang/thumbnail.png"
    },
    {
        "id": 44,
        "title": "Finn",
        "category": "Fish",
        "vendor": "5485451704",
        "tags": [
            "Fish",
            "Betta"
        ],
        "breed": "Betta",
        "age": 0.8,
        "weight": 0.05,
        "color": "red",
        "adobtAvailabilty": true,
        "price": 2000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Peshawar",
        "energyLevel": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/betta/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fish/betta/thumbnail.png"
    },
    {
        "id": 45,
        "title": "Splash",
        "category": "Fish",
        "vendor": "5485451705",
        "tags": [
            "Fish",
            "Guppy"
        ],
        "breed": "Guppy",
        "age": 0.6,
        "weight": 0.04,
        "color": "rainbow",
        "adobtAvailabilty": true,
        "price": 1200,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Faisalabad",
        "energyLevel": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/guppy/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fish/guppy/thumbnail.png"
    },
    {
        "id": 46,
        "title": "Gill",
        "category": "Fish",
        "vendor": "5485451706",
        "tags": [
            "Fish",
            "Angelfish"
        ],
        "breed": "Angelfish",
        "age": 1.3,
        "weight": 0.2,
        "color": "silver and black",
        "adobtAvailabilty": false,
        "price": 3500,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Rawalpindi",
        "energyLevel": "High",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/angelfish/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fish/angelfish/thumbnail.png"
    },
    {
        "id": 47,
        "title": "Benny",
        "category": "Fish",
        "vendor": "5485451707",
        "tags": [
            "Fish",
            "Koi"
        ],
        "breed": "Koi",
        "age": 2.0,
        "weight": 0.5,
        "color": "orange and black",
        "adobtAvailabilty": true,
        "price": 5000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Lahore",
        "energyLevel": "High",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/koi/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fish/koi/thumbnail.png"
    },
    {
        "id": 48,
        "title": "Coral",
        "category": "Fish",
        "vendor": "5485451708",
        "tags": [
            "Fish",
            "Butterflyfish"
        ],
        "breed": "Butterflyfish",
        "age": 1.4,
        "weight": 0.2,
        "color": "yellow and black",
        "adobtAvailabilty": true,
        "price": 4000,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Multan",
        "energyLevel": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/butterflyfish/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fish/butterflyfish/thumbnail.png"
    },
    {
        "id": 49,
        "title": "Shadow",
        "category": "Fish",
        "vendor": "5485451709",
        "tags": [
            "Fish",
            "Black Moor"
        ],
        "breed": "Black Moor",
        "age": 1.1,
        "weight": 0.15,
        "color": "black",
        "adobtAvailabilty": true,
        "price": 2500,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Quetta",
        "energyLevel": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/blackmoor/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fish/blackmoor/thumbnail.png"
    },
    {
        "id": 50,
        "title": "Bubbles",
        "category": "Fish",
        "vendor": "5485451710",
        "tags": [
            "Fish",
            "Discus"
        ],
        "breed": "Discus",
        "age": 1.6,
        "weight": 0.25,
        "color": "red and white",
        "adobtAvailabilty": false,
        "price": 5500,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Sialkot",
        "energyLevel": "High",
        "images": [
            "https://cdn.dummyjson.com/products/images/fish/discus/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fish/discus/thumbnail.png"
    },
    {
        "id": 51,
        "title": "Spike",
        "category": "Reptile",
        "vendor": "5485451652",
        "tags": [
            "Reptile",
            "Bearded Dragon"
        ],
        "breed": "Bearded Dragon",
        "age": 3,
        "weight": 0.4,
        "color": "tan",
        "adobtAvailabilty": true,
        "price": 15000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/beardeddragon/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/beardeddragon/thumbnail.png"
    },
    {
        "id": 52,
        "title": "Sandy",
        "category": "Reptile",
        "vendor": "5485451653",
        "tags": [
            "Reptile",
            "Leopard Gecko"
        ],
        "breed": "Leopard Gecko",
        "age": 2.5,
        "weight": 0.08,
        "color": "yellow",
        "adobtAvailabilty": true,
        "price": 10000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "Low",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/leopardgecko/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/leopardgecko/thumbnail.png"
    },
    {
        "id": 53,
        "title": "Rocky",
        "category": "Reptile",
        "vendor": "5485451654",
        "tags": [
            "Reptile",
            "Iguana"
        ],
        "breed": "Green Iguana",
        "age": 5,
        "weight": 3.2,
        "color": "green",
        "adobtAvailabilty": true,
        "price": 30000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Faisalabad",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/iguana/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/iguana/thumbnail.png"
    },
    {
        "id": 54,
        "title": "Speedy",
        "category": "Reptile",
        "vendor": "5485451655",
        "tags": [
            "Reptile",
            "Tortoise"
        ],
        "breed": "Sulcata Tortoise",
        "age": 8,
        "weight": 10,
        "color": "brown",
        "adobtAvailabilty": false,
        "price": 50000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Low",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/tortoise/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/tortoise/thumbnail.png"
    },
    {
        "id": 55,
        "title": "Slither",
        "category": "Reptile",
        "vendor": "5485451656",
        "tags": [
            "Reptile",
            "Python"
        ],
        "breed": "Ball Python",
        "age": 4,
        "weight": 2.1,
        "color": "brown",
        "adobtAvailabilty": true,
        "price": 25000,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "High",
        "energyLevel": "Low",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/ballpython/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/ballpython/thumbnail.png"
    },
    {
        "id": 56,
        "title": "Zigzag",
        "category": "Reptile",
        "vendor": "5485451657",
        "tags": [
            "Reptile",
            "Corn Snake"
        ],
        "breed": "Corn Snake",
        "age": 2,
        "weight": 0.5,
        "color": "red",
        "adobtAvailabilty": false,
        "price": 18000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Sialkot",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/cornsnake/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/cornsnake/thumbnail.png"
    },
    {
        "id": 57,
        "title": "Shelly",
        "category": "Reptile",
        "vendor": "5485451658",
        "tags": [
            "Reptile",
            "Turtle"
        ],
        "breed": "Red-Eared Slider",
        "age": 1.2,
        "weight": 0.2,
        "color": "green",
        "adobtAvailabilty": true,
        "price": 5000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Peshawar",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/redearedslider/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/redearedslider/thumbnail.png"
    },
    {
        "id": 58,
        "title": "Chomper",
        "category": "Reptile",
        "vendor": "5485451659",
        "tags": [
            "Reptile",
            "Alligator"
        ],
        "breed": "American Alligator",
        "age": 7,
        "weight": 25,
        "color": "dark green",
        "adobtAvailabilty": false,
        "price": 100000,
        "gender": "Male",
        "size": "Extra Large",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/alligator/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/alligator/thumbnail.png"
    },
    {
        "id": 59,
        "title": "Slinky",
        "category": "Reptile",
        "vendor": "5485451660",
        "tags": [
            "Reptile",
            "Monitor Lizard"
        ],
        "breed": "Asian Water Monitor",
        "age": 4.5,
        "weight": 6,
        "color": "gray",
        "adobtAvailabilty": true,
        "price": 35000,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Quetta",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/monitorlizard/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/monitorlizard/thumbnail.png"
    },
    {
        "id": 60,
        "title": "Gator",
        "category": "Reptile",
        "vendor": "5485451661",
        "tags": [
            "Reptile",
            "Caiman"
        ],
        "breed": "Caiman",
        "age": 3.5,
        "weight": 8.2,
        "color": "dark green",
        "adobtAvailabilty": false,
        "price": 75000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/caiman/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/caiman/thumbnail.png"
    },
    {
        "id": 61,
        "title": "Fluffy",
        "category": "Reptile",
        "vendor": "5485451662",
        "tags": [
            "Reptile",
            "Chameleon"
        ],
        "breed": "Veiled Chameleon",
        "age": 1.8,
        "weight": 0.12,
        "color": "green",
        "adobtAvailabilty": true,
        "price": 12000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/chameleon/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/chameleon/thumbnail.png"
    },
    {
        "id": 62,
        "title": "Snappy",
        "category": "Reptile",
        "vendor": "5485451663",
        "tags": [
            "Reptile",
            "Snapping Turtle"
        ],
        "breed": "Common Snapping Turtle",
        "age": 6,
        "weight": 4.5,
        "color": "brown",
        "adobtAvailabilty": false,
        "price": 20000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/snappingturtle/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/snappingturtle/thumbnail.png"
    },
    {
        "id": 63,
        "title": "Slippy",
        "category": "Reptile",
        "vendor": "5485451664",
        "tags": [
            "Reptile",
            "Garter Snake"
        ],
        "breed": "Garter Snake",
        "age": 1,
        "weight": 0.1,
        "color": "black",
        "adobtAvailabilty": true,
        "price": 8000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Faisalabad",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/gartersnake/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/gartersnake/thumbnail.png"
    },
    {
        "id": 64,
        "title": "Grumpy",
        "category": "Reptile",
        "vendor": "5485451665",
        "tags": [
            "Reptile",
            "Gila Monster"
        ],
        "breed": "Gila Monster",
        "age": 4,
        "weight": 2.7,
        "color": "orange",
        "adobtAvailabilty": false,
        "price": 40000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Peshawar",
        "humanFriendlyLevel": "Low",
        "energyLevel": "Moderate",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/gilamonster/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/gilamonster/thumbnail.png"
    },
    {
        "id": 65,
        "title": "Spike Jr.",
        "category": "Reptile",
        "vendor": "5485451666",
        "tags": [
            "Reptile",
            "Bearded Dragon"
        ],
        "breed": "Bearded Dragon",
        "age": 1.5,
        "weight": 0.3,
        "color": "tan",
        "adobtAvailabilty": true,
        "price": 16000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/beardeddragon/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/beardeddragon/thumbnail.png"
    },
    {
        "id": 66,
        "title": "Slick",
        "category": "Reptile",
        "vendor": "5485451667",
        "tags": [
            "Reptile",
            "King Cobra"
        ],
        "breed": "King Cobra",
        "age": 3,
        "weight": 3,
        "color": "black",
        "adobtAvailabilty": false,
        "price": 60000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/kingcobra/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/kingcobra/thumbnail.png"
    },
    {
        "id": 67,
        "title": "Scaly",
        "category": "Reptile",
        "vendor": "5485451668",
        "tags": [
            "Reptile",
            "Komodo Dragon"
        ],
        "breed": "Komodo Dragon",
        "age": 6.5,
        "weight": 60,
        "color": "gray",
        "adobtAvailabilty": false,
        "price": 150000,
        "gender": "Female",
        "size": "Extra Large",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/komododragon/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/komododragon/thumbnail.png"
    },
    {
        "id": 68,
        "title": "Stripes",
        "category": "Reptile",
        "vendor": "5485451669",
        "tags": [
            "Reptile",
            "Milk Snake"
        ],
        "breed": "Milk Snake",
        "age": 2,
        "weight": 0.5,
        "color": "red and white",
        "adobtAvailabilty": true,
        "price": 17000,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/milksnake/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/milksnake/thumbnail.png"
    },
    {
        "id": 69,
        "title": "Fang",
        "category": "Reptile",
        "vendor": "5485451670",
        "tags": [
            "Reptile",
            "Rattlesnake"
        ],
        "breed": "Western Diamondback Rattlesnake",
        "age": 5,
        "weight": 3.5,
        "color": "brown",
        "adobtAvailabilty": false,
        "price": 70000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Quetta",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/rattlesnake/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/rattlesnake/thumbnail.png"
    },    
    {
        "id": 70,
        "title": "Rex",
        "category": "Reptile",
        "vendor": "5485451671",
        "tags": [
            "Reptile",
            "Frilled Lizard"
        ],
        "breed": "Frilled Lizard",
        "age": 3,
        "weight": 0.7,
        "color": "brown",
        "adobtAvailabilty": true,
        "price": 22000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Sialkot",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/frilledlizard/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/frilledlizard/thumbnail.png"
    },
    {
        "id": 71,
        "title": "Sunny",
        "category": "Bird",
        "vendor": "5485451672",
        "tags": [
            "Bird",
            "Parrot"
        ],
        "breed": "Sun Conure",
        "age": 2,
        "weight": 0.1,
        "color": "yellow",
        "adobtAvailabilty": true,
        "price": 15000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/sunconure/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/sunconure/thumbnail.png"
    },
    {
        "id": 72,
        "title": "Coco",
        "category": "Bird",
        "vendor": "5485451673",
        "tags": [
            "Bird",
            "Cockatiel"
        ],
        "breed": "Cockatiel",
        "age": 1.5,
        "weight": 0.08,
        "color": "gray",
        "adobtAvailabilty": true,
        "price": 8000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Karachi",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/cockatiel/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/cockatiel/thumbnail.png"
    },
    {
        "id": 73,
        "title": "Sky",
        "category": "Bird",
        "vendor": "5485451674",
        "tags": [
            "Bird",
            "Budgie"
        ],
        "breed": "Budgerigar",
        "age": 1,
        "weight": 0.03,
        "color": "blue",
        "adobtAvailabilty": true,
        "price": 5000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Islamabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/budgie/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/budgie/thumbnail.png"
    },
    {
        "id": 74,
        "title": "Pepper",
        "category": "Bird",
        "vendor": "5485451675",
        "tags": [
            "Bird",
            "Parrot"
        ],
        "breed": "African Grey Parrot",
        "age": 5,
        "weight": 0.4,
        "color": "gray",
        "adobtAvailabilty": false,
        "price": 50000,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Peshawar",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/africangrey/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/africangrey/thumbnail.png"
    },
    {
        "id": 75,
        "title": "Tweety",
        "category": "Bird",
        "vendor": "5485451676",
        "tags": [
            "Bird",
            "Canary"
        ],
        "breed": "Canary",
        "age": 2,
        "weight": 0.05,
        "color": "yellow",
        "adobtAvailabilty": true,
        "price": 7000,
        "gender": "Male",
        "size": "Small",
        "vendorLocation": "Faisalabad",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/canary/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/canary/thumbnail.png"
    },
    {
        "id": 76,
        "title": "Jasper",
        "category": "Bird",
        "vendor": "5485451677",
        "tags": [
            "Bird",
            "Macaw"
        ],
        "breed": "Blue and Gold Macaw",
        "age": 3,
        "weight": 1.2,
        "color": "blue and yellow",
        "adobtAvailabilty": false,
        "price": 100000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/macaw/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/macaw/thumbnail.png"
    },
    {
        "id": 77,
        "title": "Ruby",
        "category": "Bird",
        "vendor": "5485451678",
        "tags": [
            "Bird",
            "Lovebird"
        ],
        "breed": "Peach-faced Lovebird",
        "age": 1.2,
        "weight": 0.04,
        "color": "green and peach",
        "adobtAvailabilty": true,
        "price": 6000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Rawalpindi",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/lovebird/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/lovebird/thumbnail.png"
    },
    {
        "id": 78,
        "title": "Emerald",
        "category": "Bird",
        "vendor": "5485451679",
        "tags": [
            "Bird",
            "Parakeet"
        ],
        "breed": "Indian Ringneck Parakeet",
        "age": 2.5,
        "weight": 0.12,
        "color": "green",
        "adobtAvailabilty": true,
        "price": 18000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Multan",
        "humanFriendlyLevel": "Moderate",
        "energyLevel": "High",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/ringneck/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/ringneck/thumbnail.png"
    },
    {
        "id": 79,
        "title": "Sunny Jr.",
        "category": "Bird",
        "vendor": "5485451680",
        "tags": [
            "Bird",
            "Cockatoo"
        ],
        "breed": "Sulphur-crested Cockatoo",
        "age": 4,
        "weight": 0.9,
        "color": "white and yellow",
        "adobtAvailabilty": false,
       "price": 70000,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Quetta",
        "humanFriendlyLevel": "High",
        "energyLevel": "Moderate",
        "easeOfTraining": "Moderate",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/cockatoo/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/cockatoo/thumbnail.png"
    },
    {
        "id": 80,
        "title": "Chirpy",
        "category": "Bird",
        "vendor": "5485451672",
        "tags": [
            "Bird",
            "Parrot"
        ],
        "breed": "African Grey Parrot",
        "age": 2,
        "weight": 0.5,
        "color": "grey",
        "adobtAvailabilty": true,
        "price": 35000,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Lahore",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/africangrey/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/africangrey/thumbnail.png"
    },
    {
        "id": 81,
        "title": "Leo",
        "category": "Mammal",
        "vendor": "5485451673",
        "tags": [
            "Mammal",
            "Lion"
        ],
        "breed": "African Lion",
        "age": 5,
        "weight": 190,
        "color": "golden",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Nairobi",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/mammal/lion/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mammal/lion/thumbnail.png"
    },
    {
        "id": 82,
        "title": "Bella",
        "category": "Mammal",
        "vendor": "5485451674",
        "tags": [
            "Mammal",
            "Tiger"
        ],
        "breed": "Bengal Tiger",
        "age": 4,
        "weight": 220,
        "color": "orange with black stripes",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Kolkata",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/mammal/tiger/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mammal/tiger/thumbnail.png"
    },
    {
        "id": 83,
        "title": "Fluffy",
        "category": "Mammal",
        "vendor": "5485451675",
        "tags": [
            "Mammal",
            "Panda"
        ],
        "breed": "Giant Panda",
        "age": 3,
        "weight": 150,
        "color": "black and white",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Chengdu",
        "humanFriendlyLevel": "Medium",
        "energyLevel": "Medium",
        "easeOfTraining": "Medium",
        "images": [
            "https://cdn.dummyjson.com/products/images/mammal/panda/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mammal/panda/thumbnail.png"
    },
    {
        "id": 84,
        "title": "Spike",
        "category": "Reptile",
        "vendor": "5485451676",
        "tags": [
            "Reptile",
            "Crocodile"
        ],
        "breed": "Saltwater Crocodile",
        "age": 12,
        "weight": 500,
        "color": "dark green",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Male",
        "size": "Large",
        "vendorLocation": "Darwin",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/crocodile/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/crocodile/thumbnail.png"
    },
    {
        "id": 85,
        "title": "Shelly",
        "category": "Reptile",
        "vendor": "5485451677",
        "tags": [
            "Reptile",
            "Tortoise"
        ],
        "breed": "Galápagos Tortoise",
        "age": 80,
        "weight": 250,
        "color": "dark brown",
        "adobtAvailabilty": true,
        "price": 50000,
       "gender": "Female",
        "size": "Large",
        "vendorLocation": "Galápagos",
        "humanFriendlyLevel": "Medium",
        "energyLevel": "Low",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/reptile/tortoise/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/reptile/tortoise/thumbnail.png"
    },
    {
        "id": 86,
        "title": "Ravi",
        "category": "Bird",
        "vendor": "5485451678",
        "tags": [
            "Bird",
            "Eagle"
        ],
        "breed": "Bald Eagle",
        "age": 6,
        "weight": 6.5,
        "color": "brown and white",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Male",
        "size": "Medium",
        "vendorLocation": "Alaska",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Medium",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/eagle/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/eagle/thumbnail.png"
    },
    {
        "id": 87,
        "title": "Stripe",
        "category": "Mammal",
        "vendor": "5485451679",
        "tags": [
            "Mammal",
            "Zebra"
        ],
        "breed": "Plains Zebra",
        "age": 4,
        "weight": 320,
        "color": "black and white",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Female",
        "size": "Medium",
        "vendorLocation": "Johannesburg",
        "humanFriendlyLevel": "Medium",
        "energyLevel": "High",
        "easeOfTraining": "Medium",
        "images": [
            "https://cdn.dummyjson.com/products/images/mammal/zebra/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mammal/zebra/thumbnail.png"
    },
    {
        "id": 88,
        "title": "Sunny",
        "category": "Bird",
        "vendor": "5485451680",
        "tags": [
            "Bird",
            "Parrot"
        ],
        "breed": "Sun Conure",
        "age": 2,
        "weight": 0.3,
        "color": "yellow and green",
        "adobtAvailabilty": true,
        "price": 25000,
        "gender": "Female",
        "size": "Small",
        "vendorLocation": "Mumbai",
        "humanFriendlyLevel": "High",
        "energyLevel": "High",
        "easeOfTraining": "Easy",
        "images": [
            "https://cdn.dummyjson.com/products/images/bird/conure/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/bird/conure/thumbnail.png"
    },
    {
        "id": 89,
        "title": "Luna",
        "category": "Mammal",
        "vendor": "5485451681",
        "tags": [
            "Mammal",
            "Wolf"
        ],
        "breed": "Grey Wolf",
        "age": 7,
        "weight": 60,
        "color": "grey",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Montana",
        "humanFriendlyLevel": "Low",
        "energyLevel": "High",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/mammal/wolf/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mammal/wolf/thumbnail.png"
    },
    {
        "id": 90,
        "title": "Daisy",
        "category": "Mammal",
        "vendor": "5485451682",
        "tags": [
            "Mammal",
            "Elephant"
        ],
        "breed": "African Elephant",
        "age": 25,
        "weight": 5000,
        "color": "grey",
        "adobtAvailabilty": false,
        "price": 0,
        "gender": "Female",
        "size": "Large",
        "vendorLocation": "Kenya",
        "humanFriendlyLevel": "Medium",
        "energyLevel": "Medium",
        "easeOfTraining": "Difficult",
        "images": [
            "https://cdn.dummyjson.com/products/images/mammal/elephant/1.png"
        ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mammal/elephant/thumbnail.png"
    }
];

export default products;
