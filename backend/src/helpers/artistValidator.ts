
import {validateRequiredFieldString, validateOptionalFieldString,
    validateOptionalFieldNumber, validateRequiredFieldArray,
    validateRequiredFieldBoolean, validateMongoIdParam
 } from './validationRequired.js';


export const createArtistValidator=[
    validateRequiredFieldString("artistName","Name is required"),
    validateRequiredFieldString("bio","Please Enter a bio"),
    validateRequiredFieldString("shipsFrom.city", "Please enter a shipping city"),
    validateRequiredFieldString("shipFrom.state", "Please enter shipping state" ),
    validateOptionalFieldString("profileImage"),
    validateOptionalFieldString("coverImage"),
    validateRequiredFieldArray("specializations","Enter your specializations"),
    validateRequiredFieldArray("mediums", "Enter your mediums"),
    validateRequiredFieldArray("styles","Enter your styles"),
    validateRequiredFieldArray("techniques","Enter your techniques"),
    validateOptionalFieldNumber("yearsOfExperience"),
    validateRequiredFieldBoolean("commission.currentlyAccepting",
        "Enter whether you are currently accepting commission?"
    ),
    validateRequiredFieldArray("commission.styles",
        "Please mention your styles"
    ),
    validateOptionalFieldNumber("commission.startingPrice"),
    validateRequiredFieldArray("commission.mediumsOffered",
        "Please mention you commission mediums"
    ),
    validateRequiredFieldArray("commission.size",
        "Please memntion your commission sizes"
    ),
    validateOptionalFieldNumber("estimatedResponseDays"),
    validateOptionalFieldNumber("estimatedDeliveryDays.min"),
    validateOptionalFieldNumber("estimatedDeliveryDays.max"),
    validateOptionalFieldString("socialLinks.instagram"),
    validateOptionalFieldString("socialLinks.website"),
    validateOptionalFieldString("socialLinks.twitter")
    
];

export const getArtist=[
    validateMongoIdParam("artistId")
]


