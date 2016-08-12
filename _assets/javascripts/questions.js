export const QuestionFlow = {
  questions: [
    {
      question: "Are you looking for yourself or someone else?",
      name: "looking",
      type: "radio",
      //legend: "Select as many as apply",
      values: [
        {value: "myself", label: "Myself"},
        {value: "someoneelse", label: "Someone else"}
      ]
    },
    {
      question: "How old are they?",
      name: "age",
      type: "radio",
      //legend: "Select as many as apply",
      values: [
        {value: "under50", label: "Under 50"},
        {value: "50to64", label: "50 to 64"},
        {value: "65to79", label: "65 to 79"},
        {value: "80to95", label: "80 to 95"},
        {value: "95", label: "95 plus"}
      ]
    },
    {
      question: "What language are they most comfortable using?",
      name: "language",
      type: "checkbox",
      legend: "This helps us point you to the correct area in order to get help in that area.",
      values: [
        {value: "english", label: "English"},
        {value: "simplifiedchinese", label: "Simplified Chinese (Mandarin)"},
        {value: "spanish", label: "Spanish"},
        {value: "italian", label: "Italian"},
        {value: "greek", label: "Greek"},
        {value: "vietnamese", label: "Vietnamese"},
        {value: "arabic", label: "Arabic"},
        {value: "croatian", label: "Croatian"},
        {value: "dutch", label: "Dutch"},
        {value: "german", label: "German"},
        {value: "hindi", label: "Hindi"},
        {value: "korean", label: "Korean"},
        {value: "macedonian", label: "Macedonian"},
        {value: "maltese", label: "Maltese"},
        {value: "polish", label: "Polish"},
        {value: "russian", label: "Russian"},
        {value: "serbian", label: "Serbian"},
        {value: "traditionalchinese", label: "Traditional Chinese"},
        {value: "cantonses", label: "Cantonese"},
        {value: "other", label: "Other"}
      ]
    },
    {
      question: "What is their cultural background?",
      name: "culture",
      //condition: "ownhome,family",
      type: "autocomplete",
      legend: "Select as many as apply",
      values: [
        {value: "culture1", label: "Managing at home"},
        {value: "culture2", label: "Managing medication"},
        {value: "culture3", label: "Getting out and about"}
      ]
    },
    {
      question: "Where are they looking to live?",
      name: "live",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "ownhome", label: "Own home"},
        {value: "family", label: "Family or friend’s home"},
        {value: "retirementvillage", label: "Retirement village"},
        {value: "nursinghome", label: "Nursing home"},
        {value: "nolive", label: "I don't know"}
      ],
      glossary: [
        {term: "Own home", description: "The house that you currently live in."},
        {term: "Family or friend’s home", description: "A family of firend house that the person may move to."},
        {term: "Retirement village", description: "A retirement village is going to be defined later."},
        {term: "Nursing home", description: "A nursing home is going to be defined later."},
        {term: "I don't know", description: "I dont know is when you don't know where the person is going to live."}
      ]
    },
    {
      question: "Where do they live?",
      name: "location",
      condition: "ownhome,family",
      type: "location",
      legend: "This helps us to suggest local services.",
      values: []
    },
    {
      question: "Where are they considering living?",
      //legend: "This helps us to suggest local services.",
      name: "newlocation",
      condition: "retirementvillage,nursinghome",
      type: "locationaddmore",
      legend: "postcode, town or village",
      values: []
    },
    {
      question: "Do they have any of the following conditions?",
      name: "medicalconditions",
      type: "autocomplete",
      //condition: "ownhome,family",
      legend: "This helps us point you to the correct area in order to get help in that area.",
      values: [
        {value: "arthritis", label: "Arthritis"},
        {value: "heartdisease", label: "Heart Disease"},
        {value: "cancer", label: "Cancer"},
        {value: "respiratorydisease", label: "Respiratory Disease"},
        {value: "alzheimers", label: "Alzheimer’s Disease"},
        {value: "osteoporosis", label: "Osteoporosis"},
        {value: "diabetes", label: "Diabetes"},
        {value: "influenza", label: "Influenza and Pneumonia"},
        {value: "falls", label: "Falls"},
        {value: "substanceabuse", label: "Substance Abuse"},
        {value: "obesity", label: "Obesity"},
        {value: "depression", label: "Depression"},
        {value: "sight", label: "Sight problems"},
        {value: "hearing", label: "Hearing problems"},
        {value: "noneofthese", label: "None of these"}
      ]
    },
    {
      question: "Have you considered getting services at home?",
      //legend: "This helps us to suggest local services.",
      name: "homeservices",
      condition: "nursinghome+noneofthese",
      type: "radio",
      legend: "Please select one of these",
      values: [
        {value: "yes", label: "Yes"},
        {value: "no", label: "No"}
      ]
    },
    {
      question: "What do they need help with?",
      name: "help",
      condition: "ownhome,family,retirementvillage,no",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "meals", label: "Meals"},
        {value: "hygiene", label: "Hygiene"},
        {value: "medications", label: "Managing medications"},
        {value: "home", label: "Home maintenance"},
        {value: "socialconnections", label: "Social connections"},
        {value: "exercise", label: "Exercise"},
        {value: "transport", label: "Transport"}
      ]
    },
    {
      question: "Are they recieving a pension?",
      name: "pension",
      type: "checkbox",
      legend: "This helps us to suggest things like subsidised services and the right forms.",
      values: [
        {value: "pension", label: "Age pension"},
        {value: "disability", label: "Disability pension"},
        {value: "veteran", label: "Veteran/war widow or widower"}
      ]
    }
  ],
  results: [
    {
      title: "Getting home help",
      id: "homehelp",
      condition: "retirementvillage,nursinghome,nolive",
      abstract: "Below are some next steps and information to assist you to get the types of in home help you need.",
      list: [
        {
          title: "What's in your area",
          type: "result"
        },
        {
          title: "Related information",
          type: "result"
        }
      ]
    },
    {
      title: "Getting out and about",
      id: "outandabout",
      condition: "",
      abstract: "Below are some local results next steps and information to assist you to get the types of help with transport that you need",
      list: [
        {
          title: "What's in your area",
          type: "result"
        },
        {
          title: "Next steps",
          type: "steps"
        },
        {
          title: "Related information",
          type: "information"
        }
      ]
    },
    {
      title: "Help with health and wellbeing",
      id: "healthwellbeing",
      condition: "",
      abstract: "Below are some local results next steps and information to assist you to get the types of help with health and wellbeing you need.",
      list: [
        {
          title: "Local results",
          type: "result"
        },
        {
          title: "Next steps",
          type: "steps"
        },
        {
          title: "Related information",
          type: "information"
        }
      ]
    }
  ]
}
