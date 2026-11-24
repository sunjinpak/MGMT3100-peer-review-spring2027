// Team roster data for MGMT 3100 Human Resource Management (Spring 2027, Sections 01 and 02)
// Teams are formed from the pre-course survey and announced on 1/27.
// Fill `teams` and `emails` from the Canvas roster after 1/27. Use section-prefixed
// team numbers ("01-1", "02-1") so the two sections never share a team number.
const SURVEY_CONFIG = {
  course: "MGMT 3100 Human Resource Management (Spring 2027)",
  apiUrl: "https://script.google.com/macros/s/AKfycbzxYIqdmpYQqqMUZowzIog7oqeEf3sDUChcmL6BRMVs6KtOXuVxc9gTZXY6WKz6ZQrb/exec",

  // Labels carry the class date so students do not read "Team meeting 5"
  // as "Team 5's meeting" and pick by their own team number.
  activities: [
    "Team Meeting 1 (1/27)",
    "Team Meeting 1-2 (2/1)",
    "Team Meeting 2 (2/3)",
    "Team Meeting 3 (2/10)",
    "Team Meeting 4 (2/17)",
    "Team Meeting 5 (2/24)",
    "Team Meeting 6 (3/3)",
    "Team Meeting 7 (3/10)",
    "Team Meeting 8 (3/17)",
    "Team Meeting 9 (4/7)",
    "Team Meeting 10 (4/19)",
    "Team Meeting 11 (4/26)",
    "Team Meeting 12 (5/3)",
    "Discussion Leader: Ch 3 Case (presenting team only, due 2/8)",
    "Discussion Leader: Ch 6 Case (presenting team only, due 2/17)",
    "Discussion Leader: Ch 7 Case (presenting team only, due 2/24)",
    "Discussion Leader: Ch 8 Case (presenting team only, due 3/1)",
    "Discussion Leader: Ch 9 Case (presenting team only, due 3/3)",
    "Discussion Leader: Ch 10 Case (presenting team only, due 3/8)",
    "Discussion Leader: Ch 11 Case (presenting team only, due 3/10)",
    "Discussion Leader: Ch 12 Case (presenting team only, due 3/15)",
    "Discussion Leader: Ch 13 Case (presenting team only, due 3/17)",
    "Discussion Leader: Ch 14 Case (presenting team only, due 4/7)",
    "Discussion Leader: Ch 15 Case (presenting team only, due 4/14)",
    "Discussion Leader: Ch 16 Case (presenting team only, due 5/3)",
    "Team Project Presentation (5/10 or 5/12)"
  ],

  teams: [
    // { number: "01-1", members: ["First Last", "First Last"] },
  ],

  ratingScale: [
    { value: 1, label: "Little or weak effort", description: "Detrimental to team" },
    { value: 2, label: "Insufficient effort", description: "Met minimal standards of team" },
    { value: 3, label: "Sufficient effort", description: "Contributed adequately to team" },
    { value: 4, label: "Very strong work", description: "Contributed significantly to team" },
    { value: 5, label: "Excellent work", description: "Was crucial component to team's success" }
  ],

  emails: {
    // "First Last": "id@csub.edu",
  }
};
