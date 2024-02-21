// Sample JSON data
const resumeData = `
{
    "Resume": {
        "name": "Aswin",
        "address": "236 Gandhi Street, Ashok Nagar, State 625612",
        "phone": "8812365546",
        "email": "aswinmj001@gmail.com",
        "summary": "Highly organized and self-motivated unique storyteller seeks the position of Xyz (name of the field) journalist. Bringing excellent verbal and written communication skills with two years of experience working in a multimedia environment. Ability to deliver promotable and compelling stories to the company's website and social media platforms.",
        "education": [
            {
                "degree": "Bachelor of Science in Animation and Vfx",
                "school": "Kendra Vidyalayam Hr. Sec School",
                "graduation_year": "2021"
            }
        ],
        "experience": [
            {
                "position": "3D Surfacing Artist",
                "company": "Technicolor",
                "location": "Bengaluru, Karnataka",
                "start_date": "July 2022",
                "end_date": "April 2023"
            }
        ],
        "skills": {
            "software": [
                "Autodesk Maya",
                "Foundry Mari",
                "Adobe Photoshop",
                "Adobe Substance Painter",
                "Adobe Premiere Pro",
                "Blender",
                "Zbrush"
            ],
            "problem_solving_and_analytical_skills": true,
            "team_collaboration_and_communication": true
        },
        "languages": [
            {
                "language": "English",
                "proficiency": "Intermediate"
            }
        ]
    }
}
`;
const resume = JSON.parse(resumeData);

// FOR IN Iteration

for (let item in resume.Resume) {
    console.log(item + ": " + JSON.stringify(resume.Resume[item]));
}

//FOR Iteration

let keys = Object.keys(resume);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(JSON.stringify(resume[key]));
}

//FOR OF Iteration

let keyss = Object.keys(resume);

for (let key of keyss) {
    console.log(JSON.stringify(resume[key]));
}

//FOR EACH iteration

Object.keys(resume).forEach(key => {
    console.log(JSON.stringify(resume[key]));
})
